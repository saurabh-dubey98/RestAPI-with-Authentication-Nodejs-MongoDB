const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movieName: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('movie', movieSchema);