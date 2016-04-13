var express = require('express');
var app = express();

var photo = '<img src="http://travelnoire.com/wp-content/uploads/2014/04/Lisbon-Portugal.jpg" alt="LISBOA" style="width:300px;">';

app.get('/', function (req, res) {
  res.send(photo);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
