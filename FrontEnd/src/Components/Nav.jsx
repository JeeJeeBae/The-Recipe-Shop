import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Nav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    axios
      .get("http://localhost:3001/auth/logout")
      .then((result) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collape navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              The Recipe Shop
            </Link>
            <ul className="navbar-nav ms-2 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-black"
                  to="/recipe/create-recipe"
                  aria-current="page"
                >
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/recipe/saved-recipe">
                  Saved Recipe
                </Link>
              </li>
            </ul>

            {window.localStorage.length ? (
              <button className="btn btn-outline-black" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className="btn btn-outline-black" type="submit">
                <Link to="/auth/register" className="text-decoration-none">
                  {/* {" "} */}
                  Login/Register
                </Link>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
