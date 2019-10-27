// Definindo banco baseado em json
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname+'/../data/db.json')
const db = low(adapter)

module.exports = {
	async store(req, res){
		const matches = db.get('matches').value()
		// req.io.emit("match", matches)
		res.json({status: "sucess", data: matches})
	},

	async update(req, res){
		await db.set('matches['+req.params.idMatch+'].teamA.score',
		parseInt(req.body.goalTeamA)).write()
		await db.set('matches['+req.params.idMatch+'].teamB.score',
		parseInt(req.body.goalTeamB)).write()
		const matches = db.get('matches').value()
		req.io.emit("score", 
			{match: req.params.idMatch,
			 matches: matches
			})
		res.json({status: "success"})
	},

	async updateSupporters(req, res){
		
	}


}
