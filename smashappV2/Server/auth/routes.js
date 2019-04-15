let router = require('express').Router();
let controller = require('./controller');
let verifyUser = require('./auth').verifyUser



// check
// the password and username match what is in the DB
router.post('/signin', verifyUser(), controller.signin);
router.post('/register', controller.createNewUser);

module.exports = router;
