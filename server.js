var express = require("express");
var mongojs = require("mongojs");

var axios = require("axios");
var cheerio = require("cheerio");


var app = express();

app.listen(3000, function() {
    console.log("App running on port 3000!");
  });