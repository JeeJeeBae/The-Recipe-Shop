import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ReadRecipe = () => {
  const { id } = useParams();
  const userId = window.localStorage.getItem("id");
  const [recipe, setRecipe] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const getRecipe = () => {
      axios
        .get("http://localhost:3001/recipe/recipe-by-id/" + id)
        .then((result) => {
          setRecipe(result.data);
        })
        .catch((err) => console.log(err));
    };

    const fetchSavedRecipes = () => {
      axios
        .get("http://localhost:3001/recipe/saved-recipes/" + userId)
        .then((result) => {
          setSavedRecipes(result.data.savedRecipes);
        })
        .catch((err) => console.log(err));
    };

    fetchSavedRecipes();
    getRecipe();
  }, []);

  const savedRecipe = (recipeId) => {
    axios
      .put("http://localhost:3001/recipe", { userId, recipeId })
      .then((result) => setSavedRecipes(result.data.savedRecipes))
      .catch((err) => console.log(err));
  };
  const isRecipeSaved = (id) => {
    // Check if savedRecipes is defined and is an array
    if (Array.isArray(savedRecipes)) {
      return savedRecipes.includes(id);
    } else {
      console.error("savedRecipes is not an array:", savedRecipes);
      return false; // Return false as a fallback
    }
  };

  // const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div className="d-flex justify-content-center container mt-3">
      <div className="p-2">
        <img src={recipe.imageUrl} alt="" />
      </div>

      <div className="p-2">
        <h2>{recipe.name}</h2>
        <button
          className="btn btn-warning"
          onClick={() => savedRecipe(recipe._id)}
          disabled={isRecipeSaved(recipe._id)}
        >
          {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
        </button>
        <h4>Ingredients</h4>
        <p>{recipe.ingredients}</p>
        <h4>Description</h4>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};

export default ReadRecipe;
