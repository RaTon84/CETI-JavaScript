const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.sendFile('./pages/index.html', {root: __dirname });
});

app.get('/process', function(req, res){
  if (req.query.destination === 'pc') {
    res.sendFile('./pages/punta_cana.html', {root: __dirname });
  }
  else if (req.query.destination === 'ala') {
    res.sendFile('./pages/alaska.html', {root: __dirname });
  }
  else if (req.query.destination === 'bsas') {
    res.sendFile('./pages/buenos_aires.html', {root: __dirname });
  }
  else {
    res.sendFile('./pages/index.html', {root: __dirname });
  }
});

app.listen(3000, function () {
    console.log(`Server running at http://127.0.0.1:3000/`);
});