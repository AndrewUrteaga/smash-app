const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uri = `mongodb+srv://aurte002%40gmail.com:Hopesdie2%21@cluster0-z92ln.mongodb.net/test?retryWrites=true`;

mongoose.connect(uri, () => {console.log("Database connection established!")})

var userSchema = mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  id: mongoose.Schema.Types.ObjectId,
  gamertag: {
      type: String,
      required: true,
      unique: true
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

// .catch(err => console.log("Error connecting Database instance due to: ", err))
const Users = mongoose.model("users", userSchema)
// perform actions on the collection object

module.exports = Users;