const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../Controllers/recipeController");
const {
  getSavedRecipes,
  getUserRecipes,
  saveRecipe,
} = require("../Controllers/userController");

router.post("/create-recipe", createRecipe);
router.get("/recipes", getAllRecipes);
router.get("/recipe-by-id/:id", getRecipeById);
router.get("/saved-recipes/:id", getSavedRecipes);
router.get("/user-recipes/:id", getUserRecipes);
router.put("/", saveRecipe);
router.patch("/recipe/:id", updateRecipe);
router.delete("/delete-recipe/:id", deleteRecipe);

module.exports = router;
