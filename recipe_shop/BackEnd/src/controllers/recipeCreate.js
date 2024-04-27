const Recipe = require("../models/RecipeModel");

const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe({
      title: req.body.title,
      image: req.file.path,
      prepTime: req.body.prepTime,
      ingredients: JSON.parse(req.body.ingredients),
      instructions: req.body.instructions,
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRecipe };
