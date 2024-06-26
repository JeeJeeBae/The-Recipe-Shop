const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to register user" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.ACCESS_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", id: user._id, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to login" });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout successful" });
};

const getUserRole = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);
    console.log(user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ role: user.role });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch user role" });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await UserModel.findById(userId);
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { email, role } = user;
    res.json({ email, role });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateUserEmail = async (req, res) => {
  try {
    if (req.decoded.id !== req.body.userId) {
      return res.status(403).json({ status: "error", msg: "not authorised" });
    }
    const { userId, newEmail } = req.body;
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.email = newEmail;
    await user.save();

    res.json({ message: "Email updated successfully", email: newEmail });
  } catch (error) {
    console.error("Error updating email:", error);
    res.status(500).json({ message: "Failed to update email" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUserRole,
  getUserProfile,
  updateUserEmail,
};
