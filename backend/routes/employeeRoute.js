const express = require('express');
const router = express.Router();
const{submit,details} = require('../controller/employeeController');

router.post('/submit',submit);
router.get('/details',details)


module.exports = router