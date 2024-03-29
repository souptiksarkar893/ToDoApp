import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('tasks', JSON.stringify(state.tasks));
});

export default store;
