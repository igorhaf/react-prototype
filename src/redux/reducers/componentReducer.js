// redux/reducers/componentReducer.js

import { ADD_COMPONENT, REMOVE_COMPONENT } from '../actions/componentActions';

const initialState = {
    activeComponents: [] // Esta lista conterá os nomes dos componentes atualmente carregados
};

function componentReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMPONENT:
            return {
                ...state,
                activeComponents: [...state.activeComponents, action.payload]
            };
        case REMOVE_COMPONENT:
            return {
                ...state,
                activeComponents: state.activeComponents.filter(
                    componentName => componentName !== action.payload
                )
            };
        default:
            return state;
    }
}

export default componentReducer;
