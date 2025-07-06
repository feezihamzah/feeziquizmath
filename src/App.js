// src/App.js
import React, { useState, useEffect } from "react";
import { questions } from "./data";
import { formatTime } from "./utils";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(20 * 60);

  useEffect(() => {
    if (!started || score !== null) return;
    if (timeLeft <= 0) {
      submitQuiz();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [started, score, timeLeft]);

  const startQuiz = () => {
    if (!name.trim()) return alert("Please enter your name");
    setStarted(true);
  };

  const selectOption = (option) => {
    const qId = questions[index].id;
    setAnswers((prev) => ({ ...prev, [qId]: option }));
    setTimeout(() => {
      if (index < questions.length - 1) setIndex(index + 1);
      else submitQuiz();
    }, 300);
  };

  const submitQuiz = async () => {
    if (score !== null) return;
    const correct = questions.filter((q) => answers[q.id] === q.answer).length;
    setScore(correct);

    await fetch("https://mathtest.free.nf/quizzes/database/save.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, score: correct }),
    });
  };

  return (
    <div className="container">
      {!started && score === null && (
        <>
          <h2>🎯 Rounding Quiz</h2>
          <label>Enter your name:</label>
          <input
            className="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Feezi"
          />
          <button onClick={startQuiz} className="btn">Start</button>
        </>
      )}

      {started && score === null && (
        <>
          <div className="timer">Time: {formatTime(timeLeft)}</div>
          <div className="card">
            <AnimatePresence mode="wait">
              <motion.h3
                key={questions[index].question}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {questions[index].question}
              </motion.h3>
            </AnimatePresence>

            <div>
              {questions[index].options.map((opt) => (
                <motion.button
                  key={opt}
                  layout
                  whileTap={{ scale: 0.95 }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => selectOption(opt)}
                  className="btn"
                  style={{ display: "block", margin: "10px 0" }}
                >
                  {opt}
                </motion.button>
              ))}
            </div>

            <div className="text-sm mt-3">Question {index + 1} / {questions.length}</div>
          </div>
        </>
      )}

      {score !== null && (
        <>
          <h2>✅ Done, {name}!</h2>
          <p>Your score is <strong>{score}</strong> out of {questions.length}</p>
          <button className="btn" onClick={() => window.location.href = "/leaderboard"}>View Leaderboard</button>
        </>
      )}
    </div>
  );
}
