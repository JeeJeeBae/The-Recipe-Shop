import React from "react";

const SavedRecipes = ({ savedRecipe }) => {
  return (
    <div>
      {savedRecipe && (
        <div>
          <h3>{savedRecipe.title}</h3>
          <img src={savedRecipe.image} alt={savedRecipe.title} />
          <p>Ready in {savedRecipe.time} minutes.</p>
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;
