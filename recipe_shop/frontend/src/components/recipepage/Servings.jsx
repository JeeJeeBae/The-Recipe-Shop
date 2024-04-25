import React, { useState } from "react";

const Servings = ({ onServingSizeChange }) => {
  const [servingSize, setServingSize] = useState(0);

  const handleServingSizeChange = (event) => {
    const newSize = event.target.value;
    setServingSize(newSize);
    onServingSizeChange(newSize); // notify parent component
  };

  return (
    <div className="servingsContainer">
      <p>Step 1: Choose serving size:</p>

      <div className="rowb">
        <input
          className="servingsInput"
          type="number"
          value={servingSize}
          onChange={handleServingSizeChange}
        />
        <div className="servingsText">Servings</div>
      </div>
    </div>
  );
};

export default Servings;
