const {update} = require('../controller/updateEmployeeController');

const express = require('express');
const router = express.Router();

router.post('/update',update);

module.exports = router