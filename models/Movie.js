const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Movie = new Schema({
    title:String,
    director: String,
    genre: String,
    releaseDate: Date
})

module.exports = mongoose.model('Movie',Movie)