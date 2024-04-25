import React from "react";

const AddItems = ({ selectedItems }) => {
  return (
    <div className="addItemsContainer">
      <div className="">Step 3: Add items to your basket:</div>
      <br />
      <div className="items">{selectedItems} Items Selected</div>
      <button className="itemsButton">Add Items</button>
    </div>
  );
};

export default AddItems;
