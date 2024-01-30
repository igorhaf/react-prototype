// Column3.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from './redux/actions/textActions';
import ComponentC from './ComponentC';

function Column3() {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setText(inputText));
    };
    const activeComponents = useSelector(state => state.components.activeComponents);

    return (
        <div style={{ flex: 1, padding: '10px', backgroundColor: '#b0b0b0' }}>
            <h2>Coluna 3</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            {activeComponents.includes('ComponentC') && <ComponentC />}
        </div>
        
    );
}

export default Column3;
