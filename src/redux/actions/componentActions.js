// redux/actions/componentActions.js

// Tipos de ações
export const ADD_COMPONENT = 'ADD_COMPONENT';
export const REMOVE_COMPONENT = 'REMOVE_COMPONENT';

// Action creators
export const addComponent = componentName => ({
    type: ADD_COMPONENT,
    payload: componentName
});

export const removeComponent = componentName => ({
    type: REMOVE_COMPONENT,
    payload: componentName
});
