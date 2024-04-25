import React from "react";
// import { saveRecipeToAirtable } from "../Api";
import Recommended from "../Recommended";

const SavedRecipes = ({ savedRecipe }) => {
  // const saveToAirtable = async () => {
  //   try {
  //     await saveRecipeToAirtable(savedRecipe);
  //     alert("Recipe saved successfully!");
  //   } catch (error) {
  //     console.error("Error saving:", error);
  //     alert("An error occurred while saving the recipe.");
  //   }
  // };

  return (
    <>
      <div className="savedRecipesContainer">
        {savedRecipe && (
          <div className="saveCard">
            <img
              className="recImage"
              src={savedRecipe.image}
              alt={savedRecipe.title}
            />
            <div className="recContent">
              <div className="recHeader">{savedRecipe.title}</div>
              <div className="recTime">
                Ready in {savedRecipe.time} minutes.
              </div>
              <button className="startButton" onClick={saveToAirtable}>
                Save recipe
              </button>
            </div>
          </div>
        )}
      </div>
      <Recommended />
    </>
  );
};

export default SavedRecipes;
