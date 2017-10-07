var express = require('express');
var app = express();

var api = require('./api.js');

var code_private = "324085";
var turno = 0;

api.getTable()
    .then(function(response) {
        turno = response.data.turno;
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    });

app.listen(9000);

console.log("Servidor corriendo en  http://localhost:9000/");