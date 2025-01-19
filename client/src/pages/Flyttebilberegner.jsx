import React, { useState } from 'react';
import '../styles/flyttebilberegner.css'; // Importér CSS til beregneren

const Flyttebilberegner = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [dimensions, setDimensions] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (name && dimensions) {
      setItems([...items, { name, dimensions }]);
      setName('');
      setDimensions('');
    }
  };

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
          placeholder="Indtast dimensioner"
        />
        <button type="submit">Tilføj</button>
      </form>
      <div className="flyttebilberegner-list">
        <h2>Tilføjede møbler:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.dimensions}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Flyttebilberegner;
