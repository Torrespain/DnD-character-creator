var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");


// Require all models
var db = require("./backend/models");


// console.log(db)
var port = process.env.PORT || 3005;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/dnd", {
//   useMongoClient: true
});

// app.use("/",routes);

app.get("/classes/:classes", function(req, res){
	console.log("we hit the home route")
	// console.log('db', db);
  // console.log('dnd', db.dnd)
	db.classes.find({})
	// res.send("working")
	.then(function(Classes) {
		// If any Books are found, send them to the client
		console.log(Classes)
		res.json(Classes);
	  })
	  .catch(function(err) {
		// If an error occurs, send it back to the client
		console.log("err", err);
		res.json(err);
	});
})

app.get("/races/:race", function(req, res){
	console.log("we hit the home route")
	// console.log('db', db);
  // console.log('dnd', db.dnd)
	db.races.find({})
	// res.send("working")
	.then(function(race) {
		// If any Books are found, send them to the client
		console.log(race)
		res.json(race);
	  })
	  .catch(function(err) {
		// If an error occurs, send it back to the client
		console.log("err", err);
		res.json(err);
	});
});

//conecting to Heroku
var databaseUrl = 'mongodb://localhost/dnd';

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.Promise = Promise;
  mongoose.connect(databaseUrl);
};

mongoose.Promise = Promise;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dnd";
mongoose.connect(MONGODB_URI);
var database = mongoose.connection;


// app.post("/create", function(req, res){
// 	console.log(req.body);
// 	db.classes.create(req.body).then(function(response){
// 		console.log("created", response);
// 	}).catch(function(err){
// 		console.log("err", err);
// 	})
// });

// app.post("/races", function(req, res){
// 	console.log(req.body);
// 	db.races.create(req.body).then(function(response){
// 		console.log("created", response);
// 	}).catch(function(err){
// 		console.log("err", err);
// 	})
// });

app.listen(port, function() {
  console.log("Listening on port:%s", port);
});