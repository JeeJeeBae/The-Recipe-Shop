const Roles = require("../Models/Roles");

const populateRoles = async () => {
  try {
    const roles = await Roles.find();
    if (roles.length === 0) {
      await Roles.insertMany([{ role: "reader" }, { role: "creator" }]);
      console.log("Roles populated successfully");
    } else {
      console.log("Roles already populated");
    }
  } catch (error) {
    console.error("Error populating roles:", error);
  }
};

module.exports = { populateRoles };
