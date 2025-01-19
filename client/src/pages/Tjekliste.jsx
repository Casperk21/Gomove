import React, { useState } from 'react';
import '../styles/tjekliste.css'; // Importér CSS til tjeklisten

const Tjekliste = () => {
  const [tasks, setTasks] = useState([
    { text: 'Pak bøger', completed: false },
    { text: 'Rengør køkkenet', completed: true },
  ]);

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="tjekliste-container">
      <h1>Tjekliste</h1>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`tjekliste-item ${task.completed ? 'completed' : ''}`}
            onClick={() => toggleTask(index)}
          >
            <input type="checkbox" checked={task.completed} readOnly />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tjekliste;
