const express = require("express");
const {
    getAllUsers,
    register,
    login,
} = require("../controllers/loginAuthController");
const {
    validateRegistrationData,
    validateLoginData,
    validateRefreshToken,
} = require("../validators/loginAuth-validate");

const { errorCheck } = require("../validators/errorChecks");
const router = express.Router();

router.get("/users", getAllUsers);
router.put("/register", validateRegistrationData, errorCheck, register);
router.post("/login", validateLoginData, errorCheck, login);
// router.post("/refresh", validateRefreshToken, errorCheck, refresh);

module.exports = router;
