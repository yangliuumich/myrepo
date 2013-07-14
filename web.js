var express = require("express");
var fs = require("fs");
var app = express.createServer(express.logger());

var link = function(pagename){
  var buffer = fs.readFileSync(pagename);
  return buffer;
};

app.get('/',function(request, response){
    response.send(link("index.html").toString());
});

app.get('/minesweeper', function(request, response){
    response.send(link("minesweeper.html").toString());
});


app.get('/snake', function(request, response){
    response.send(link("snake.html").toString());
});


app.get('/pong', function(request, response){
    response.send(link("pong.html").toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Listening on " + port);
});
