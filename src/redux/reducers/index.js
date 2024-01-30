// redux/reducers/index.js

import { combineReducers } from 'redux';
import textReducer from './textReducer';
import componentReducer from './componentReducer';

const rootReducer = combineReducers({
    text: textReducer,
    components: componentReducer // Adicione o reducer de componentes
});

export default rootReducer;
