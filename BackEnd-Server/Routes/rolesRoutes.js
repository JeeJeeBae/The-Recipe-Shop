const express = require("express");
const router = express.Router();
const RolesModel = require("../Models/Roles");

router.get("/roles", getAllRoles);

module.exports = router;
