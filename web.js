var express = require('express');
var fs      = require('fs');

var app = express.createServer(express.logger());

var readIndex = function(){
    var content = fs.readFileSync('index.html', 'utf8');
    var buf = new Buffer(content, 'utf8');
    return buf.toString('utf8');
}

app.get('/', function(request, response) {
  response.send(readIndex()); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

