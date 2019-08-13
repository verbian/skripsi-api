var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    fullName: String,
    spesialisasi: String,
    bio: String,
    avatar: String,
    isAdmin: { type: Boolean, default: false },
    isAhli: { type: Boolean, default: false} 
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

