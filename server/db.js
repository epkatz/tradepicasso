var mysql = require('mysql');
var config = require('config');

var dbConfig = config.get('Dev.dbConfig');
var pool = mysql.createPool(dbConfig);

var getPlayer = function () {
    pool
        .query('Select PlayerId, Name From Player', function (error, results, fields) {
            if (error) 
                throw error;
            console.log('The solution is: ', results[0].Name);
        });
}


exports.getPlayer = getPlayer;