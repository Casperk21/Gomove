import React, { useState } from 'react';
import '../styles/visualisering.css'; // Importér CSS til visualiseringen

const Visualisering = () => {
  const [furniture, setFurniture] = useState([
    { id: 1, name: 'Sofa', x: 50, y: 50 },
    { id: 2, name: 'Skab', x: 150, y: 100 },
  ]);

  const handleDrag = (e, id) => {
    const updatedFurniture = furniture.map((item) =>
      item.id === id ? { ...item, x: e.clientX, y: e.clientY } : item
    );
    setFurniture(updatedFurniture);
  };

  return (
    <div className="visualisering-container">
      <h1>3D-Visualisering</h1>
      <div className="visualisering-canvas">
        {furniture.map((item) => (
          <div
            key={item.id}
            className="visualisering-item"
            draggable
            onDragEnd={(e) => handleDrag(e, item.id)}
            style={{
              position: 'absolute',
              left: `${item.x}px`,
              top: `${item.y}px`,
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="visualisering-controls">
        <p>Træk og slip møblerne rundt i flyttebilen.</p>
      </div>
    </div>
  );
};

export default Visualisering;
