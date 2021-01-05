import React, { Component } from "react";
import PropTypes from "prop-types";
import "./login.css";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogin() {
    let loginInfo = {
      email: this.refs.id.nodeValue,
    };
  }

  render() {
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Comfortaa"
          rel="stylesheet"
        />
        <body>
          <h1>Log In</h1>
          <form>
            <div class="form-group">
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div class="button-holder">
              <button type="submit">Log In</button>
            </div>
          </form>
          <p>
            No Account? <a href="./signup">Sign Up</a>
          </p>
        </body>
      </div>
    );
  }
}
