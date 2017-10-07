var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hola mundo</h1>');
});

app.listen(9000);

console.log("Servidor corriendo en  http://localhost:9000/");