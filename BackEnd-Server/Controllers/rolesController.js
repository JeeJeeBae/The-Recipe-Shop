const Roles = require("../Models/Roles");

const getAllRoles = async (req, res) => {
  try {
    if (req.decoded.id !== req.body.userId) {
      return res.status(403).json({ status: "error", msg: "not authorised" });
    }
    const roles = await Roles.find();
    res.json(roles);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "Cannot get roles" });
  }
};

module.exports = { getAllRoles };
