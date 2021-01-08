import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // CALL AXIOS
      // .then.catch correctly
      // await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
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
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import "./login.css";

// export default class login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   onLogin() {
//     let loginInfo = {
//       email: this.refs.id.nodeValue,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <link
//           href="https://fonts.googleapis.com/css?family=Comfortaa"
//           rel="stylesheet"
//         />
//         <body>
//           <h1>Log In</h1>
//           <form>
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
//                 placeholder="Enter Password"
//               />
//             </div>
//             <div class="button-holder">
//               <button type="submit">Log In</button>
//             </div>
//           </form>
//           <p>
//             No Account? <a href="./signup">Sign Up</a>
//           </p>
//         </body>
//       </div>
//     );
//   }
// }
