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

const auth = require("../middleware/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/user-role/:id", auth, getUserRole);
router.post("/profile", auth, getUserProfile);
router.patch("/update-email", auth, updateUserEmail);

module.exports = router;
