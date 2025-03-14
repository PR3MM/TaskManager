import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import connectDB from './db/connectdb.js';

const app = express();
// const PORT = 3000;
const PORT = process.env.PORT || 3000;

const DATABASE_URL = process.env.MONGO_URI;

if (!DATABASE_URL) {
  console.error('Error: MONGO_URI is not defined in the .env file.');
  process.exit(1); 
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
     origin: process.env.FRONTEND_URL || 'http://localhost:3000',
     methods: 'GET,POST,PUT,DELETE', 
  }));

import taskRoutes from './routes/tasks.js';

connectDB(DATABASE_URL)
  .then(() => {
    app.use('/tasks', taskRoutes);
    
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
