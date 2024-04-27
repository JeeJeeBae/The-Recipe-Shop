const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
    prepTime: Number,
    ingredients: [String],
    instructions: String,
  },
  { collection: "recipe" }
);

module.exports = mongoose.model("Recipe", recipeSchema);
