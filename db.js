// db.js
var mongoose = require('mongoose');
// pour une base de donnee local
var databaseUri = 'localhost:27017';
mongoose.connect('mongodb://' + databaseUri);