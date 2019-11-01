const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/routes.js')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Separando rooms para diminuir a transição de dados desncessários, melhora a escalabilidade.
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use((req, res, next) => {
	req.io = io;
	next();
})

io.on('connection', function(socket){
	// if(socket.handshake.query.match){
	// 	socket.join('match-'+socket.handshake.query.match)
	// 	console.log("conectado a partida "+socket.handshake.query.match)
	// }
	socket.on('match', function(room) {
		console.log("Conectado a sala "+room)
	    socket.join(room);
	  		});
	console.log("Conectado a sala geral")
});


//Gerador de log de requisição
app.use(morgan('combined'))

app.use(cors())

app.use('/matches', routes)
app.use(express.json())

app.use((req, res, next) => {
	const err = new Error("Not Found")
	err.status = 404
	next(err)
})

// handle error
app.use((err, req, res, next) => {
	console.log(err)
	if(err.status === 404)
		res.status(404).json({message: "Recurso não encontrado."})
	else
		res.status(500).json({message: "Erro ao processar dados enviados."})
})

server.listen(3000, () => {
    console.log('Server started on port 3000');
});


