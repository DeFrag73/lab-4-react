import React from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  };

  render() {
    const completedCount = this.state.todos.filter((todo) => todo.completed).length;
    const uncompletedCount = this.state.todos.length - completedCount;

    return (
      <div className="container">
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <div className="counter">
          <p>Completed: {completedCount}</p>
          <p>Uncompleted: {uncompletedCount}</p>
        </div>
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
