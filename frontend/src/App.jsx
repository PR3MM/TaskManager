import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('API_URL/tasks');
      
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      
      const data = await response.json();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Error loading tasks: ' + err.message);
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async (task) => { 
    try {
      const response = await fetch('API_URL/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add task');
      }
      
      fetchTasks(); 
    } catch (err) {
      setError('Error adding task: ' + err.message);
      console.error('Add task error:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`API_URL/tasks/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
      
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      setError('Error deleting task: ' + err.message);
      console.error('Delete task error:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Task Manager</h1>
            <p className="text-gray-600 mt-2">Organize your tasks efficiently</p>
          </header>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <TaskForm onAddTask={addTask} />
          </div>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow-md p-6">
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-2 text-gray-600">Loading tasks...</span>
              </div>
            ) : (
              tasks.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="mt-2 text-gray-500">No tasks available</p>
                  <p className="text-sm text-gray-400">Add a new task to get started</p>
                </div>
              ) : (
                <TaskList tasks={tasks} onDeleteTask={deleteTask} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;