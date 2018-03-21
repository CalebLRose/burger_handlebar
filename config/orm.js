var connection = require("./connection.js");

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table;
		connection.query(queryString, function(err,res){
			if (err) throw err;
			cb(res);
		});
	},
	insertOne: function(table, col, val, cb) {
		var queryString = "INSERT INTO " + table;
		queryString += " (" + col + ") ";
		queryString += "VALUES (" + val + ") ;"; 
		connection.query(queryString, function(err,res){
			if(err) throw err;
			cb(res);
		});
	},
	updateOne: function(table, colVal, condition, cb){
		var queryString = "UPDATE " + table;
		queryString += "SET " + colVal;
		queryString += " WHERE id=" + condition + ";"; 
		connection.query(queryString, function(err,res){
			if(err) throw err;
			cb(res);
		});
	}
};

module.exports = orm;
