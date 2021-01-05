import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

// import React, { Component } from "react";
// import axios from "axios";
// import "./login.css";
// import { Card, Form, Button } from "react-bootstrap";

// export default class signUp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//       password2: "",
//     };
//   }

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     axios
//       .post("/localhost:5000/register", this.state)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     const { name, email, password, password2 } = this.state;
//     return (
//       <div>
//         <link
//           href="https://fonts.googleapis.com/css?family=Comfortaa"
//           rel="stylesheet"
//         />
//         <body>
//           <h1>Sign Up</h1>
//           <form>
//             <div class="form-group">
//               <input
//                 type="name"
//                 id="name"
//                 name="name"
//                 class="form-control"
//                 placeholder="Enter Name"
//               />
//             </div>
//             <div class="form-group">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 class="form-control"
//                 placeholder="Enter Email"
//               />
//             </div>
//             <div class="form-group">
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 class="form-control"
//                 placeholder="Create Password"
//               />
//             </div>
//             <div class="form-group">
//               <input
//                 type="password"
//                 id="password2"
//                 name="password2"
//                 class="form-control"
//                 placeholder="Confirm Password"
//               />
//             </div>
//             <div class="button-holder">
//               <button type="submit">Sign Up</button>
//             </div>
//           </form>
//           <p>
//             Have An Account? <a href="./login">Login</a>
//           </p>
//         </body>
//       </div>
//     );
//   }
// }
