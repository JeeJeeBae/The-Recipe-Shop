import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/login", { email, password })
      .then((result) => {
        if (result.data && result.data.id) {
          window.localStorage.setItem("id", result.data.id);

          onLogin();

          navigate("/");
        } else {
          console.log("Authentication failed");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 border border-1 w-75">
        <h3 className="mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="mt-3 w-100 btn btn-success">Login</button>
          <Link to="/auth/register" className="mt-3 d-block text-center">
            <button className="btn btn-outline-dark w-100">Register</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
