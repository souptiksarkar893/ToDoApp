const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed };
          }
          return task;
        })
      };
    case 'LOAD_TASKS':
      return {
        ...state,
        tasks: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
