const {remove} = require('../controller/removeEmployeeController');

const express = require('express');
const router = express.Router();

router.post('/remove',remove)

module.exports = router