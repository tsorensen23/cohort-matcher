var express = require('express');
var app = express();
var userController = require('./database/userController');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://victoria:abc123@ds043962.mongolab.com:43962/coffee-project');

app.use(express.static(__dirname + "./../"));
app.use(bodyParser.json());
app.get('/profile', userController.getData);
app.post('/profile', userController.postUserProfile);

app.listen(process.env.PORT || 3000);