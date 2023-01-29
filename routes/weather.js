const express = require('express');
const router = express.Router();
const weatherControllers = require('../controllers/weather')

router.get('/:input', weatherControllers.getWeather)

module.exports = router