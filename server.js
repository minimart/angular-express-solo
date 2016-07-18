var express = require('express');
var path = require('path');
var app = express();
var index = require('./routers/index.js');
var students = require('./routers/students.js');


// to get our public static pages
app.use(express.static('public'));


// routers list
app.use('/', index);
app.use('/students', students);

// actual server listen function
var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log("Chillin on port ", port);
});
