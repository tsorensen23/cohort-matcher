var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://victoria:abc123@ds043962.mongolab.com:43962/coffee-project');

app.use(express.static(__dirname + "./../"));

app.listen(process.env.PORT || 3000);