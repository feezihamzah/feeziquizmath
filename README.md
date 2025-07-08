# 📘 FeeziQuizMath – Rounding Quiz App

A fun and interactive **Math Rounding Quiz** built with **React** (frontend) and **PHP + MySQL** (backend) to test users’ understanding of rounding numbers to the nearest ten.

🔗 Live Demo: [https://feeziquizmath.vercel.app](https://feeziquizmath.vercel.app)

---

## 🚀 Features

- ✅ 12 interactive multiple-choice questions (MCQs)
- 🧠 Built-in scoring logic (correct answers only)
- ⏱️ 20-minute countdown timer with auto-submit
- 📊 Leaderboard to view top 20 scores
- 🌐 Data saved securely using PHP + MySQL
- 🎨 Smooth animations using Framer Motion
- 🔐 CORS-enabled secure API

---

## 🛠️ Tech Stack

| Layer       | Tech Used                         |
|-------------|-----------------------------------|
| Frontend    | React (Vite), Framer Motion, CSS |
| Backend     | PHP (Vanilla) + MySQL            |
| Hosting     | Vercel (Frontend) + InfinityFree (Backend) |
| DB Table    | `table_quiz_math (name, score, status)` |

---

## 📂 Project Structure

feeziquizmath/
│
├── src/
│ ├── App.js # Main quiz logic
│ ├── data.js # Questions array
│ ├── leaderboard.js # Leaderboard page
│ ├── utils.js # Timer formatter
│ └── index.css # Custom styles
│
├── database/
│ ├── save.php # Save score to DB
│ └── leaderboard.php # Fetch leaderboard
│
└── public/
└── index.html # React root

yaml
Copy
Edit

---

## 📌 How to Run Locally

### Frontend (React)

```bash
git clone https://github.com/feezihamzah/feeziquizmath.git
cd feeziquizmath
npm install
npm run dev
Backend (PHP)
Upload database/save.php and leaderboard.php to a PHP hosting server

Setup MySQL table:

sql
Copy
Edit
CREATE TABLE table_quiz_math (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  score INT,
  status TINYINT DEFAULT 1
);
📈 API Endpoints
Endpoint	Description	Method
/database/save.php	Save score (name + score)	POST
/database/leaderboard.php	Fetch top 20 scores	GET

👤 Author
Muhammad Feezi Bin Hamzah
Frontend Developer | Kuala Lumpur
📧 feezy92@gmail.com
📱 +6017-580 1348
