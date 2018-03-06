var express = require('express');
var router = express.Router();
const { createData,showData } = require('../controllers/customersController.js')

router.post('/create', createData)
router.get('/', showData)


module.exports = router
