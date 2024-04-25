import React, { useState } from "react";
import Header from "./recipepage/Header";
import Prep from "./recipepage/Prep";
import Ingredients from "./recipepage/Ingredients";
import Servings from "./recipepage/Servings";
import Cost from "./recipepage/Cost";
import AddItems from "./recipepage/AddItems";
import Summary from "./recipepage/Summary";
import { useNavigate } from "react-router-dom";

const Recipe = ({ onSaveRecipe }) => {
  const [servingSize, setServingSize] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [selectedItemsCount, setSelectedItemsCount] = useState(0);
  const navigate = useNavigate();

  const handleServingSizeChange = (newServingSize) => {
    setServingSize(newServingSize);
  };

  const handleTotalCostChange = (cost) => {
    setTotalCost(cost);
  };

  const handleSelectedItemsChange = (count) => {
    setSelectedItemsCount(count);
  };

  const handleSaveRecipe = (recipe) => {
    onSaveRecipe(recipe);
    navigate("/saved"); // go to the saved recipes page after saving the recipe
  };

  return (
    <div>
      <Header onSaveRecipe={handleSaveRecipe} />
      <Prep />
      <Summary />
      <Ingredients
        servingSize={servingSize}
        onCheckboxChange={handleTotalCostChange}
        onSelectedItemsChange={handleSelectedItemsChange}
      />
      <div className="fixedContainer">
        <div className="rowC ">
          <Servings onServingSizeChange={handleServingSizeChange} />
          <Cost totalCost={totalCost} />
          <AddItems selectedItems={selectedItemsCount} />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Recipe;
