var express = require('express');
var path = require('path');
var app = express();
var index = require('./routers/index.js');
var students = require('./routers/students.js');
// var bodyParser = require('body-parser');



app.use(express.static('public'));

// app.use(bodyParser.json());


app.use('/', index);
app.use('/students', students);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log("Chillin on port ", port);
});
