const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./Routes/auth");
const cookieParser = require("cookie-parser");
const recipeRouter = require("./Routes/recipeRoutes");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5174"],
    method: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/auth", userRouter);
app.use("/recipe", recipeRouter);

mongoose.connect("mongodb://127.0.0.1:27017/recipe");

app.listen(3001, () => {
  console.log("Server started");
});
