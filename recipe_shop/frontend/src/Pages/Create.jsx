import React, { useState } from "react";

const NewRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [prepTime, setPrepTime] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState("");

  // const userCtx = useContext(UserContext);
  // const fetchData = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("prepTime", prepTime);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("instructions", instructions);

    try {
      const response = await fetch("/recipe/create/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create recipe");
      }

      alert("Recipe created successfully!");
      // Reset form or redirect as needed
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create recipe. Please try again.");
    }
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const updateIngredient = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Image:
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </label>
      <label>
        Prep Time (minutes):
        <input
          type="number"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          required
        />
      </label>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <label>
            Ingredient {index + 1}:
            <input
              type="text"
              value={ingredient}
              onChange={(e) => updateIngredient(index, e.target.value)}
              required
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={addIngredient}>
        Add Ingredient
      </button>
      <label>
        Instructions:
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewRecipeForm;
