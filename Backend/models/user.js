const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    displayName: String,
    username: String,
    password: String,
    dob: Date,
});

module.exports = mongoose.model('User', UserSchema);
