var orm = require("../config/orm.js");

var burgerMaster = {
	getAll: function(cb){
		orm.selectAll("heroku_cebe177fc141cc9", function(res){
			cb(res);
		});
	},
	makeOne: function(name, cb){
		orm.insertOne("heroku_cebe177fc141cc9", "burger_name", name, cb);
	},
	eatOne: function(id, con, cb){
		orm.updateOne("heroku_cebe177fc141cc9", id, con, cb);
	}
};

module.exports = burgerMaster;