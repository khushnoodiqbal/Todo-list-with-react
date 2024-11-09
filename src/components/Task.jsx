// App.js
import React, { useState } from "react";
import "./Task.css";
import { Todoitem } from "./Todoitem";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addTask = () => {
    if (inputText.trim() !== "") {
      const newTask = {
        id: Date.now(),
        name: inputText,
      };
      setTasks([...tasks, newTask]);
      setInputText("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className="input-section">
        <input
          value={inputText}
          placeholder="Enter a new task"
          onChange={handleInputChange}
          className="task-input"
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>
      <div className="todo-list">
        {tasks.map((task) => (
          <Todoitem
            key={task.id}
            name={task.name}
            id={task.id}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Task;
