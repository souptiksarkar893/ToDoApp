import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addTask({ id: Date.now(), name: taskName }));
      setTaskName('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
