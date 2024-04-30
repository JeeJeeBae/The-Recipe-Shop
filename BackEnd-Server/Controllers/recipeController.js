const RecipeModel = require("../Models/Recipe");

const createRecipe = async (req, res) => {
  try {
    const { name, description, ingredients, imageUrl, userId } = req.body;
    const recipe = await RecipeModel.create({
      name,
      description,
      ingredients,
      imageUrl,
      userId,
    });
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create recipe" });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const updates = req.body; // Data to update

    // Find the recipe by ID and update it
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      recipeId,
      updates,
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json({ message: "Recipe updated successfully", updatedRecipe });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update recipe" });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const deletedRecipe = await RecipeModel.findByIdAndDelete(recipeId);
    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json({ message: "Recipe deleted successfully", deletedRecipe });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete recipe" });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
