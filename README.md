# Smart Attendance and Productivity Analyzer

A modern, responsive, and intuitive web application designed for seamless employee attendance tracking, productivity monitoring, and AI-driven insights. Built entirely without complex styling frameworks to demonstrate clean architecture, and features a robust Role-Based Access Control logic for different organizational levels.

## Features

*   **Attendance Tracking**: Log present and absent days effectively with real-time percentages.
*   **AI Productivity Insights**: Automatically analyzes employee statistics against predefined algorithms to identify top performers and at-risk employees, offering actionable insights.
*   **Employee Dashboard**: A responsive, rich-featured dashboard providing a macroscopic view of total employees, daily headcounts, average efficiency, and overall team performance.
*   **Leave Management System**: An integrated leave tracker. Employees can view their history and apply for leaves, while authorized roles (HR/Admin) can review, approve, or reject these requests dynamically.
*   **Role-Based Authentication**: Secure JWT-based authentication controlling access for three core roles: **Admin**, **HR**, and **Employee**.

## Tech Stack

*   **Frontend**: React (Functional Components, Hooks), Vite, Recharts (for dynamic charts, visualizing trends across months), JavaScript (ES6+), Vanilla CSS (Flexbox & CSS Grid for tailored responsive design).
*   **Backend**: Node.js, Express.js, Mongoose (MongoDB ODM).
*   **Database**: MongoDB (NoSQL document database for scalable data storage).
*   **Authentication**: JSON Web Tokens (JWT) protecting sensitive API endpoints.

## Folder Structure

```
Project1/
├── backend/
│   ├── server.js                 # Entry point, MongoDB connection, routes & middleware
│   ├── .env                      # Environment variables (PORT, JWT_SECRET, MONGODB_URI)
│   ├── seedData.js               # Database seeding script for initial data
│   ├── routes/
│   │   ├── authRoutes.js         # Login & signup handlers
│   │   ├── employeeRoutes.js     # Protected employee CRUD routes
│   │   └── leaveRoutes.js        # Leave application and approval routes
│   ├── middleware/
│   │   ├── authMiddleware.js     # Validates JWT tokens on header request
│   │   └── roleMiddleware.js     # Validates role-based access control
│   ├── models/
│   │   ├── User.js               # User schema (email, password, role, name)
│   │   ├── Employee.js           # Employee schema (attendance, productivity metrics)
│   │   └── Leave.js              # Leave schema (request status tracking)
└── frontend/
    ├── package.json              # Vite/React configuration and dependencies
    ├── index.html
    └── src/
        ├── App.jsx               # Application routes, private routes, layouts
        ├── App.css               # Centralized minimalist aesthetics style configurations
        ├── main.jsx              # React DOM mounting
        ├── components/           # Reusable View Components
        │   ├── Sidebar.jsx
        │   ├── Navbar.jsx
        │   ├── DashboardCards.jsx
        │   ├── EmployeeTable.jsx
        │   ├── AIInsights.jsx
        │   ├── Charts.jsx
        │   └── LeaveTable.jsx
        ├── pages/                # High-level route views
        │   ├── Login.jsx
        │   ├── Signup.jsx
        │   ├── Dashboard.jsx
        │   └── LeaveManagement.jsx
        ├── utils/
        │   ├── aiAnalyzer.js     # Functional utility producing algorithmic insights
        │   └── auth.js           # Frontend JWT/Role helpers handling localStorage
        └── data/
            ├── employees.js      # Fallback frontend schemas
            └── leaves.js
```

## How to Run

- [Node.js](https://nodejs.org/) (version 16 or later)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community)

### Setting Up MongoDB

1. **Download & Install MongoDB**: Download from the official website or use Chocolatey: `choco install mongodb-server`
2. **Start MongoDB Service**: 
   - Windows (auto-start if installed as service): `mongod` or check service status
   - MongoDB runs on `mongodb://localhost:27017` by default
3. **Verify Connection**: Use MongoDB Compass or command line to test access

### Starting the Backend

1. Navigate to the `backend` directory: `cd backend`
2. Install necessary dependencies: `npm install mongoose dotenv` (if not already installed)
3. Create/verify `.env` file with:
   ```
   PORT=5000
   JWT_SECRET=super_secret_key
   MONGODB_URI=mongodb://localhost:27017/attendance-app
   ```
4. **Seed the database** (populate initial data): `node seedData.js`
5. Launch the Express server: `npm start`
6. The server will connect to MongoDB and run at `http://localhost:5000`
3. Launch the Express server: `npm start`
4. The server will run securely at `http://localhost:5000`.
Integrate real AI models**: Push beyond programmatic threshold checks and incorporate Machine Learning libraries (e.g., TensorFlow.js) or LLM analysis for holistic evaluations based on soft skills or deeper data sets.
*   **Add facial recognition attendance**: Implement browser-based WebRTC protocols using models like `face-api.js` for completely automated biometric clock-ins.
*   **Add role-based dashboards**: Further separate the main dashboard components rendering differing widgets based on if the viewer is an active HR Director versus a junior individual contributor.
*   **Add real-time analytics**: Shift HTTP polling patterns towards WebSockets (Socket.io) to see live present/absent state transitions throughout the day.
*   **Data backups & archival**: Implement automated MongoDB backup strategies and historical data archival for compliance
3. Spin up the development server: `npm run dev`
4. Visit the web app in your browser at the local URL specified (usually `http://localhost:5173`).

### Test Accounts

*   **Admin Access**: `admin@example.com` (Pass: _password123_)
*   **HR Access**: `hr@example.com` (Pass: _password123_)
*   **Employee Access**: `employee@example.com` (Pass: _password123_)

## Future Scope

*   **Add MongoDB database**: Abstract the current in-memory datasets into a permanent, highly scalable Mongo instance.
*   **Integrate real AI models**: Push beyond programmatic threshold checks and incorporate Machine Learning libraries (e.g., TensorFlow.js) or LLM analysis for holistic evaluations based on soft skills or deeper data sets.
*   **Add facial recognition attendance**: Implement browser-based WebRTC protocols using models like `face-api.js` for completely automated biometric clock-ins.
*   **Add role-based dashboards**: Further separate the main dashboard components rendering differing widgets based on if the viewer is an active HR Director versus a junior individual contributor.
*   **Add real-time analytics**: Shift HTTP polling patterns towards WebSockets (Socket.io) to see live present/absent state transitions throughout the day.
