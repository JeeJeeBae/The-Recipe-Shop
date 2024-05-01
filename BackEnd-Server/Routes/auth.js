const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserRole,
  getUserProfile,
  updateUserEmail,
} = require("../Controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/user-role/:id", getUserRole);
router.post("/profile", getUserProfile);
router.patch("/update-email", updateUserEmail);

module.exports = router;
