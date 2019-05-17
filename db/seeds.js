
const User = require('../models/User.js')

const Movie = require('../models/Movie.js')


let newUsers = [{
    name: 'Rickey',
    memberSince: new Date('June 01, 2000'),
    email: 'weems505@gmail.com'
},
{
    name: 'Ken',
    memberSince: new Date('November 29, 1999'),
    email: 'kw@gmail.com'
}]

let newMovies = [{
    title: 'Pet Semetary',
    director: 'Kevin Kolsch',
    genre: 'Horror',
    releaseDate: new Date('April 05, 2019')
},
{
    title: 'Long Shot',
    director: 'Jonathan Levine',
    genre: 'Comedy',
    releaseDate: new Date('May 03, 2019')
}
]

User.create(newUsers)
    .then(users => {
        console.log('Users', users)
    })

Movie.create(newMovies)
    .then(movie => {
        console.log('Movie', movie)
    })