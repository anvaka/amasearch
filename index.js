amazon = require('amazon-product-api');
var client = amazon.createClient({
    awsId: process.env.AWS_ID,
    awsSecret: process.env.AWS_SECRET,
    awsTag: "anvaka"
});

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.header('Access-Control-Allow-Origin', '*');
  client.itemSearch(req.query).then(function (searchResults) {
    res.send(searchResults);
  },function (err) {
    res.send(err);
  });
});

var port = process.env.PORT || 3001;
app.listen(port);
console.log('Amazon API listening on port ' + port);
