const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserRole,
  getUserProfile,
} = require("../Controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/user-role/:id", getUserRole);
router.get("/profile", getUserProfile);

module.exports = router;
