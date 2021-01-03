import React, { Component } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Day">
          <ToDoList day="Sun"/>
        </div>
        <div className="Day">
          <ToDoList day="Mon"/>
        </div>
        <div className="Day">
          <ToDoList day="Tues"/>
        </div>
        <div className="Day">
          <ToDoList day="Wed"/>
        </div>
        <div className="Day">
          <ToDoList day="Thurs"/>
        </div>
        <div className="Day">
          <ToDoList day="Fri"/>
        </div>
        <div className="Day">
          <ToDoList day="Sat"/>
        </div>
      </div>
    );
  }
}

export default App;