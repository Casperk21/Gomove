import React, { useState } from 'react';
import '../styles/tjekliste.css'; // Importér CSS

const Tjekliste = () => {
  const [tasks, setTasks] = useState([
    { text: 'Pak bøger', completed: false },
    { text: 'Rengør køkkenet', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

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
      <form className="tjekliste-form" onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Tilføj ny opgave"
        />
        <button type="submit">Tilføj</button>
      </form>
    </div>
  );
};

export default Tjekliste;
