// src/components/TaskItem.js
import React from 'react';

function TaskItem({ task, onDeleteTask }) {
  const { _id, title, description, completed, createdAt } = task;
  
  // Format the date
  const formattedDate = new Date(createdAt).toLocaleDateString();
  
  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <div className="task-content">
        <h3>{title}</h3>
        {description && <p className="task-description">{description}</p>}
        <p className="task-date">Created: {formattedDate}</p>
      </div>
      <div className="task-actions">
        <button 
          className="btn-delete" 
          onClick={() => onDeleteTask(_id)}
          aria-label="Delete task"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;