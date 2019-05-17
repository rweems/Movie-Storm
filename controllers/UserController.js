const User = require('../models/User.js')

const UserController = {
    index: (req, res) => {
        User.find({}).then((users) => {
            console.log(users)
            res.send(users)
        }).catch(err => { console.log(err) })
    },
    show: (req, res) => {
        User.findById(req.params.id)
            .then((user) => {
                res.json(user)
            }).catch(err => { console.log(err) })
    },
    create: (req, res) => {
       const newUser = req.body
       User.create(newUser)
        .then(() => {
            res.redirect('/')
        }).catch(err => {
            console.log(err);
            
        })
    },
    update:(req,res) => {
        User.findByIdAndUpdate(req.params.id,req.body,{new: true})
        .then(() => {
            res.redirect(`/${req.params.id}`)
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