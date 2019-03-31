// contactController.js
// Import contact model
var Users = require('./usersModel');

exports.params = function(req, res, next, id){
    Users.findById(id)
        .exec()
        .then(function(user) {
            if (!user) {
                next(new Error('No user with that Id'));
            } else {
                req.user = user;
                next();
            }
        }, function(err) {
            next(err);
        })
    };

exports.get = function(req, res, next){
    Users.find({})
        .then(function(users){
            res.json(users);
        }, function(err){
            next(err);
        })
};

exports.getOne = function(req, res, next) {
    var user = req.user;
    res.json(user)
};

exports.put = function(req, res, next) {
    var user = req.user; // old
    var update = req.body; // new
    // Does this fucking make sense?
    user = Object.assign(user,update)
    
    user.save(function(err, saved) {
        if (err){
            next(err);
        } else {
            res.json(saved)
        }
    })
};

exports.post = function(req, res, next) {
    var newUser = req.body;

    Users.create(newUser)
    .then(function(user) {
        res.json(user);
    }, function(err) {
        next(err);
    })
};

exports.delete = function(req, res, next) {
    req.user.remove(function(err, removed) {
        if(err){
            next(err);
        } else {
            res.json(removed)
        }
    });
};