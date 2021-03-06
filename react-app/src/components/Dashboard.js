import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import ToDoList from "./ToDoList";

export default function Dashboard() {
  const [error, setError] = useState("");
  const currentUser = localStorage.getItem("User Email");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      localStorage.removeItem("User Email");
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  function dashboard() {
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

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser}
        </Card.Body>
      </Card>
      {dashboard()}
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
