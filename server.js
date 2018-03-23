var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("public"));
// client side public folders 
app.use(bodyParser.urlencoded({extended:false}));
// handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
// router
var routes = require("./controllers/burgers_controller.js");
app.use(routes);
app.listen(PORT,function(){
	console.log("App listening on port: " + PORT);
});