const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const uri = 'mongodb+srv://Drew:Hopesdie2@cluster0-z92ln.mongodb.net/Smash?retryWrites=true';

mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser:true })
    .then(() => {
        console.log("Database connection established!")})
    .catch( err => {console.log(err)})


var userSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  //id: mongoose.Schema.Types.ObjectId,
  gamertag: {
      type: String,

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
    
      unique: true    
  },
  password: {
      type: String,
      
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
module.exports = mongoose.model('users', userSchema)
// perform actions on the collection object

