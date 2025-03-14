import React from 'react';

function TaskList({ tasks, onDeleteTask }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-800 mb-4">Your Tasks</h2>
      <ul className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <li key={task._id} className="py-4">
            <div className="flex items-start justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={task.completed}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <p className={`ml-3 text-sm font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                    {task.title}
                  </p>
                </div>
                {task.description && (
                  <p className="mt-2 text-sm text-gray-500 ml-7">
                    {task.description}
                  </p>
                )}
                {task.createdAt && (
                  <p className="mt-1 text-xs text-gray-400 ml-7">
                    Added on {formatDate(task.createdAt)}
                  </p>
                )}
              </div>
              <div className="ml-4 flex-shrink-0">
                <button
                  onClick={() => onDeleteTask(task._id)}
                  className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;