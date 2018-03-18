var sql = require("mysql");

var connection = mysql.creatConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "burgers_db"
});

connection.connect(function(err){
	if (err) {
		console.error("error in connection: " + err.stack);
		return;
	};
	console.log("connection succesful: " + connection.threadId);
});

module.exports = connection;