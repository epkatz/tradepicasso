var mysql = require('mysql');
var config = require('config');

var dbConfig = config.get('Customer.dbConfig');
var pool  = mysql.createPool(dbConfig);

