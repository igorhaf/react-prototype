// redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
const initialState = {
    isComponentVisible: false
  };

export default store;
