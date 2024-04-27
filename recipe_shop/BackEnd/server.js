require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const multer = require("multer");
const rateLimit = require("express-rate-limit");
const connectDB = require("./src/db/db");
const loginAuth = require("./src/routers/loginAuthRouter");
const roles = require("./src/routers/rolesRouter");
const create = require("./src/routers/recipeCreate");

connectDB();
const limiter = rateLimit({
  windowMS: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();
app.use(cors());
app.use(helmet());
app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", loginAuth);
app.use("/roles", roles);
app.use("/recipe", create);

app.listen(process.env.PORT, () => {
  console.log(`listening to ${process.env.PORT}`);
});
