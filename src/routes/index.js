const express = require('express');

const SchoolController = require('../controllers/school-controller');

const router = express.Router();

router.post('/addSchool' , SchoolController.create);

module.exports = router;