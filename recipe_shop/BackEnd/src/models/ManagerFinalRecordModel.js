const mongoose = require("mongoose");

const ManagerFinalRecordSchema = new mongoose.Schema(
    {
        applicantId: { type: String, required: true, match: /[A][1-9]\d{3}/ },
        staffId: { type: String, required: true, match: /[M][1-9]\d{4}/ },
        finalGrade: { type: Number, min: 0, max: 100, default: 0 },
        isRecommended: { type: Boolean, require: true, default: false },
    },
    {
        collection: "managerFinalRecords",
    }
);

module.exports = mongoose.model(
    "ManagerFinalRecords",
    ManagerFinalRecordSchema
);
