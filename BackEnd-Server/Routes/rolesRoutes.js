const express = require("express");
const router = express.Router();
const { getAllRoles } = require("../Controllers/rolesController");

const auth = require("../middleware/auth");

router.get("/", auth, getAllRoles);

module.exports = router;
