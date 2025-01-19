import React, { useState } from 'react';
import '../styles/tjekliste.css';

const Tjekliste = () => {
  const [rooms, setRooms] = useState([
    { name: 'Stue', items: [{ text: 'Sofa', packed: false }, { text: 'TV', packed: true }] },
    { name: 'Køkken', items: [{ text: 'Tallerkener', packed: false }, { text: 'Gryder', packed: false }] },
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
      updatedRooms[selectedRoom].items.push({ text: newItem, packed: false });
      setRooms(updatedRooms);
      setNewItem('');
    }
  };

  const togglePacked = (roomIndex, itemIndex) => {
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex].items[itemIndex].packed = !updatedRooms[roomIndex].items[itemIndex].packed;
    setRooms(updatedRooms);
  };

  const deleteItem = (roomIndex, itemIndex) => {
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex].items = updatedRooms[roomIndex].items.filter((_, i) => i !== itemIndex);
    setRooms(updatedRooms);
  };

  const deleteRoom = (roomIndex) => {
    if (roomIndex === selectedRoom) {
      setSelectedRoom(null);
    }
    setRooms(rooms.filter((_, i) => i !== roomIndex));
  };

  return (
    <div className="tjekliste-container">
      <h1 className="tjekliste-title">Tjeklisten</h1>
      <div className="tjekliste-box">
        {/* Menu */}
        <div className="room-menu">
          <div className="menu-header">
            <h2>Rum</h2>
            <div className="add-room">
              <input
                type="text"
                value={newRoomName}
                onChange={(e) => setNewRoomName(e.target.value)}
                placeholder="Tilføj nyt rum"
              />
              <button onClick={addRoom}>+</button>
            </div>
          </div>
          <ul>
            {rooms.map((room, index) => (
              <li key={index} className={selectedRoom === index ? 'active' : ''}>
                <span onClick={() => setSelectedRoom(index)}>{room.name}</span>
                <button className="delete-room" onClick={() => deleteRoom(index)}>🗑</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Indhold for Valgte Rum */}
        <div className="room-content">
          {selectedRoom !== null ? (
            <>
              <h2>{rooms[selectedRoom].name}</h2>
              <ul>
                {rooms[selectedRoom].items.map((item, itemIndex) => (
                  <li key={itemIndex} className={item.packed ? 'packed' : ''}>
                    <input
                      type="checkbox"
                      checked={item.packed}
                      onChange={() => togglePacked(selectedRoom, itemIndex)}
                    />
                    <span>{item.text}</span>
                    <button className="delete-item" onClick={() => deleteItem(selectedRoom, itemIndex)}>🗑</button>
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
