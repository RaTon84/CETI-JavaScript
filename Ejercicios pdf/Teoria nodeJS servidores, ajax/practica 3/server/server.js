const express = require('express');
const app = express();


app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/hi', function (req,res){
  res.send('hola en ingles')
});
//app.listen(3000);

app.use(express.static('public'));

app.get('/submit', (req, res) => {
  const texto = req.query.input;
  //input es el valor del name en html
  res.send(texto);
});

app.listen(3000, function () {
  console.log(`Server running at http://127.0.0.1:3000/`);
});