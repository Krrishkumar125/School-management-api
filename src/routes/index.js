const express = require("express");

const SchoolController = require("../controllers/school-controller");
const requestValidator = require("../middlewares/request-validator");

const router = express.Router();

router.post(
  "/addSchool",
  requestValidator.validateCreateSchool,
  SchoolController.create
);
router.get(
  "/listSchools",
  requestValidator.validateListSchool,
  SchoolController.listSchools
);

module.exports = router;