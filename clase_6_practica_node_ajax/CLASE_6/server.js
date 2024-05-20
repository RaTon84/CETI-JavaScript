const express = require('express');
const app = express();


app.get('/ping', function (req, res) {    
    res.sendFile('./pages/endpoint.html', {root: __dirname });    
  });

app.listen(3000, function () {
    console.log(`Server running at http://127.0.0.1:3000/`);
  });