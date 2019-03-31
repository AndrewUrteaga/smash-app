var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: mongoose.Schema.Types.ObjectId,
    gamertag: {
        type: String,
        required: true
    },
    picture: String,
    main: String,
    secondary: String,
    gender: String,
    wins: Number,
    loses: Number,
    winRatio: Number,
    username: {
        type: String,
        required: true,
        unique: true    
    },
    password: {
        type: String,
        required: true
    }
});
// Middleware in order to encrpt plaintext pass if changed
userSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();
    this.password = this.encryptPassword(this.password);
    next();
});

userSchema.methods = {
    authenticate: function(plainPassword) {
        return bcrypt.compareSync(plainPassword, this.password);
    },
    encryptPassword: function(plainPassword) {
        if (!plainPassword) {
            return ''
        } else {
            var salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(plainPassword, salt)
        }
    }
};

module.exports = mongoose.model('user', userSchema);
