// server.js

var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var User=require('./models/user')
mongoose.connect('mongodb://localhost/squealing-broccoli');

// configure app to use bodyParser()
// this will let us get the data from a a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// use /public to serve html for client side marionette application
app.use(express.static(__dirname + '/public'));

var port=process.env.PORT || 3000;

// register routes
app.use('/api',require('./routes/routes').router);

// start server
app.listen(port);
console.log('Magic happens on port '+port);
