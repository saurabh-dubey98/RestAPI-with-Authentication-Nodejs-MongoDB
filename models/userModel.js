const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Your name is requried"]
    },
    email: {
        type: String,
        requried: [true, "Email is required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is requried."]
    }
}, { timestamps: true })

module.exports = mongoose.model(userSchema);