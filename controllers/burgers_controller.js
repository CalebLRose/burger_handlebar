var express = require("express");
var router = express.Router();
var burgerMaster = require("../models/burger.js");

router.get("/", function(req, res){
	res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
	burgerMaster.getAll(function(burgerInfo) {
		console.log(burgerInfo);
		res.render("index", {burgerInfo: burgerInfo});
	});
});

router.post("/burgers/create", function(req, res){
	burgerMaster.makeOne(req.body.burger_name, function(newBurger){
		console.log(newBurger);
		res.redirect("/");
	});
});

router.put("/burgers/:id/:condition", function(req,res){
	burgerMaster.eatOne(req.params.id, req.params.condition, function(eaten){
		console.log(eaten);
		res.sendStatus(200);
	});
});

module.exports = router;