import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/register", {
        email,
        password,
        role: selectedRole,
      })
      .then((result) => {
        navigate("/auth/login");
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 border border-1 w-75">
        <h3 className="mb-4">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
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
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Are you a reader or a creator?
            </label>
            <select
              className="form-control"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Select role</option>
              <option value="reader">Reader</option>
              <option value="creator">Creator</option>
            </select>
          </div>
          <button className="mt-3 w-100 btn btn-success">Submit</button>{" "}
          <Link to="/auth/login" className="mt-3 d-block text-center">
            <button className="btn btn-outline-dark w-100">Login</button>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Registration;
