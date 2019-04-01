// var mongoose = require('mongoose');
// var bcrypt = require('bcrypt');
// var Users = require('../../db/index');

// // Middleware in order to encrpt plaintext pass if changed
// userSchema.pre('save', function(next) {
//     if (!this.isModified('password')) return next();
//     this.password = this.encryptPassword(this.password);
//     next();
// });

// userSchema.methods = {
//     authenticate: function(plainPassword) {
//         return bcrypt.compareSync(plainPassword, this.password);
//     },
//     encryptPassword: function(plainPassword) {
//         if (!plainPassword) {
//             return ''
//         } else {
//             var salt = bcrypt.genSaltSync(10);
//             return bcrypt.hashSync(plainPassword, salt)
//         }
//     }
// };

// module.exports = mongoose.model('user', userSchema);
