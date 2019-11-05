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
		// let supporterA = db.get('matches['+req.params.idMatch+'].teamA.supporters').value()
		// let supporterB = db.get('matches['+req.params.idMatch+'].teamB.supporters').value()
		// if(req.params.team === 'teamA'){
			// supporterA = supporterA + 1
			const newPosts = db.get('matches[0].teamA.supporters').value()
			console.log(newPosts)
			db.set('matches[0].teamA.supporters', newPosts).write()
		// }
		console.log(req.params.idMatch)
		// else{
			// supporterB = supporterB + 1
			// db.set('matches['+req.params.idMatch+'].teamB.supporters',
			// parseInt(1)).write()
		// }
		// let supportersTotal = supporterA + supporterB
		// let porcentagemTeamA;
		// if(supportersTotal > 0){
			// porcentagemTeamA = ((supporterA/supportersTotal)*100)
		// }
		// req.io.sockets.in('match-'+req.params.idMatch).emit('supporters', porcentagemTeamA)
		// req.io.emit("teste", porcentagemTeamA)
		// res.json({status: porcentagemTeamA})
		// console.log(porcentagemTeamA)
        // await req.io.in('match-0').emit( 'supporters', porcentagemTeamA)
        res.json({s:"s"})

	}


}
