const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
} = require("../Controllers/recipeController");
const {
  getSavedRecipes,
  getUserRecipes,
  saveRecipe,
  unsaveRecipe,
} = require("../Controllers/userController");

const auth = require("../middleware/auth");

router.post("/create-recipe", auth, createRecipe);
router.get("/recipes", auth, getAllRecipes);
router.get("/recipe-by-id/:id", auth, getRecipeById);
router.get("/saved-recipes/:id", auth, getSavedRecipes);
router.get("/user-recipes/:id", auth, getUserRecipes);
router.put("/", auth, saveRecipe);
router.patch("/recipe/:id", auth, updateRecipe);
router.delete("/unsave-recipe", auth, unsaveRecipe);

module.exports = router;
