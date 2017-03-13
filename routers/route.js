var q = require('q');
var fs = require('fs');
var express = require('express');
var reload = require('reload');
var sprintf = require('sprintf').sprintf;
var async = require('async');
var app = express.Router();
var dateFormat = require('dateformat');
var mysqli = require('../admin/mysql');

app.post('/save', function(req, res)
{
   
   console.log(req.body);
   $mysqli = {};
   strQuery = mysqli.mysqli($mysqli,'testdb');
   var defered = q.defer();
   escape_data =[req.body.Id,req.body.UserName,req.body.Email,req.body.Phone];
   console.log(escape_data);
   query =  mysql.query(strQuery,escape_data,defered.makeNodeResolver());

   console.log(query.sql);

   query.on('error',function(err){
       throw err;
   });

   return defered.promise;
});

app.get('/users/getData',function(req,res)
{
	var admin = require('../admin/admin');
	console.log(config.mysql);
	q.all([admin.selectAllValue(req,config.mysql,q)]).then(function(results){
		res.json(results[0][0]);
	//	$arr['feedback_list_array'] = results[0][0];
	});
});

module.exports = app;