import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      navigate("/auth/login");
    }

    axios
      .get(import.meta.env.VITE_SERVER + "/recipe/recipes", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <br></br>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="col-md-4 mb-4">
            <div className="p-3 border">
              <Link
                to={`/read-recipe/${recipe._id}`}
                className="text-decoration-none"
              >
                <h3>{recipe.name}</h3>
              </Link>
              <img
                src={recipe.imageUrl}
                alt="Recipe"
                className="img-fluid mt-3"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
