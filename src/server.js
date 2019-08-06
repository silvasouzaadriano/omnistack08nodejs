const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.json({message: `Hello World! Eu sou o ${req.query.name}!`});
});

server.listen(3333);
