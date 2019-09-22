const express = require('express')
const router = express.Router()
const matchController = require('./../controllers/matchController')

router.get('/', matchController.store)

module.exports = router;