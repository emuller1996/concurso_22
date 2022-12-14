const express = require('express')
const app = express();
const { connection } = require('./db');


const concursoRoutes = require('./routers/concurso.routes');

app.use(express.json())

app.use('/concurso',concursoRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


module.exports = app;