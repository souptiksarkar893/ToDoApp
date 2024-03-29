import React, { useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useDispatch } from 'react-redux';
import { loadTasks } from './redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      dispatch(loadTasks(savedTasks));
    }
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h1>React To-Do App</h1>
      <hr></hr>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
