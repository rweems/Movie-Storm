const User = require('../models/User.js')

const UserController = {
    index: (req, res) => {
        User.find().then((users) => {
            res.json(users)
        }).catch(err => { console.log(err) })
    },
    show: (req, res) => {
        User.findById(req.params.id)
            .then((user) => {
                res.json(user)
            }).catch(err => { console.log(err) })
    },
    create: (req, res) => {
       
       User.create(req.body)
        .then((newUser) => {
            res.json(newUser)
        }).catch(err => {
            console.log(err);
            
        })
    },
    update:(req,res) => {
        User.findByIdAndUpdate(req.params.id,req.body,{new: true})
        .then((updatedUser) => {
            res.json(updatedUser)
        }).catch(err => { console.log(err) })
    },
    delete: (req,res)=>{
        User.findByIdAndRemove(req.params.id)
        .then(()=> {
            res.redirect('/')
        }).catch(err => {
            console.log(err);
            
        })
    }
}

module.exports = UserController