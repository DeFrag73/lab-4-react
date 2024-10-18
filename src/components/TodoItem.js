import React from "react";

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />
      <span style={props.todo.completed ? completedStyle : null}>
        {props.todo.title}
      </span>
      <button onClick={() => props.deleteTodoProps(props.todo.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
