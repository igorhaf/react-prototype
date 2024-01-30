import React from 'react';
import Nodes from './Nodes'; // Presumindo que Nodes é um componente que você tem

const Frames = ({ frames }) => {
    return (
        <div className="flex flex-col h-full overflow-auto" style={{ paddingBottom: '0px' }}>
            <div className="flex-1">
                <div className="min-w-max">
                    <Nodes treeData={frames} />
                </div>
            </div>
        </div>
    );
};

export default Frames;
