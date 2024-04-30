const express = require("express");
const router = express.Router();
const { getAllRoles } = require("../Controllers/rolesController");
// const { populateRoles } = require("../Controllers/populateController");

router.get("/", getAllRoles);
// router.get("/populate", populateRoles);

module.exports = router;
