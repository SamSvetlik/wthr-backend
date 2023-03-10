const pool = require('../sql/connection')
const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users')

router.get('/', userControllers.list)

router.get('/:email', userControllers.show)

router.post('/', userControllers.create)

router.put('/:id', userControllers.update)

router.delete('/:id', userControllers.remove)

module.exports = router;