
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

/*const app = express();
const server = require('http').Server('app');
const io  = require('socket.io')(server);*/

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};


// Connection between backend and frontend
io.on('connection', socket => {
  
  /*console.log('Nova conexão', socket.id);
  
  socket.on('hello', message => {
    console.log(message)
  })

  setTimeout(() => {
    socket.emit('world', {
      message: 'Omnistack'
    })
  },5000)*/

  const { user } = socket.handshake.query;
  
  //console.log(user, socket.id);

  connectedUsers[user] = socket.id;

});

mongoose.connect('mongodb+srv://omnistack:omnistack19@cluster0-wif1w.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

//Middleware to Controller watch the users connected t give the match
app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;
  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);