// src/Leaderboard.js
import React, { useEffect, useState } from "react";

export default function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ibfim.com/lms/lmstest/database/leaderboard.php")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error("Failed to fetch leaderboard", err));
  }, []);

  return (
    <div className="container">
      <h2>🏆 Leaderboard</h2>
      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#e0e7ff" }}>
            <th style={{ padding: "10px", textAlign: "left" }}>#</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>{i + 1}</td>
              <td style={{ padding: "10px" }}>{entry.name}</td>
              <td style={{ padding: "10px" }}>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn" style={{ marginTop: "20px" }} onClick={() => window.location.href = "/"}>
        Back to Quiz
      </button>
    </div>
  );
}
