import React, { Component } from "react";
import "./App.css";

import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Signup";
// import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";

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

  render() {
    return (
      <div>
        <Router>
          {/* <AuthProvider> */}
            <Switch>
              <PrivateRoute path="/" exact component={Dashboard} />
              <Route path="/login" exact component={Login} />
              <Route path="/dashboard" exact component={Dashboard} />
              {/* {this.dashboard()} */}
              {/* </Route> */}
              <Route path="/signup" component={Signup} />
            </Switch>
          {/* </AuthProvider> */}
        </Router>
      </div>
    );
  }
}

export default App;
