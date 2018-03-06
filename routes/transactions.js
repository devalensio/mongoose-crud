var express = require('express');
var router = express.Router();
const { createData,showData,updateData,deleteData } = require('../controllers/transactionsController.js')

router.post('/create', createData)
router.get('/', showData)
router.put('/update/:id', updateData)
router.put('/delete/:id', deleteData)


module.exports = router
