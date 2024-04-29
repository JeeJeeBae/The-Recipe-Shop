import React, { useState } from "react";
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const navigate = useNavigate();
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
        if (err.response) {
          x;
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
          console.error("Response headers:", err.response.headers);
        } else if (err.request) {
          console.error("Request:", err.request);
        } else {
          console.error("Error message:", err.message);
        }
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 border border-1 w-25">
        <h3>Create Recipe</h3>
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

          <button
            className="mt-1 btn btn-success w-100 mt-2 mb-3"
            // onSubmit={handleSubmit}
          >
            Submit
          </button>
          {/* <Link to="/auth/login">
            <button className="btn btn-default w-100 mt-2 border">Login</button>
          </Link> */}
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
