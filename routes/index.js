const express = require('express')
const router = express.Router()


const UserController = require('../controllers/UserController.js')
const MovieController = require('../controllers/MovieController.js')

//user controller
router.get('/', UserController.index)
router.post('/', UserController.create)
router.get('/:id', UserController.show)
router.put('/:id', UserController.update)
router.delete('/:id/delete', UserController.delete)

//movie controller
router.get('/:userId', MovieController.index)
router.post('/:userId', MovieController.create)
router.get('/:userId/movie/:id', MovieController.show)
router.put('/:userId/movie/:id', MovieController.update)
router.delete('/:userId/movie/:id/delete', MovieController.delete)



module.exports = router
