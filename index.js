const express = require('express')
const morgan = require('morgan')
const router = require('./routes/routes.js')
const app = express()

//Gerador de log de requisição
app.use(morgan('combined'))

app.use('/', router)
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

const server = app.listen(3000)
console.log("Servidor de teste nodejs.")

