import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";
import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "take out the trash",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Wash the bike",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Buy milk from the store",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </Router>
    );
  }
}

export default App;
