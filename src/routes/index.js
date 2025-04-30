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
router.get("/info", (req, res) => {
  res.send({
    message: "Welcome to the School Management Backend API!",
    routes: {
      "/addSchool": {
        method: "POST",
        description: "Add a new school",
        body: {
          name: "String - name of the school",
          address: "String - address of the school",
          latitude: "Number - latitude coordinate",
          longitude: "Number - longitude coordinate",
        },
      },
      "/listSchools": {
        method: "GET",
        description: "List schools sorted by proximity to the user",
        body: {
          latitude: "Number - user's latitude coordinate",
          longitude: "Number - user's longitude coordinate",
        },
      },
    },
  });
});

module.exports = router;
