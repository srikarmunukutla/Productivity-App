import React, { Component } from "react";
import "./App.css";
import ToDoList from "./ToDoList";
import login from "./login.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import signup from "./signup";

class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  dashboard() {
    return (
      <div className="App">
        <div className="Day">
          <ToDoList day="Sun" />
        </div>
        <div className="Day">
          <ToDoList day="Mon" />
        </div>
        <div className="Day">
          <ToDoList day="Tues" />
        </div>
        <div className="Day">
          <ToDoList day="Wed" />
        </div>
        <div className="Day">
          <ToDoList day="Thurs" />
        </div>
        <div className="Day">
          <ToDoList day="Fri" />
        </div>
        <div className="Day">
          <ToDoList day="Sat" />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={login} />
            <Route path="/login" exact component={login} />
            <Route path="/dashboard" exact>
              {this.dashboard()}
            </Route>
            <Route path="/signup" exact component={signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
