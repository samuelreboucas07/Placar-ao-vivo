const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/routes.js')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())


app.use((req, res, next) => {
	req.io = io;
	return next();
})

io.use (function (socket, next) { 
next (null, true); 
}); 


io.on('connection', function(socket){
	socket.on('match', function(IDroom) {
		const room = 'match-'+IDroom;
	    socket.join(room);
		console.log("Usuaŕio " +socket.id+ " Conectado a sala "+room)
  		});

	socket.on("supporter", function(data){
        io.in('match-0').emit( 'supporters', data)
        console.log("teste")
	});
});


//Gerador de log de requisição
app.use(morgan('combined'))


app.use('/matches', routes)

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


