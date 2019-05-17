const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema
const UserCollection = require('./User')

const Movie = new Schema({
    title:String,
    director: String,
    genre: String,
    releaseDate: Date,
    userId:[{
        type: Schema.Types.ObjectId, 
        ref: UserCollection
    }]
})

module.exports = mongoose.model('Movie',Movie)