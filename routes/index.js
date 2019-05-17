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
router.get('/user/:userId', MovieController.index)
router.post('/user/:userId', MovieController.create)
router.get('/user/:userId/movie/:id', MovieController.show)
router.put('/user/:userId/movie/:id', MovieController.update)
router.delete('/user/:userId/movie/:id/delete', MovieController.delete)



module.exports = router
