const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ddpjg.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros. Ex: /autores?nome=Elton)
//req.params = Acessar route params (para edição, delete. Ex: /autores/1)
//req.body = Acessar corpo da requisição (para criação, edição. Ex: POST)

app.use(express.json());
app.use(routes);

app.listen(3333);