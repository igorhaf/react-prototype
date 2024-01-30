// Column1.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLiveText } from './redux/actions/textActions';
import { addComponent, removeComponent } from './redux/actions/componentActions';


function Column1({ submittedText }) { // Renomeie a prop para evitar conflito
    const liveText = useSelector(state => state.text.liveText); // Agora está usando liveText
    const text = useSelector(state => state.text.text);
    const dispatch = useDispatch();

    // Handler para atualizar liveText no Redux store
    const handleLiveTextChange = (newText) => {
        dispatch(setLiveText(newText));
    };

    return (
        <div style={{ flex: 1, padding: '10px', backgroundColor: '#f0f0f0' }}>
            <h2>Coluna 1</h2>
            <p>Texto submetido: {text}</p> {/* Usando a prop renomeada */}
            <input
                type="text"
                placeholder="Digite algo..."
                onChange={(e) => handleLiveTextChange(e.target.value)}
                value={liveText}
            />
            <div>
                <button onClick={() => dispatch(addComponent('ComponentC'))}>Adicionar Componente C</button>
                <button onClick={() => dispatch(removeComponent('ComponentC'))}>Remover Componente C</button>
            </div>

        </div>
    );
}

export default Column1;