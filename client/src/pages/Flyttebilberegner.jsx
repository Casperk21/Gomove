import React, { useState } from 'react';
import '../styles/flyttebilberegner.css'; // Importér CSS

const Flyttebilberegner = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [dimensions, setDimensions] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    const [length, width, height] = dimensions.split('x').map(Number);
    if (name && length && width && height) {
      const volume = length * width * height;
      setItems([...items, { name, dimensions, volume }]);
      setName('');
      setDimensions('');
    }
  };

  const totalVolume = items.reduce((sum, item) => sum + item.volume, 0);

  return (
    <div className="flyttebilberegner-container">
      <h1>Flyttebilberegner</h1>
      <form className="flyttebilberegner-form" onSubmit={addItem}>
        <label>Møbelnavn:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Skriv møbelnavn"
        />
        <label>Dimensioner (L x B x H):</label>
        <input
          type="text"
          value={dimensions}
          onChange={(e) => setDimensions(e.target.value)}
          placeholder="Indtast dimensioner (fx 200x100x50)"
        />
        <button type="submit">Tilføj</button>
      </form>
      <div className="flyttebilberegner-list">
        <h2>Tilføjede møbler:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.dimensions} (Volumen: {item.volume} m³)
            </li>
          ))}
        </ul>
        <h3>Total volumen: {totalVolume} m³</h3>
      </div>
    </div>
  );
};

export default Flyttebilberegner;

