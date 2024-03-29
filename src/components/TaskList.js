import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <label className={`form-check-label task-name ${task.completed ? 'completed' : ''}`} onClick={() => handleToggleTask(task.id)}>
              {task.name}
            </label>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
