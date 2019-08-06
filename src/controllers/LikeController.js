const Dev = require('../models/Dev');

module.exports = {
  store(req, res) {
    console.log(req.params.devId);
    
    return res.json({ ok: true} );

  }
};