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
  }, [id, userId]);

  const savedRecipe = (recipeId) => {
    axios
      .put("http://localhost:3001/recipe", { userId, recipeId })
      .then((result) => setSavedRecipes(result.data.savedRecipes))
      .catch((err) => console.log(err));
  };

  const isRecipeSaved = (id) => {
    return Array.isArray(savedRecipes) && savedRecipes.includes(id);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{recipe.name}</h2>
      <div className="row">
        <div className="col-md-4">
          <img
            src={recipe.imageUrl}
            alt="Recipe Image"
            className="img-fluid mb-3"
          />
          <button
            className="btn btn-warning w-100"
            onClick={() => savedRecipe(recipe._id)}
            disabled={isRecipeSaved(recipe._id)}
          >
            {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
          </button>
        </div>
        <div className="col-md-8">
          <div className="mb-4">
            <h4>Ingredients</h4>
            <p>{recipe.ingredients}</p>
          </div>
          <div className="mb-4">
            <h4>Description</h4>
            <p>{recipe.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadRecipe;
