import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipe/recipes")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      {/* <h2 className="text-center mb-4">Recipes</h2> */}
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
