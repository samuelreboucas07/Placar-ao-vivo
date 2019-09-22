// Definindo banco baseado em json
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname+'/../data/db.json')
const db = low(adapter)

module.exports = {
	async store(req, res){
		const matches = db.get('matches').value()
		req.io.emit("match", matches)
		res.json({status: "sucess", data: matches})
	}
}
