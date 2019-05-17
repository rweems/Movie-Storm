const express = require('express')
const router = express.Router()


const UserController = require('../controllers/UserController.js')

router.get('/', UserController.index)
router.post('/', UserController.create)
router.get('/:id', UserController.show)
router.put('/:id', UserController.update)
router.delete('/:id/delete', UserController.delete)



module.exports = router
