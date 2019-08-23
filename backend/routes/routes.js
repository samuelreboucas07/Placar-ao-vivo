const express = require('express')
const router = express.Router()

// Definindo banco baseado em json
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname+'/../data/db.json')
const db = low(adapter)


router.get('/', (req, res, next) => {
	console.log("testeaaaaaaaaaa")
	const matches = db.get('matches').value()
	res.send(matches)
})

module.exports = router;