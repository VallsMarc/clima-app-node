const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=34dd8825fadfa5216c63f873a0b948b1&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}