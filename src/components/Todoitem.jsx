// Todoitem.js
import React, { useState } from "react";
import "./Todoitem.css";

export const Todoitem = ({ name, id, deleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const toggleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`todo-item ${completed ? "completed" : ""}`}>
      <h5 onClick={toggleComplete}>{name}</h5>
      <div className="todo-buttons">
        <button className="complete-button" onClick={toggleComplete}>
          {completed ? "Undo" : "Complete"}
        </button>
        <button className="delete-button" onClick={() => deleteTask(id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};
