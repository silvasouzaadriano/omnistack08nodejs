const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.send(`Hello World. Eu sou o ${req.query.name}!`);
});

server.listen(3333);
