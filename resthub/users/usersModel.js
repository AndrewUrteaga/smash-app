var mongoose = require('mongoose');

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
    winRatio: Number
});

module.exports = mongoose.model('user', userSchema);
