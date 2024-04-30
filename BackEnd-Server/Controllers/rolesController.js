const Roles = require("../Models/Roles");

const getAllRoles = async (req, res) => {
  try {
    const roles = await Roles.find();
    res.json(roles);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "Cannot get roles" });
  }
};

module.exports = { getAllRoles };
