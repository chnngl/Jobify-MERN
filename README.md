# 🗂️ MERN Job Application Tracker

A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) to help users manage and track their job applications. The app includes search, filtering, pagination, and a personalized dashboard for monitoring application progress.

## 🚀 Features

- 🔐 **Authentication** – Secure user login & registration using JWT
- 📄 **User-specific data** – Each user sees only their own job applications
- 🔍 **Search & Filtering** – Quickly find applications by keyword, status, or company
- 📊 **Dashboard View** – See a summary of applications by status
- 📚 **Pagination** – Improves performance and load speed on large datasets
- ✅ **Form validation & error handling** – Robust backend and frontend checks
- 🌐 **Deployed on Render** – With environment variable configuration for production

---

## 🖼️ Tech Stack

- **Frontend:** React.js, React Router, Axios, Tailwind CSS (or other styling)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT + Bcrypt
- **Deployment:** Render (frontend + backend), MongoDB Atlas

---

## 📦 Folder Structure

client/ # React frontend
└── src/
└── components/
└── pages/
└── services/
server/ # Node.js + Express backend
└── controllers/
└── routes/
└── models/
└── middleware/

---

## ⚙️ Getting Started (Local Setup)

### 1. Clone the repository

git clone https://github.com/your-username/job-application-tracker.git
cd job-application-tracker

2. Install dependencies
cd server
npm install

cd ../client
npm install

3. Create .env file in /server directory
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Run the app
Backend:
cd server
npm run dev

Frontend:
cd client
npm start
The app will be running at:
Frontend → http://localhost:3000
Backend → http://localhost:5000
