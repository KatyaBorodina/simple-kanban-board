import reducer from 'app/store/reducer';
import logger from 'app/store/middleware/logger';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducer, applyMiddleware(logger));

store.subscribe(() => localStorage.setItem('AppState', JSON.stringify(store.getState())));

export default store;
