import Task from '../models/Task.js';

// Get all tasks
export async function getAllTasks(req, res) {
  try {
      const tasks = await Task.find().sort({ createdAt: -1 });
      console.log('tasks:');
      console.log('tasks:', tasks);
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Failed to fetch tasks', error: error.message });
  }
}

// Create a new task
export async function createTask(req, res) {
  try {
    const { title, description } = req.body;
    
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }
    
    const newTask = new Task({ title, description });
    const savedTask = await newTask.save();
    
    res.status(201).json(savedTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Failed to create task', error: error.message });
  }
}

// Delete a task
export async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Failed to delete task', error: error.message });
  }
}
