import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DraggableDiv = ({ id, position, moveDiv }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'DIV',
        item: { id, position },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: 'DIV',
        drop: (item) => moveDiv(item.id, id),
    });

    return (
        <div
            ref={node => drag(drop(node))}
            style={{
                opacity: isDragging ? 0.5 : 1,
                position: 'absolute',
                top: `${position * 50}px`, 
                left: '0px', 
                backgroundColor: 'lightblue',
                padding: '20px',
                margin: '40px',
                cursor: 'move',
            }}
        >
            {`Div ${id}`}
        </div>
    );
};

export default DraggableDiv;
