const axios = require('axios')
const getWeather = async (req, res) => {
    const { input } = req.body
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=44a53e573f684b4784430731223012&q=${input}&days=2`)
        .then(response => res.json(response.data))
}

module.exports = {getWeather}