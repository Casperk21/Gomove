import React, { useState } from 'react';
import '../styles/tjekliste.css';

const Tjekliste = () => {
  const [rooms, setRooms] = useState([
    { name: 'Stue', items: ['Sofa', 'TV'] },
    { name: 'Køkken', items: ['Tallerkener', 'Gryder'] },
  ]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [newRoomName, setNewRoomName] = useState('');
  const [newItem, setNewItem] = useState('');

  const addRoom = () => {
    if (newRoomName.trim() !== '') {
      setRooms([...rooms, { name: newRoomName, items: [] }]);
      setNewRoomName('');
    }
  };

  const addItem = () => {
    if (selectedRoom !== null && newItem.trim() !== '') {
      const updatedRooms = [...rooms];
      updatedRooms[selectedRoom].items.push(newItem);
      setRooms(updatedRooms);
      setNewItem('');
    }
  };

  const deleteRoom = (index) => {
    if (index === selectedRoom) {
      setSelectedRoom(null);
    }
    setRooms(rooms.filter((_, i) => i !== index));
  };

  const deleteItem = (itemIndex) => {
    if (selectedRoom !== null) {
      const updatedRooms = [...rooms];
      updatedRooms[selectedRoom].items = updatedRooms[selectedRoom].items.filter(
        (_, i) => i !== itemIndex
      );
      setRooms(updatedRooms);
    }
  };

  return (
    <div className="tjekliste-container">
      <h1>Tjekliste</h1>
      <div className="tjekliste-box">
        {/* Rum-menu */}
        <div className="room-menu">
          <h2>Rum</h2>
          <ul>
            {rooms.map((room, index) => (
              <li
                key={index}
                className={selectedRoom === index ? 'active' : ''}
              >
                <span onClick={() => setSelectedRoom(index)}>{room.name}</span>
                <button
                  className="delete-room"
                  onClick={() => deleteRoom(index)}
                >
                  🗑
                </button>
              </li>
            ))}
          </ul>
          <div className="add-room">
            <input
              type="text"
              value={newRoomName}
              onChange={(e) => setNewRoomName(e.target.value)}
              placeholder="Nyt rum"
            />
            <button onClick={addRoom}>+</button>
          </div>
        </div>

        {/* Indhold for valgte rum */}
        <div className="room-content">
          {selectedRoom !== null ? (
            <>
              <h2>{rooms[selectedRoom].name}</h2>
              <ul>
                {rooms[selectedRoom].items.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                    <button
                      className="delete-item"
                      onClick={() => deleteItem(index)}
                    >
                      🗑
                    </button>
                  </li>
                ))}
              </ul>
              <div className="add-item">
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Tilføj genstand"
                />
                <button onClick={addItem}>Tilføj</button>
              </div>
            </>
          ) : (
            <p>Vælg et rum for at se eller tilføje genstande.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tjekliste;

