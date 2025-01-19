import { useState } from "react";

const Tjekliste = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Flytte Tjekliste</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Tilføj en ny opgave"
        />
        <button onClick={addTask} className="bg-green-600 text-white px-4 py-2 ml-2">
          Tilføj
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tjekliste;
