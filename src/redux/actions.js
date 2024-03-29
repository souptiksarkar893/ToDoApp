export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId
});

export const toggleTask = (taskId) => ({
  type: 'TOGGLE_TASK',
  payload: taskId
});

export const loadTasks = (tasks) => ({
  type: 'LOAD_TASKS',
  payload: tasks
});
