const express = require("express");
const {
    seedApplicant,
    seedManager,
    seedGeneralManager,
    getAllApplicantsRecords,
    getApplicantRecordsByApplicantId,
    addNewApplicantRecord,
    updateApplicantRecord,
    updateApplicantManagerRecord,
    getAllManagersFinalRecords,
    getManagersFinalRecordsByApplicantId,
    updateManagerFinalRecord,
    deleteManagerFinalRecord,
    addNewManagersRecord,
    deleteApplicantRecord,
    getAllGeneralManagersRecords,
    getGeneralManagersRecordsByApplicantId,
    addNewGeneralManagerRecord,
    updateGeneralManagerRecord,
    deleteGeneralManagerRecord,
} = require("../controllers/applicantRecordController");

const { authManager, authGeneralManager } = require("../middleware/auth");

const router = express.Router();

router.get("/seedApplicant", authManager, seedApplicant);
router.get("/applicants", authManager, getAllApplicantsRecords);
router.get(
    "/applicants/:applicantId",
    authManager,
    getApplicantRecordsByApplicantId
);
router.post("/applicants", authManager, addNewApplicantRecord);
router.patch("/applicants/:id", authManager, updateApplicantRecord);
router.patch(
    "/applicants/managers/:pageNumber",
    authManager,
    updateApplicantManagerRecord
);
router.delete("/applicants/:id", authManager, deleteApplicantRecord);

router.get("/seedManager", authManager, seedManager);
router.get("/managers", authManager, getAllManagersFinalRecords);
router.get(
    "/managers/:applicantId",
    authManager,
    getManagersFinalRecordsByApplicantId
);
router.post("/managers", authManager, addNewManagersRecord);
router.patch("/managers/:id", authManager, updateManagerFinalRecord);
router.delete("/managers/:id", authManager, deleteManagerFinalRecord);

router.get("/seedGeneralManager", authManager, seedGeneralManager);
router.get(
    "/generalManagers",
    authGeneralManager,
    getAllGeneralManagersRecords
);
router.get(
    "/generalManagers/:applicantId",
    authGeneralManager,
    getGeneralManagersRecordsByApplicantId
);
router.post("/generalManagers", authManager, addNewGeneralManagerRecord);
router.patch(
    "/generalManagers/:id",
    authGeneralManager,
    updateGeneralManagerRecord
);
router.delete(
    "/generalManagers/:id",
    authGeneralManager,
    deleteGeneralManagerRecord
);

module.exports = router;
