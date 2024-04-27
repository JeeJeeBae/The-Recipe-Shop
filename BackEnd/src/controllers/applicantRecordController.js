const ApplicantRecordModel = require("../models/ApplicantRecordModel");
const ManagerFinalRecordModel = require("../models/ManagerFinalRecordModel");
const GeneralManagerRecordModel = require("../models/GeneralManagerRecordModel");


const seedApplicant = async (req, res) => {
    try {
        await ApplicantRecordModel.deleteMany({});

        await ApplicantRecordModel.create([
            {
                _id: "660e0df3c050096882b8950b", // to check on object id
                applicantId: "A1000",
                // applicantName: "Adam",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "27485.60000",
                timeIn: "2023-10-16T11:10:29.551Z",
                priceOut: "35460.00000",
                timeOut: "2023-10-23T11:16:44.991Z",
                managers: [
                    {
                        staffId: "M20000",
                        grade: 4.5,
                        comment: "applicant priced out at the right time!",
                    },
                    {
                        staffId: "M30000",
                        grade: 4.0,
                        comment: "NA",   
                    },
                    {
                        staffId: "M40000",
                        grade: 4.5,
                        comment: "expecting a lower price-in",
                    },
                ],
            },
            {
                _id: "660e0e74c050096882b8950d", // to check on object id
                applicantId: "A1000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "38290.00000",
                timeIn: "2023-12-01T11:16:52.687Z",
                priceOut: "43896.71990",
                timeOut: "2023-12-06T11:17:07.259Z",
                managers: [
                    {
                        staffId: "M20000",
                        grade: 3.5,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                    {
                        staffId: "M30000",
                        grade: 4.0,
                        comment: "NA",
                    },
                    {
                        staffId: "M40000",
                        grade: 4.5,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                ],
            },
            {
                _id: "660e0ea3c050096882b8950f", // to check on object id
                applicantId: "A1000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "44384.14286",
                timeIn: "2024-01-08T14:47:27.131Z",
                priceOut: "45846.20000",
                timeOut: "2024-01-12T14:47:50.690Z",
                managers: [
                    {
                        staffId: "M20000",
                        grade: 4.0,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                    {
                        staffId: "M30000",
                        grade: 3.0,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                    {
                        staffId: "M40000",
                        grade: 3.5,
                        comment: "test onearok jfodije i",
                    },
                ],
            },
            {
                _id: "660e0ecbc050096882b89511", // to check on object id
                applicantId: "A1000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "42677.00000",
                timeIn: "2024-02-04T11:16:52.687Z",
                priceOut: "49502.71990",
                timeOut: "2024-02-13T11:17:07.259Z",
                managers: [],
            },
            {
                _id: "660e0efbc053496882b89414",
                applicantId: "A1000",
                executedQty: 1.0,
                tradeType: "short",
                priceIn: "52183.14286",
                timeIn: "2024-02-15T14:47:27.131Z",
                priceOut: "52183.20000",
                timeOut: "2024-02-22T14:47:50.690Z",
                manager: [],
            },
            {
                _id: "660e0efbc053496882b89313",
                applicantId: "A1000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "51452.00000",
                timeIn: "2024-02-24T03:08:00.448Z",
                priceOut: "61689.00000",
                timeOut: "2024-02-29T03:10:50.919Z",
                manager: [],
            },
            {
                _id: "660e0efbc053496882b89583",
                applicantId: "A1000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "68270.00000",
                timeIn: "2024-03-04T04:52:27.270Z",
                priceOut: "61202.57497",
                timeOut: "2024-03-05T11:03:52.544Z",
                manager: [],
            },
            {
                _id: "660e0efbc053496882b89511",
                applicantId: "A1000",
                executedQty: 1.0,
                tradeType: "short",
                priceIn: "67783.10000",
                timeIn: "2024-03-08T11:04:59.819Z",
                priceOut: "72170.00000",
                timeOut: "2024-03-11T11:05:19.755Z",
                manager: [],
            },
            {
                _id: "660e0efbc053496882b89514",
                applicantId: "A1000",
                executedQty: 1.0,
                tradeType: "short",
                priceIn: "67295.60000",
                timeIn: "2024-03-19T11:09:53.263Z",
                priceOut: "64614.20000",
                timeOut: "2024-03-24T11:10:00.331Z",
                manager: [],
            },
            {
                _id: "660e0efbc053496882b89513",
                applicantId: "A1000",
                executedQty: 1.0,
                priceIn: "64614.60000",
                timeIn: "2024-03-24T11:10:11.055Z",
                priceOut: "69002.27788",
                timeOut: "2024-03-27T11:10:15.312Z",
                manager: [],
            },
            // ----------------------------------------------------------------------------------------------------
            {
                _id: "670e0efbc050096882b89513", // to check on object id
                applicantId: "A2000",
                priceIn: 69394.9848,
                timeIn: "2024-04-02T03:08:00.448Z",
                priceOut: 65118.9248,
                timeOut: "2024-04-02T03:10:50.919Z",
                managers: [
                    {
                        staffId: "M30000",
                        grade: 2.0,
                        comment: "NA",
                    },
                    {
                        staffId: "M40000",
                        grade: 1.5,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                ],
            },
            {
                _id: "670e0df3c050096882b8950b", // to check on object id
                applicantId: "A2000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "27485.60000",
                timeIn: "2023-10-16T11:10:29.551Z",
                priceOut: "35460.00000",
                timeOut: "2023-10-23T11:16:44.991Z",
                managers: [
                    {
                        staffId: "M20000",
                        grade: 4.5,
                        comment: "applicant priced out at the right time!",
                    },
                    {
                        staffId: "M30000",
                        grade: 4.0,
                        comment: "NA",
                    },
                    {
                        staffId: "M40000",
                        grade: 4.5,
                        comment: "expecting a lower price-in",
                    },
                ],
            },
            {
                _id: "670e0e74c050096882b8950d", // to check on object id
                applicantId: "A2000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "38290.00000",
                timeIn: "2023-12-01T11:16:52.687Z",
                priceOut: "43896.71990",
                timeOut: "2023-12-06T11:17:07.259Z",
                managers: [
                    {
                        staffId: "M20000",
                        grade: 3.5,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                    {
                        staffId: "M30000",
                        grade: 4.0,
                        comment: "NA",
                    },
                    {
                        staffId: "M40000",
                        grade: 4.5,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                ],
            },
            {
                _id: "670e0ea3c050096882b8950f", // to check on object id
                applicantId: "A2000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "44384.14286",
                timeIn: "2024-01-08T14:47:27.131Z",
                priceOut: "45846.20000",
                timeOut: "2024-01-12T14:47:50.690Z",
                managers: [
                    {
                        staffId: "M20000",
                        grade: 4.0,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                    {
                        staffId: "M30000",
                        grade: 3.0,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                    {
                        staffId: "M40000",
                        grade: 3.5,
                        comment: "test onearok jfodije i",
                    },
                ],
            },
            {
                _id: "670e0ecbc050096882b89511", // to check on object id
                applicantId: "A2000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "42677.00000",
                timeIn: "2024-02-04T11:16:52.687Z",
                priceOut: "49502.71990",
                timeOut: "2024-02-13T11:17:07.259Z",
                managers: [],
            },
            {
                _id: "670e0efbc053496882b89414",
                applicantId: "A2000",
                executedQty: 1.0,
                tradeType: "short",
                priceIn: "52183.14286",
                timeIn: "2024-02-15T14:47:27.131Z",
                priceOut: "52183.20000",
                timeOut: "2024-02-22T14:47:50.690Z",
                manager: [],
            },
            {
                _id: "670e0efbc053496882b89313",
                applicantId: "A2000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "51452.00000",
                timeIn: "2024-02-24T03:08:00.448Z",
                priceOut: "61689.00000",
                timeOut: "2024-02-29T03:10:50.919Z",
                manager: [],
            },
            {
                _id: "670e0efbc053496882b89583",
                applicantId: "A2000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "68270.00000",
                timeIn: "2024-03-04T04:52:27.270Z",
                priceOut: "61202.57497",
                timeOut: "2024-03-05T11:03:52.544Z",
                manager: [],
            },
            {
                _id: "670e0efbc053496882b89511",
                applicantId: "A2000",
                executedQty: 1.0,
                tradeType: "short",
                priceIn: "67783.10000",
                timeIn: "2024-03-08T11:04:59.819Z",
                priceOut: "72170.00000",
                timeOut: "2024-03-11T11:05:19.755Z",
                manager: [],
            },
            {
                _id: "670e0efbc053496882b89514",
                applicantId: "A2000",
                executedQty: 1.0,
                tradeType: "short",
                priceIn: "67295.60000",
                timeIn: "2024-03-19T11:09:53.263Z",
                priceOut: "64614.20000",
                timeOut: "2024-03-24T11:10:00.331Z",
                manager: [],
            },

            // ----------------------------------------------------------------------------------------------------
            {
                _id: "670e0efbc050096882c89513", // to check on object id
                applicantId: "A3000",
                priceIn: 69394.9848,
                timeIn: "2024-04-02T03:08:00.448Z",
                priceOut: 65118.9248,
                timeOut: "2024-04-02T03:10:50.919Z",
                managers: [
                    {
                        staffId: "M30000",
                        grade: 2.0,
                        comment: "NA",
                    },
                    {
                        staffId: "M40000",
                        grade: 1.5,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                ],
            },
            {
                _id: "670e0df3c050096882c8950b", // to check on object id
                applicantId: "A3000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "27485.60000",
                timeIn: "2023-10-16T11:10:29.551Z",
                priceOut: "35460.00000",
                timeOut: "2023-10-23T11:16:44.991Z",
                managers: [
                    {
                        staffId: "M20000",
                        grade: 4.5,
                        comment: "applicant priced out at the right time!",
                    },
                    {
                        staffId: "M30000",
                        grade: 4.0,
                        comment: "NA",
                    },
                    {
                        staffId: "M40000",
                        grade: 4.5,
                        comment: "expecting a lower price-in",
                    },
                ],
            },
            {
                _id: "670e0e74c050096882c8950d", // to check on object id
                applicantId: "A3000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "38290.00000",
                timeIn: "2023-12-01T11:16:52.687Z",
                priceOut: "43896.71990",
                timeOut: "2023-12-06T11:17:07.259Z",
                managers: [
                    {
                        staffId: "M20000",
                        grade: 3.5,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                    {
                        staffId: "M30000",
                        grade: 4.0,
                        comment: "NA",
                    },
                    {
                        staffId: "M40000",
                        grade: 4.5,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                ],
            },
            {
                _id: "670e0ea3c050096882c8950f", // to check on object id
                applicantId: "A3000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "44384.14286",
                timeIn: "2024-01-08T14:47:27.131Z",
                priceOut: "45846.20000",
                timeOut: "2024-01-12T14:47:50.690Z",
                managers: [
                    {
                        staffId: "M20000",
                        grade: 4.0,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                    {
                        staffId: "M30000",
                        grade: 3.0,
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sodales gravida.",
                    },
                    {
                        staffId: "M40000",
                        grade: 3.5,
                        comment: "test onearok jfodije i",
                    },
                ],
            },
            {
                _id: "670e0ecbc050096882c89511", // to check on object id
                applicantId: "A3000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "42677.00000",
                timeIn: "2024-02-04T11:16:52.687Z",
                priceOut: "49502.71990",
                timeOut: "2024-02-13T11:17:07.259Z",
                managers: [],
            },
            {
                _id: "670e0efbc053496882c89414",
                applicantId: "A3000",
                executedQty: 1.0,
                tradeType: "short",
                priceIn: "52183.14286",
                timeIn: "2024-02-15T14:47:27.131Z",
                priceOut: "52183.20000",
                timeOut: "2024-02-22T14:47:50.690Z",
                manager: []
            },
            {
                _id: "670e0efbc053496882c89313",
                applicantId: "A3000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "51452.00000",
                timeIn: "2024-02-24T03:08:00.448Z",
                priceOut: "61689.00000",
                timeOut: "2024-02-29T03:10:50.919Z",
                manager: []
            },
            {
                _id: "670e0efbc053496882c89583",
                applicantId: "A3000",
                executedQty: 1.0,
                tradeType: "long",
                priceIn: "68270.00000",
                timeIn: "2024-03-04T04:52:27.270Z",
                priceOut: "61202.57497",
                timeOut: "2024-03-05T11:03:52.544Z",
                manager: []
            },
            {
                _id: "670e0efbc053496882c89511",
                applicantId: "A3000",
                executedQty: 1.0,
                tradeType: "short",
                priceIn: "67783.10000",
                timeIn: "2024-03-08T11:04:59.819Z",
                priceOut: "72170.00000",
                timeOut: "2024-03-11T11:05:19.755Z",
                manager: []
            },
            {
                _id: "670e0efbc053496882c89514",
                applicantId: "A3000",
                executedQty: 1.0,
                tradeType: "short",
                priceIn: "67295.60000",
                timeIn: "2024-03-19T11:09:53.263Z",
                priceOut: "64614.20000",
                timeOut: "2024-03-24T11:10:00.331Z",
                manager: []
            },
        ]);
        res.json({ status: "ok", msg: "seeding successful" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ status: "error", msg: "seeding error" });
    }
};

// getting all applicants info
const getAllApplicantsRecords = async (req, res) => {
    try {
        const allApplicantsRecords = await ApplicantRecordModel.find().sort({
            applicantId: 1,
        });
        res.json(allApplicantsRecords);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "error getting all applicants record ",
        });
    }
};

// getting records by applicant's id & manager's id
const getApplicantRecordsByApplicantId = async (req, res) => {
    try {
        const applicantRecords = await ApplicantRecordModel.find({
            applicantId: req.params.applicantId,
            // "managers.staffId": req.params.staffId,
        }).sort({ timeIn: 1 });
        if (!applicantRecords || applicantRecords.length === 0) {
            return res
                .status(400)
                .json({ status: "error", msg: "applicant Records not found" });
        }

        res.json({ applicantRecords });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "error getting applicant's records",
        });
    }
};

// add new applicant record
const addNewApplicantRecord = async (req, res) => {
    try {
        const newRecord = new ApplicantRecordModel({
            applicantId: req.body.applicantId,
            username: req.body.username,
            priceIn: req.body.priceIn,
            timeIn: req.body.timeIn,
            priceOut: req.body.priceOut,
            timeOut: req.body.timeOut,
        });

        await ApplicantRecordModel.create(newRecord);

        res.json({ status: "ok", msg: "applicant trade record created" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "applicant trade record not created",
        });
    }
};

// update applicant record
const updateApplicantRecord = async (req, res) => {
    try {
        const updateApplicant = {};

        if ("applicantId" in req.body)
            updateApplicant.applicantId = req.body.applicantId;
        if ("priceIn" in req.body) updateApplicant.priceIn = req.body.priceIn;
        if ("timeIn" in req.body) updateApplicant.timeIn = req.body.timeIn;
        if ("priceOut" in req.body)
            updateApplicant.priceOut = req.body.priceOut;
        if ("timeOut" in req.body) updateApplicant.timeOut = req.body.timeOut;

        await ApplicantRecordModel.findByIdAndUpdate(
            req.params.id,
            updateApplicant
        );

        return res.json({ status: "ok", msg: "applicant record updated" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "error updating applicant",
        });
    }
};

const updateApplicantManagerRecord = async (req, res) => {
    try {
        const updateManager = {
            staffId: req.body.staffId,
            grade: req.body.grade,
            comment: req.body.comment || "",
        };

        // check if manager's record is already in
        const existingManagerRecord =
            await ApplicantRecordModel.findOneAndUpdate(
                {
                    pageNumber: req.params.pageNumber,
                    applicantId: req.body.applicantId,
                    "managers.staffId": req.body.staffId,
                },
                {
                    $set: {
                        // "managers.staffId": req.body.staffId,
                        "managers.$.grade": req.body.grade,
                        "managers.$.comment": req.body.comment,
                    },
                }
            );

        if (existingManagerRecord) {
            return res.json({ status: "ok", msg: "manager grade updated" });
        } else {
            const existingRecord = await ApplicantRecordModel.findOneAndUpdate(
                {
                    pageNumber: req.params.pageNumber,
                    applicantId: req.body.applicantId,
                },
                {
                    $addToSet: { managers: updateManager },
                }
            );

            return res.json({ status: "ok", msg: "manager grade updated" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "Error updating applicant record",
        });
    }
};

// delete an applicant record
const deleteApplicantRecord = async (req, res) => {
    try {
        await ApplicantRecordModel.findByIdAndDelete(req.params.id);
        res.json({ status: "ok", msg: "applicant deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "error deleting applicant record",
        });
    }
};

// -----------------------------------------------------------------------------------------------------

// seed Managers final records
const seedManager = async (req, res) => {
    try {
        await ManagerFinalRecordModel.deleteMany({});

        await ManagerFinalRecordModel.create([
            {
                _id: "660e1865c050096882b89516", // to check on object id
                applicantId: "A1000",
                staffId: "M20000",
                finalGrade: 80,
                isRecommended: true,
            },
            {
                _id: "660e187fc050096882b89518", // to check on object id
                applicantId: "A2000",
                staffId: "M30000",
                finalGrade: 78,
                isRecommended: true,
            },
            {
                _id: "660e1892c050096882b8951a", // to check on object id
                applicantId: "A1000",
                staffId: "M40000",
                finalGrade: 50,
                isRecommended: false,
            },
        ]);
        res.json({ status: "ok", msg: "seeding successful" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ status: "error", msg: "seeding error" });
    }
};

// getting all managers final records info
const getAllManagersFinalRecords = async (req, res) => {
    try {
        const allManagersFinalRecords =
            await ManagerFinalRecordModel.find().sort({
                staffId: 1,
            });
        res.json(allManagersFinalRecords);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "error getting all managers final record ",
        });
    }
};

// getting manager final record by applicant Id
const getManagersFinalRecordsByApplicantId = async (req, res) => {
    try {
        const allManagersFinalRecordsByApplicantId =
            await ManagerFinalRecordModel.find({
                applicantId: req.params.applicantId,
            }).sort({ applicantId: 1 });
        res.json(allManagersFinalRecordsByApplicantId);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "error getting all managers final record ",
        });
    }
};

// adding record
const addNewManagersRecord = async (req, res) => {
    try {
        const applicantManagerRecord = await ApplicantRecordModel.find({
            applicantId: req.body.applicantId,
            "managers.staffId": req.body.staffId,
        });

        let gradeSum = 0;
        if (applicantManagerRecord.length > 0) {
            gradeSum = calculateGradeSumByManager(
                applicantManagerRecord,
                req.body.staffId
            );
        }

        const existingRecord = await ManagerFinalRecordModel.findOneAndUpdate(
            {
                applicantId: req.body.applicantId,
                staffId: req.body.staffId,
            },
            {
                finalGrade: gradeSum,
            }
        );
        if (existingRecord) {
            return res.json({ status: "ok", msg: "grade is updated" });
        } else {
            const newRecord = new ManagerFinalRecordModel({
                applicantId: req.body.applicantId,
                staffId: req.body.staffId,
                finalGrade: gradeSum,
                isRecommended: req.body.isRecommended,
            });

            await ManagerFinalRecordModel.create(newRecord);
            res.json({ status: "ok", msg: "manager final record created" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "error creating manager final record ",
        });
    }
};

// updating managers final record
const updateManagerFinalRecord = async (req, res) => {
    try {
        const updateManagerRecord = {};

        if ("isRecommended" in req.body) {
            updateManagerRecord.isRecommended = req.body.isRecommended;
        }
        await ManagerFinalRecordModel.findByIdAndUpdate(
            req.params.id,
            updateManagerRecord
        );

        res.json({ status: "ok", msg: "manager final record updated" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "error updating manager final record",
        });
    }
};

// delete manager record
const deleteManagerFinalRecord = async (req, res) => {
    try {
        await ManagerFinalRecordModel.findByIdAndDelete(req.params.id);
        res.json({ status: "ok", msg: "applicant deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "error deleting applicant record",
        });
    }
};

// -----------------------------------------------------------------------------------------------------
const seedGeneralManager = async (req, res) => {
    try {
        await GeneralManagerRecordModel.deleteMany({});

        await GeneralManagerRecordModel.create([
            {
                _id: "660f9baa2b01b98bd7b6f56f",
                staffId: "GM2343",
                applicantId: "A1000",
                isRecommended: false,
                managerFinalRecords: [],
            },
            {
                _id: "660f9baa2b01b98bd7b6f34d",
                staffId: "GM2547",
                applicantId: "A2000",
                isRecommended: false,
                managerFinalRecords: [],
            },
        ]);
        res.json({ status: "ok", msg: "seeding successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ status: "error", msg: "seeding error" });
    }
};

const getAllGeneralManagersRecords = async (req, res) => {
    try {
        const allGeneralManagerRecords =
            await GeneralManagerRecordModel.find().sort({ applicantId: 1 });
        res.json(allGeneralManagerRecords);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            status: "error",
            msg: "getting all GM records error",
        });
    }
};

const getGeneralManagersRecordsByApplicantId = async (req, res) => {
    try {
        const allGeneralManagerRecordsByApplicantId =
            await GeneralManagerRecordModel.find({
                applicantId: req.params.applicantId,
            });

        res.json({
            allGeneralManagerRecordsByApplicantId,
        });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ status: "error", msg: " not record found" });
    }
};

const addNewGeneralManagerRecord = async (req, res) => {
    try {
        const generalManagerRecord = await GeneralManagerRecordModel.find({
            applicantId: req.body.applicantId,
            // staffId: req.body.staffId,
        });

        if (generalManagerRecord.length > 0) {
            return `record of ${req.body.applicantId} already exist in general manager`;
        }

        const newGeneralManagerRecord = new GeneralManagerRecordModel({
            applicantId: req.body.applicantId,
            // staffId: req.body.staffId,
        });

        await GeneralManagerRecordModel.create(newGeneralManagerRecord);
        res.json({ status: "ok", msg: "general manager record is created" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ status: "error", msg: "record not created" });
    }
};

const updateGeneralManagerRecord = async (req, res) => {
    try {
        const updateGeneralManagerRecord = {};
        const existingRecord = await GeneralManagerRecordModel.findById(
            req.params.id
        );

        if (existingRecord.length === 0) {
            return res.json({
                status: "error",
                msg: "manager final record not found!",
            });
        }

        if ("isRecommended" in req.body)
            updateGeneralManagerRecord.isRecommended = req.body.isRecommended;
        if (
            "applicantId" in req.body &&
            req.body.applicantId !== existingRecord.applicantId
        ) {
            return res.json({
                status: "error",
                msg: "Should not change applicantId",
            });
        }

        await GeneralManagerRecordModel.findByIdAndUpdate(
            req.params.id,
            updateGeneralManagerRecord
        );
        res.json({ status: "ok", msg: "record updated" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ status: "error", msg: "record not updated" });
    }
};

const deleteGeneralManagerRecord = async (req, res) => {
    try {
        await GeneralManagerRecordModel.findByIdAndDelete(req.params.id);
        return res.json({ status: "ok", msg: "record deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ status: "error", msg: "record not deleted" });
    }
};

// functions
const calculateGradeSumByManager = (applicantManagerRecords, staffId) => {
    let gradeSum = 0;
    for (const record of applicantManagerRecords) {
        record.managers.forEach((manager) => {
            if (manager.staffId === staffId) gradeSum += manager.grade;
        });
    }
    return gradeSum;
};

module.exports = {
    seedApplicant,
    getAllApplicantsRecords,
    getApplicantRecordsByApplicantId,
    addNewApplicantRecord,
    updateApplicantRecord,
    updateApplicantManagerRecord,
    deleteApplicantRecord,
    seedManager,
    getAllManagersFinalRecords,
    getManagersFinalRecordsByApplicantId,
    addNewManagersRecord,
    updateManagerFinalRecord,
    deleteManagerFinalRecord,
    getAllGeneralManagersRecords,
    getGeneralManagersRecordsByApplicantId,
    addNewGeneralManagerRecord,
    updateGeneralManagerRecord,
    deleteGeneralManagerRecord,
    seedGeneralManager,
};
