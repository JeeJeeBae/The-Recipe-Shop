import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SavedRecipe = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userId = window.localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/recipe/user-recipes/${userId}`)
      .then((response) => {
        setSavedRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching saved recipes:", error);
      });
  }, [userId]);

  const handleUnsaveRecipe = (recipeId) => {
    axios
      .delete(`http://localhost:3001/recipe/unsave-recipe`, {
        data: { userId, recipeId }, // Pass userId and recipeId in the request body
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
    <div className="d-flex justify-content-center">
      <div>
        <br></br>
        <h2> Saved Recipes</h2>
        {savedRecipes.map((recipe) => (
          <div key={recipe._id} className="mt-4 p-3 border">
            <Link
              to={`/read-recipe/${recipe._id}`}
              className="text-decoration-none"
            >
              <h3>{recipe.name}</h3>
            </Link>
            <img src={recipe.imageUrl} alt="Recipe" />
            <button
              className="btn btn-danger mt-2"
              onClick={() => handleUnsaveRecipe(recipe._id)}
            >
              Unsave
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedRecipe;
