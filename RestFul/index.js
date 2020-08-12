const express = require('express'); // CARREGAMOS MÓDULO
//const { read } = require('fs');
const consign = require('consign')
const bodyParser = require('body-parser');
const expressValidator  = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressValidator());

consign().include('routes').include('utils').into(app);//inclui TODAS as rotas do arquivo 'routes'

app.listen(4000, '127.0.0.1', ()=>{

    console.log('servidor rodando');

});