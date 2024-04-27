const mongoose = require("mongoose");

const GeneralManagerRecordSchema = new mongoose.Schema(
    {
        applicantId: { type: String, require: true, match: /[A][1-9]\d{3}/ },
        isRecommended: { type: Boolean, require: true, default: false },
    },
    {
        collection: "generalManagerRecords",
    }
);

module.exports = mongoose.model(
    "GeneralManagerRecords",
    GeneralManagerRecordSchema
);
