const express = require("express");
const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.json({ message: "user already exists" });
  }
  const hashpassword = await bcrypt.hash(password, 10);
  const newuser = new UserModel({ username, password: hashpassword });
  await newuser.save();
  return res.json({ message: "record saved" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (!user) {
    return res.json({ message: "Wrong credentials" });
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.json({ message: "Wrong credentials" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  res.cookie("token", token);
  return res.json({ message: "Successfully logged in", id: user._id });
});

router.get("./logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Success" });
});

module.exports = router;
