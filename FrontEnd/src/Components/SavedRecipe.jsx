import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SavedRecipe = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userId = window.localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_SERVER + `/recipe/user-recipes/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setSavedRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching saved recipes:", error);
      });
  }, [userId]);

  const handleUnsaveRecipe = (recipeId) => {
    axios
      .delete(import.meta.env.VITE_SERVER + "/recipe/unsave-recipe", {
        data: { userId, recipeId },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }, // Pass userId and recipeId in the request body
      })
      .then((response) => {
        // Filter out the unsaved recipe from savedRecipes
        setSavedRecipes(
          savedRecipes.filter((recipe) => recipe._id !== recipeId)
        );
        console.log("Recipe unsaved successfully");
      })
      .catch((error) => {
        console.error("Error unsaving recipe:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Saved Recipes</h2>
      <div className="row justify-content-center">
        {savedRecipes.map((recipe) => (
          <div key={recipe._id} className="col-md-6">
            <div className="card mb-4">
              <img
                src={recipe.imageUrl}
                className="card-img-top"
                alt="Recipe"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <Link
                  to={`/read-recipe/${recipe._id}`}
                  className="text-decoration-none"
                >
                  <h5 className="card-title">{recipe.name}</h5>
                </Link>
                <button
                  className="btn ms-2"
                  onClick={() => handleUnsaveRecipe(recipe._id)}
                  style={{
                    margin: "20px",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  Unsave this receipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedRecipe;
