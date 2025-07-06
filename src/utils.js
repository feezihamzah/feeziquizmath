// src/utils.js
export const formatTime = (timeLeft) => {
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");
  return `${mins}:${secs}`;
};
