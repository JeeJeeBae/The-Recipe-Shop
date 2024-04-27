const express = require("express");
const router = express.Router();
const { createRecipe } = require("../controllers/recipeCreate");
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Configure Multer as needed

router.post("/create/", upload.single("image"), createRecipe);

module.exports = router;
