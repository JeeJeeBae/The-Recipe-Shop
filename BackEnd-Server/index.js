const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRouter = require("./Routes/auth");
const recipeRouter = require("./Routes/recipeRoutes");
const rolesRouter = require("./Routes/rolesRoutes");
const { populateRoles } = require("./Controllers/populateController");

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/auth", userRouter);
app.use("/recipe", recipeRouter);
app.use("/roles", rolesRouter);

mongoose.connect("mongodb://127.0.0.1:27017/recipe", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

populateRoles()
  .then(() => {
    app.listen(3001, () => {
      console.log("Server started");
    });
  })
  .catch((error) => {
    console.error("Error populating roles:", error);
  });
