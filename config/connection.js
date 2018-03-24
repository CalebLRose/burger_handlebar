var mysql = require("mysql");

// mysql://b55ae129f2b367:6b44489d@us-cdbr-iron-east-05.cleardb.net/heroku_cebe177fc141cc9?reconnect=true

var connection = mysql.createConnection({
	host: "us-cdbr-iron-east-05.cleardb.net",
	user: "b55ae129f2b367",
	password: "6b44489d",
	database: "heroku_cebe177fc141cc9"
});

connection.connect(function(err){
	if (err) {
		console.error("error in connection: " + err.stack);
		return;
	};
	console.log("connection succesful: " + connection.threadId);
});

module.exports = connection;