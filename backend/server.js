var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3005;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Import routes and give the server access to them.
// var routes = require("/");

// app.use("/",routes);

app.get("/server", function(req, res){
	console.log("we hit the home route")
	res.send("working")
})

app.listen(port, function() {
  console.log("Listening on port:%s", port);
});