const Movie = require('../models/Movie.js')

const MovieController = {
    index:(req,res) => {
        Movie.find().then((movies) => {
            res.json(movies)
        }).catch(err => console.log(err))
    },
    show:(req,res) => {
        Movie.findById(req.params.id).then(movie => {
            res.json(movie)
        }).catch(err => console.log(err))
    },
    create: (req, res) => {
        const newMovie = req.body
        Movie.create(newMovie)
         .then(() => {
             res.json(newMovie) //go to userId
         }).catch(err => console.log(err))
     },
     update:(req,res) => {
         Movie.findByIdAndUpdate(req.params.id,req.body,{new: true})
         .then((updatedMovie) => {
             res.json(updatedMovie)// go to userId
         }).catch(err => console.log(err))
     },
     delete: (req,res)=>{
         Movie.findByIdAndRemove(req.params.id)
         .then(()=> {
             res.redirect('/') // go to userId
         }).catch(err => console.log(err)
             
         )
     }
}

module.exports = MovieController