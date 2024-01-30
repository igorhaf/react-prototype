// App.js
import React, { useState } from 'react';
import ColumnOne from './ColumnOne';
import ColumnTwo from './ColumnTwo';
import ColumnThree from './ColumnThree';
import Footer from './Footer';

function App() {
    const [text, setText] = useState('');
    const [liveText, setLiveText] = useState('');

    const handleTextChange = (newText) => {
        setText(newText);
    };

    const handleLiveTextChange = (newText) => {
        setLiveText(newText);
    };

    return (
        <div>
            <div style={{ display: 'flex' }}>
                {/* <Column1 text={text} onLiveTextChange={handleLiveTextChange} /> */}
                <ColumnOne text={text} onLiveTextChange={handleLiveTextChange} />
                <ColumnTwo liveText={liveText} />
                <ColumnThree onTextChange={handleTextChange} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
