const Movie = require('../models/Movie.js')

const MovieController = {
    index:(req,res) => {
        Movie.find().then((movies) => {
            res.json(movies)
        }).catch(err => console.log(err))
    },
    show:(req,res) => {
        Movie.findById(req.params.id).then((movie) => {
            res.json(movie)
        }).catch(err => console.log(err))
    },
    create: (req, res) => {
        
        Movie.create(req.body)
         .then((newMovie) => {
             res.json(newMovie) 
         }).catch(err => console.log(err))
     },
     update:(req,res) => {
         Movie.findByIdAndUpdate(req.params.id,req.body,{new: true})
         .then((updatedMovie) => {
             res.json(updatedMovie)
         }).catch(err => console.log(err))
     },
     delete: (req,res)=>{
         Movie.findByIdAndRemove(req.params.id)
         .then(()=> {
             res.redirect('/')
         }).catch(err => console.log(err)
             
         )
     }
}

module.exports = MovieController