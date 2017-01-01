var express = require("express");
var favicon = require('serve-favicon');
var morgan = require("morgan");
var path = require("path");
var request = require("request");
//require("request-debug")(request);

var app = express();

app.use(morgan("combined", {
    skip: function(req, res) {
        return res.statusCode < 400;
    }
}));

// TODO: Move all static files into "public" folder
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(__dirname + "/public/img/favicon.ico"));

app.use(function(req, res, next) {
    console.log("/" + req.method);
    next();
});

app.get("/api/quotes/connect", function(req, res) {
    request("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
        function(err, body) {
            if(err) {return err;}
            if(!err && res.statusCode == 200) {
                res.send(body);
            }
    });
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