const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({message: `Hello World! Eu sou o ${req.query.name}!`});
});

module.exports = routes;