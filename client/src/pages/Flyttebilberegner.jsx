import React, { useState } from 'react';
import '../styles/flyttebilberegner.css'; // Importér CSS

const Flyttebilberegner = () => {
  const [truckDimensions, setTruckDimensions] = useState({ length: 0, width: 0, height: 0 });
  const [truckSet, setTruckSet] = useState(false);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDimensions, setItemDimensions] = useState('');

  const handleSetTruck = (e) => {
    e.preventDefault();
    const { length, width, height } = truckDimensions;
    if (length > 0 && width > 0 && height > 0) {
      setTruckSet(true);
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const [length, width, height] = itemDimensions.split('x').map(Number);
    if (itemName && length && width && height) {
      setItems([
        ...items,
        { id: items.length + 1, name: itemName, length, width, height },
      ]);
      setItemName('');
      setItemDimensions('');
    }
  };

  const scaledTruck = {
    length: truckDimensions.length / 10,
    width: truckDimensions.width / 10,
    height: truckDimensions.height / 10,
  };

  return (
    <div className="flyttebilberegner-container">
      <h1>Flyttebilberegner</h1>

      {!truckSet ? (
        <form className="truck-dimensions-form" onSubmit={handleSetTruck}>
          <h2>Indtast Flyttebilens Dimensioner (cm)</h2>
          <label>Længde:</label>
          <input
            type="number"
            value={truckDimensions.length}
            onChange={(e) => setTruckDimensions({ ...truckDimensions, length: e.target.value })}
            placeholder="Længde i cm"
          />
          <label>Bredde:</label>
          <input
            type="number"
            value={truckDimensions.width}
            onChange={(e) => setTruckDimensions({ ...truckDimensions, width: e.target.value })}
            placeholder="Bredde i cm"
          />
          <label>Højde:</label>
          <input
            type="number"
            value={truckDimensions.height}
            onChange={(e) => setTruckDimensions({ ...truckDimensions, height: e.target.value })}
            placeholder="Højde i cm"
          />
          <button type="submit">Indstil Flyttebil</button>
        </form>
      ) : (
        <>
          <form className="item-dimensions-form" onSubmit={handleAddItem}>
            <h2>Tilføj Møbel</h2>
            <label>Møbelnavn:</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Skriv møbelnavn"
            />
            <label>Dimensioner (L x B x H):</label>
            <input
              type="text"
              value={itemDimensions}
              onChange={(e) => setItemDimensions(e.target.value)}
              placeholder="Indtast dimensioner (fx 200x100x50)"
            />
            <button type="submit">Tilføj til flyttebil</button>
          </form>

          <div className="flyttebil-visualisering">
            <div
              className="flyttebil"
              style={{
                width: `${scaledTruck.width}px`,
                height: `${scaledTruck.height}px`,
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="item"
                  style={{
                    width: `${item.width / 10}px`,
                    height: `${item.height / 10}px`,
                    backgroundColor: 'rgba(0, 123, 255, 0.7)',
                  }}
                  title={`${item.name} (${item.length}x${item.width}x${item.height} cm)`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Flyttebilberegner;

