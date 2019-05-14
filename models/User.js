const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const User = new Schema({
    name:String,
    memberSince: Date,
    email: String
})

module.exports = mongoose.model('User',User)