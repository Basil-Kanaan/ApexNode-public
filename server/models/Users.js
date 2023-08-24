const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Additional user data fields can be added here
});

module.exports = mongoose.model('User', userSchema);
