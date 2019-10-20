const express = require('express')
const router = express.Router()
const matchController = require('./../controllers/matchController')

router.get('/', matchController.store)
router.post('/updateResult/:idMatch', matchController.update)
module.exports = router;