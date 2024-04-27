const mongoose = require("mongoose");

const roleEnum = ["manager", "general manager"];

const LoginAuthSchema = new mongoose.Schema(
    {
        email: { type: String, require: true },
        staffId: { type: String, match: /[M][1-9]\d{4}/, default: "M" + Math.floor(Math.random() * 100000) },
        hash: { type: String, require: true },
        role: { type: String, require: true, enum: roleEnum, default: "manager" },
        created_at: { type: Date, default: Date.now },
    },
    {
        collection: "loginAuth",
    }
);

module.exports = mongoose.model("LoginAuth", LoginAuthSchema);
