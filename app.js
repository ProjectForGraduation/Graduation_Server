var express = require('express');
var app = express();

var location = require('./routes/location.js');
app.use('/', location);


app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
