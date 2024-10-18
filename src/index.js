import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./components/TodoContainer";
import "./App.css"; // для стилів

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
