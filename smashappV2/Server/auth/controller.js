let signToken = require('./auth').signToken;
let Users = require('../db/index')


exports.signin = function(req, res, next) {
  // req.user will be there from the middleware
  // verify user. Then we can just create a token
  // and send it back for the client to consume
  var token = signToken(req.user.id);
  res.json({token: token})
};

exports.createNewUser = function(req, res, next) {
  Users.create(req.body)
  .then(user => {
      var token = signToken(user.id);
      res.json({token: token})

  }, err => {next(err)}
  )
}

