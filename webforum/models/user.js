var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: String,
    password: String,
    email: String

});

userSchema.methods.hashPwd = function(password){
     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
userSchema.methods.compareHash = function(password){
     return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userSchema);
