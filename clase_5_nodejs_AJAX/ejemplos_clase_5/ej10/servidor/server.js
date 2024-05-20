const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.end('EN LA PAGINA PRINCIPAL');
});

app.get('/hola', function(req, res){
  res.end('HOLA MUNDO');
});

app.get('/formulario', function(req, res){
  console.log(req.query);
  res.end('gracias');
});

app.post('/formulario', function(req, res){
    console.log(req.body);
    res.end('gracias');
});

app.listen(3000, function () {
    console.log(`Server running at http://127.0.0.1:3000/`);
});