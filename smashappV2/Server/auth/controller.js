var User = require('../users/usersModel');
var signToken = require('./auth').signToken;

exports.signin = function(req, res, next) {
  // req.user will be there from the middleware
  // verify user. Then we can just create a token
  // and send it back for the client to consume
var token = signToken(req.user._id);
res.json({token})
};

exports.register = function(req, res, next) {
  // create user 
  // signin 
  sigin(req, res, next)
}
