// var express = require("express");
// var bodyParser = require("body-parser");
// var logger = require("morgan");
// var mongoose = require("mongoose");
// var axios = require("axios");


// // Require all models
// var db = require("./backend/models");

// var port = process.env.PORT || 3005;

// var app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("client/build"));

// app.use(bodyParser.urlencoded({ extended: false }));

// // Import routes and give the server access to them.
// // var routes = require("/");

// app.get('/', function (req, res) {
//     res.render('index');
// });

// // app.use("/",routes);
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/dndCharacter",
//   {
//     useMongoClient: true
//   }
// );

// app.get("/server", function(req, res){
// 	console.log("we hit the home route")
// 	// res.render('index')
// })

// app.listen(port, function() {
//   console.log("Listening on port:", port);
// });

// app.get("/api/race/:race", (req,res) =>{
//   console.log(req.params.race)
// // do a DB query on req.params.race
// })

// app.get("/api/class/:class", (req,res) =>{
//   console.log(req.params.class)
// // do a DB query on req.params.class
// })