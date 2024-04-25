import React, { useState, useEffect } from "react";

const Header = ({ onSaveRecipe }) => {
  const [recipeTitle, setRecipeTitle] = useState("The Recipe Title");
  const [recipeImage, setRecipeImage] = useState("default.png");
  const [recipeTime, setRecipeTime] = useState(0);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const res = await fetch(
          "https://api.spoonacular.com/recipes/644148/information?apiKey=605e15e03efe45f6a04b91d3501a440b&includeNutrition=false"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setRecipeTitle(data.title);
        setRecipeImage(data.image);
        setRecipeTime(data.readyInMinutes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRecipeData();
  }, []);

  const handleSaveRecipe = () => {
    onSaveRecipe({
      title: recipeTitle,
      image: recipeImage,
      time: recipeTime,
    });
  };

  return (
    <>
      <div className="container">
        <div className="recipeHeader">
          <div className="row">
            <img className="recipeImage" src={recipeImage} alt="Recipe"></img>
            <div className="recipeTitle">
              <h2>{recipeTitle}</h2>
              <div>Ready in {recipeTime} minutes.</div>
              <br />
              <button className="startButton" onClick={handleSaveRecipe}>
                Save this recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
