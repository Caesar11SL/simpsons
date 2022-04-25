const mongoose = require('../db/connection');

const SimpsonSchema = new mongoose.Schema({
    character: {
        type: String
    },
    quote: {
        type: String
    },
    image: {
        type: String
    },
    characterDirection: {
        type: String
    },
    favorite: {
        type: Boolean
    }

    
})

const Simpson = mongoose.model('Simpson', SimpsonSchema)

module.exports = Simpson;