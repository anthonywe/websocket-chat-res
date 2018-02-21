var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(2000, function (){
  console.log('listening to the port requested');
});

//static files
app.use(express.static('public'));


//socket setup

var io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection');

  socket.on('chat',function(data){
    io.sockets.emit('chat', data);
  });
  socket.on('typing', function(data) {
    socket.broadcast.emit('typing', data)
  });
});
