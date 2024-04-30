// const express = require("express");
// const RecipeModel = require("../Models/Recipe");
// const UserModel = require("../Models/User");

// const router = express.Router();

// router.post("/create-recipe", (req, res) => {
//   RecipeModel.create({
//     name: req.body.name,
//     description: req.body.description,
//     ingredients: req.body.ingredients,
//     imageUrl: req.body.imageurl,
//     userId: req.body.userId,
//   })
//     .then((result) => {
//       return res.json(result);
//     })
//     .catch((err) => console.log(err));
// });

// router.get("/recipes", (req, res) => {
//   RecipeModel.find()
//     .then((recipes) => {
//       return res.json(recipes);
//     })
//     .catch((err) => res.json(err));
// });

// router.get("/recipe-by-id/:id", (req, res) => {
//   const id = req.params.id;
//   RecipeModel.findById({ _id: id })
//     .then((result) => {
//       return res.json(result);
//     })
//     .catch((err) => res.json(err));
// });

// router.get("/saved-recipes/:id", (req, res) => {
//   const id = req.params.id;
//   UserModel.findById({ _id: id })
//     .then((result) => res.json(result.savedRecipes))
//     .catch((err) => res.status(500).json(err));
// });

// router.get("/user-recipes/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const user = UserModel.find({ _id: id });
//     const recipes = await RecipeModel.find({
//       _id: { $in: user.savedRecipes },
//     });
//     console.log(recipes);
//     res.status(201).json(recipes);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.put("/", async (req, res) => {
//   const recipe = await RecipeModel.findById({ _id: req.body.recipeId });
//   const user = await UserModel.findById({ _id: req.body.userId });
//   try {
//     user.savedRecipes.push(recipe);
//     await user.save();
//     return res.json({ savedRecipes: user.savedRecipes });
//   } catch (err) {
//     return res.json(err);
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
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

module.exports = router;
