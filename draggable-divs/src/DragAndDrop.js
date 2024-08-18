import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableDiv from './DraggableDiv'; 

const DragAndDrop = () => {
    const [divs, setDivs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/positions')
            .then(response => response.json())
            .then(data => {
                const ids = data.map(div => div.div_id);
                const uniqueIds = new Set(ids);
                if (ids.length !== uniqueIds.size) {
                    console.error('Duplicate div_ids found:', ids);
                } else {
                    console.log('Fetched data:', data);
                    setDivs(data);
                }
            })
            .catch(error => console.error('Error fetching positions:', error));
     }, []);
     
    const moveDiv = (fromId, toId) => {
        const newDivs = [...divs];
        const fromDiv = newDivs.find(div => div.div_id === fromId);
        const toDiv = newDivs.find(div => div.div_id === toId);

        if (fromDiv && toDiv) {
            const fromPosition = fromDiv.position;
            fromDiv.position = toDiv.position;
            toDiv.position = fromPosition;

            setDivs(newDivs);

            fetch('http://localhost:4000/api/update-position', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ divId: fromId, newPosition: toDiv.position }),
            }).catch(error => console.error('Error updating position:', error));
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
         {divs.map(div => (
    <DraggableDiv
        key={div.div_id}
        id={div.div_id}
        position={div.position}
        moveDiv={moveDiv}
    />
))}

        </DndProvider>
    );
};

export default DragAndDrop;
