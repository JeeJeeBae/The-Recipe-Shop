import React from "react";

const Cost = ({ totalCost }) => {
  return (
    <div className="costContainer">
      <div className="">Step 2: Choose your grocery:</div>
      <br />
      <button className="groceryButton" type="submit">
        <img className="grocery" src="af.png"></img>
      </button>
      <button className="groceryButton" type="submit">
        <img className="grocery" src="red.png"></img>
      </button>
      <div className="cost">
        Estimated Cost: <b>S${totalCost}</b>
      </div>
    </div>
  );
};

export default Cost;
