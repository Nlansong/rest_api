const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    releaseDate:{
        type: Date,
        default: Date.now().toLocaleString(),
    },
    category:{
        type: String,
    },
    reviews:{
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('movie', movieSchema)
