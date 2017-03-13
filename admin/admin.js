var q = require('q');
var util    = require('util');
var dateFormat = require('dateformat');
var mysqli = require('./mysql');

exports.selectAllValue = function(req,mysql,q)
{
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli, 5);
    var defered = q.defer();
    escape_data =[];
    query =  mysql.query(strQuery,escape_data,defered.makeNodeResolver());
    query.on('error',function(err){
        throw err;
    })
    return defered.promise;
}