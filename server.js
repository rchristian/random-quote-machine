var express = require("express");
var morgan = require("morgan");
var path = require("path");
var request = require("request");

var app = express();

app.use(morgan("combined", {
    skip: function(req, res) {
        return res.statusCode < 400;
    }
}));

// TODO: Move all static files into "public" folder
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
    console.log("/" + req.method);
    next();
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("*", function(req, res) {
    res.status(404).send("Not Found");
});

app.listen(8080, function() {
    console.log("Listening on port 8080");
});
