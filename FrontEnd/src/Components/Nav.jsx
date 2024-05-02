import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Nav = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    axios
      .get(import.meta.env.VITE_SERVER + "/auth/logout")
      .then((result) => {
        onLogout();
        navigate("/auth/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          R-E-C-I-P-E-S
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
            <li className="nav-item">
              <Link className="nav-link text-white" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              {window.localStorage.length ? (
                <button
                  className="btn btn-outline-light"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link to="/auth/login" className="nav-link text-white">
                  Login/Register
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
