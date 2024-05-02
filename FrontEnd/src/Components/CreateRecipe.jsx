import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    imageUrl: "",
    userId: window.localStorage.getItem("id"),
  });

  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      navigate("/auth/login");
    }
    axios
      .get(
        "http://localhost:3001/auth/user-role/" +
          window.localStorage.getItem("id"),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setUserRole(response.data.role);
      })
      .catch((error) => {
        console.error("Error fetching user role:", error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/recipe/create-recipe", recipe)
      .then((result) => {
        navigate("/");
        console.log(result.data);
        alert("Recipe created");
      })
      .catch((err) => {
        console.error("There was an error!", err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 border border-1 w-50">
        <h3>Create Recipe</h3>
        {userRole !== "reader" && (
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="form-control"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                placeholder="Enter descriptions"
                className="form-control"
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="ingredients">Ingredients</label>
              <input
                type="text"
                placeholder="Enter ingredients"
                className="form-control"
                name="ingredients"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                placeholder="Enter URL"
                className="form-control"
                name="imageUrl"
                onChange={handleChange}
              />
            </div>
            <button className="mt-1 btn btn-success w-100 mt-2 mb-3">
              Submit
            </button>
          </form>
        )}
        {userRole === "reader" && (
          <p>
            Sorry, you do not have permission to create a recipe as a reader.
            <button className="">Learn how you can become a creator</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default CreateRecipe;
