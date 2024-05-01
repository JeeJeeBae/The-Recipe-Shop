import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Nav = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear(); // Clear local storage on logout
    axios
      .get("http://localhost:3001/auth/logout")
      .then((result) => {
        onLogout(); // Call the onLogout function to update the isLoggedIn state in App component
        navigate("/auth/login");

        // history.push("/auth/login"); // Redirect to the Login page after logout
      })
      .catch((err) => console.log(err));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand text-white" to="/">
            R-E-C-I-P-E-S
          </Link>
          <ul className="navbar-nav ms-2 me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/recipe/saved-recipe">
                Your Saved Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/recipe/create-recipe"
                aria-current="page"
              >
                Create
              </Link>
            </li>
          </ul>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/profile">
              Profile
            </Link>
          </li>

          {window.localStorage.length ? (
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn btn-outline-light">
              <Link
                to="/auth/login"
                className="text-decoration-none text-white"
              >
                Login/Register
              </Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
