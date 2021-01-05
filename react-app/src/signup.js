import React, { Component } from "react";
import axios from "axios";
import "./login.css";

export default class signUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/localhost:5000/register", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { name, email, password, password2 } = this.state;
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Comfortaa"
          rel="stylesheet"
        />
        <body>
          <h1>Sign Up</h1>
          <form>
            <div class="form-group">
              <input
                type="name"
                id="name"
                name="name"
                class="form-control"
                placeholder="Enter Name"
              />
            </div>
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
                placeholder="Create Password"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                id="password2"
                name="password2"
                class="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <div class="button-holder">
              <button type="submit">Sign Up</button>
            </div>
          </form>
          <p>
            Have An Account? <a href="./login">Login</a>
          </p>
        </body>
      </div>
    );
  }
}
