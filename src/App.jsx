// App.js
import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Task></Task>
    </div>
  );
}

export default App;
