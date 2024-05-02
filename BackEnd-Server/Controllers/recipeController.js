const RecipeModel = require("../Models/Recipe");

const createRecipe = async (req, res) => {
  try {
    if (req.decoded.id !== req.body.userId) {
      return res.status(403).json({ status: "error", msg: "not authorised" });
    }
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

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
};
