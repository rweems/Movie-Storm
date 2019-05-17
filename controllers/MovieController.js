const Movie = require('../models/Movie.js')

const MovieController = {
    index:(req,res) => {
        Movie.find({}).then(movies => {
            res.send(movies)
        }).catch(err => console.log(err))
    },
    show:(req,res) => {
        Movie.findById(req.params.id).then(movie => {
            res.send(movie)
        }).catch(err => console.log(err))
    },
    create: (req, res) => {
        const newMovie = req.body
        User.create(newMovie)
         .then(() => {
             res.redirect('/') //go to userId
         }).catch(err => {
             console.log(err);
             
         })
     },
     update:(req,res) => {
         User.findByIdAndUpdate(req.params.id,req.body,{new: true})
         .then(() => {
             res.redirect(`/movie/${req.params.id}`)// go to userId
         }).catch(err => { console.log(err) })
     },
     delete: (req,res)=>{
         User.findByIdAndRemove(req.params.id)
         .then(()=> {
             res.redirect('/') // go to userId
         }).catch(err => {
             console.log(err);
             
         })
     }
}

module.exports = MovieController