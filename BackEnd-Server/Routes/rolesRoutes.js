const express = require("express");
const router = express.Router();
const { getAllRoles } = require("../Controllers/rolesController");

router.get("/", getAllRoles);

module.exports = router;
