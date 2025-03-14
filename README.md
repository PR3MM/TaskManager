# Task Management Application

## Project Summary
This is a full-stack task management application built with separate frontend and backend components. It allows users to create, read, update, and delete tasks. The backend is built with Node.js and Express, while the frontend uses React and Vite.

## Features
- Create, Read, Update, Delete (CRUD) tasks
- Responsive and interactive frontend built with React and Tailwind CSS
- Backend built with Node.js/Express and follows MVC architecture
- API endpoints for managing tasks
- ESLint integrated for code quality

## Technologies Used
- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Environment variables using .env
- **Frontend:**
  - React (Vite as the bundler)
  - Tailwind CSS
  - CSS Modules

## Installation

### Prerequisites
- Node.js and npm installed on your system
- MongoDB

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install the backend dependencies:
   ```bash
   npm install
   ```

4. Configure environment variables:
   * Create a `.env` file in the `backend` folder and add the following:
   ```ini
   PORT=5000
   DB_URI=mongodb://localhost:27017/taskdb
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

The backend server will now be running on `http://localhost:5000`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

The frontend will now be running on `http://localhost:3000`.

## Running the Application
* The backend API will be running on `http://localhost:5000`.
* The frontend application will be running on `http://localhost:3000`.
* You can now open `http://localhost:3000` in your browser to interact with the task management system.

## Folder Structure

### Backend
```
backend/
├── controllers/
│   └── taskControllers.js
├── models/
│   └── Task.js
├── routes/
│   └── tasks.js
├── config/
│   └── connectdb.js
├── .env
├── app.js
└── server.js
```

### Frontend
```
frontend/
├── components/
│   └── TaskList.jsx
│   └── TaskItem.jsx
├── App.jsx
├── main.jsx
├── tailwind.config.js
├── package.json
└── App.css
```

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new pull request.

![image](https://github.com/user-attachments/assets/70644236-8d5d-4fbb-a4f6-0311ab953405)

