import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // axios.defaults.withCredentials = true;
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3001/auth/login", { username, password })
  //     .then((result) => {
  //       window.localStorage.setItem("id", result.data.id);
  //       navigate("/");
  //       console.log(result);
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/login", { username, password })
      .then((result) => {
        // Assuming your API response contains user information or token
        if (result.data && result.data.id) {
          // Save user ID to localStorage or session storage for authentication persistence
          window.localStorage.setItem("id", result.data.id);
          // Invoke the onLogin callback passed from the parent component
          onLogin();
          // Redirect to home page
          navigate("/");
        } else {
          // Handle authentication error if needed
          console.log("Authentication failed");
        }
      })
      .catch((error) => {
        // Handle any login errors
        console.error("Login error:", error);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 border border-1 w-50">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="mt-2 w-100 btn btn-success">Submit</button>
          <Link to="/auth/register">
            <button className="btn btn-default w-100 mt-2 border">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
