const express = require('express')
const router = express.Router()


const UserController = require('../controllers/UserController.js')
const MovieController = require('../controllers/MovieController.js')

//user controller
router.get('/user', UserController.index)
router.post('/user', UserController.create)
router.get('/user/:id', UserController.show)
router.put('/user/:id', UserController.update)
router.delete('/user/:id/delete', UserController.delete)

//movie controller
router.get('/movie', MovieController.index)
router.post('/movie', MovieController.create)
router.get('/movie/:id', MovieController.show)
router.put('/movie/:id', MovieController.update)
router.delete('/movie/:id/delete', MovieController.delete)



module.exports = router
