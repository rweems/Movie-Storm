
const User = require('../models/User.js')

const Movie = require('../models/Movie.js')

User.deleteMany().then(()=>{
    const rickey = new User({name:'Rickey',memberSince:new Date('June 01, 2000'), email:'weems505@gmail.com'})
    return rickey.save()
}).then(()=> {
    const ken = new User({name:'Ken',memberSince:new Date ('November 29, 1999'), email:'kw@gmail.com'})
    return ken.save()
})

Movie.deleteMany().then(() =>{
    const petSemetary = new Movie({title:'Pet Semetary',director:'Kevin Kolsch',genre:'Horror',releaseDate:new Date('April 05, 2019')})
    return petSemetary.save()
}).then(()=> {
    const longShot = new Movie({title:'Long Shot',director:'Jonathan Levine',genre:'Comedy',releaseDate: new Date('March 09, 2019')})
    return longShot.save()
})