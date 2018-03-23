var orm = require("../config/orm.js");

var burgerMaster = {
	getAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	makeOne: function(name, cb){
		orm.insertOne("burgers", "burger_name", name, cb);
	},
	eatOne: function(id, con, cb){
		orm.updateOne("burgers", id, con, cb);
	}
};

module.exports = burgerMaster;