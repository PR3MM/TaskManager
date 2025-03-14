import express from 'express';
import dotenv from 'dotenv';
import { getAllTasks, createTask, deleteTask } from '../controllers/taskControllers.js';


const router = express.Router();

router.get('/', getAllTasks);

router.post('/', createTask);

router.delete('/:id', deleteTask);

export default router;
