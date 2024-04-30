const UserModel = require("../Models/User");
const RecipeModel = require("../Models/Recipe");

const getSavedRecipes = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user.savedRecipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch saved recipes" });
  }
};

const getUserRecipes = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const recipes = await RecipeModel.find({ _id: { $in: user.savedRecipes } });
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch user recipes" });
  }
};

const saveRecipe = async (req, res) => {
  try {
    const { userId, recipeId } = req.body;
    const user = await UserModel.findById(userId);
    const recipe = await RecipeModel.findById(recipeId);

    if (!user || !recipe) {
      return res.status(404).json({ error: "User or Recipe not found" });
    }

    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save recipe for user" });
  }
};

module.exports = { getSavedRecipes, getUserRecipes, saveRecipe };
