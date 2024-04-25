import React, { useState, useEffect } from "react";

const Summary = () => {
  const [recipeSum, setRecipeSum] = useState(
    "The summary of a recipe appear here."
  );

  useEffect(() => {
    const fetchRecipeSum = async () => {
      try {
        const res = await fetch(
          "https://api.spoonacular.com/recipes/644148/information?apiKey=605e15e03efe45f6a04b91d3501a440b&includeNutrition=false"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setRecipeSum(data.summary);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRecipeSum();
  }, []);

  return (
    <>
      <div className="container">
        <div className="prep">
          <h5>Summary:</h5>

          {recipeSum}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Summary;
