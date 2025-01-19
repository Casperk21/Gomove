import React, { useState, useEffect } from 'react';
import './styles.css'; // Importerer CSS-styling

const Tjekliste = () => {
  const [rooms, setRooms] = useState([
    {
      name: 'Stue',
      items: [
        { text: 'Sofa', checked: false },
        { text: 'TV', checked: false },
        { text: 'Sofabord', checked: false },
      ],
    },
    {
      name: 'Køkken',
      items: [
        { text: 'Tallerkener', checked: false },
        { text: 'Gryder', checked: false },
      ],
    },
  ]);
  const [newRoomName, setNewRoomName] = useState('');

  // Load gemt tjekliste fra Local Storage
  useEffect(() => {
    const savedChecklist = localStorage.getItem('checklist');
    if (savedChecklist) {
      setRooms(JSON.parse(savedChecklist));
    }
  }, []);

  // Gem tjekliste til Local Storage
  const saveChecklist = () => {
    localStorage.setItem('checklist', JSON.stringify(rooms));
    alert('Tjeklisten er gemt!');
  };

  // Ryd tjeklisten
  const clearChecklist = () => {
    setRooms([]);
    localStorage.removeItem('checklist');
    alert('Tjeklisten er ryddet!');
  };

  // Tilføj et nyt rum
  const addRoom = () => {
    if (newRoomName.trim()) {
      setRooms([...rooms, { name: newRoomName, items: [] }]);
      setNewRoomName('');
    }
  };

  // Opdater tjekstatus for en opgave
  const toggleItem = (roomIndex, itemIndex) => {
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex].items[itemIndex].checked =
      !updatedRooms[roomIndex].items[itemIndex].checked;
    setRooms(updatedRooms);
  };

  return (
    <div className="checklist-container">
      <h1 className="checklist-title">Tjekliste - Flytning</h1>
      <div className="checklist-columns">
        {rooms.map((room, roomIndex) => (
          <div className="checklist-column" key={roomIndex}>
            <h2>{room.name}</h2>
            <ul>
              {room.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleItem(roomIndex, itemIndex)}
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="add-room">
        <input
          type="text"
          placeholder="Nyt rum (fx Badeværelse)"
          value={newRoomName}
          onChange={(e) => setNewRoomName(e.target.value)}
        />
        <button onClick={addRoom}>Tilføj Rum</button>
      </div>

      <div className="actions">
        <button onClick={saveChecklist}>Gem Tjekliste</button>
        <button onClick={clearChecklist}>Ryd Tjekliste</button>
      </div>
    </div>
  );
};

export default Tjekliste;

