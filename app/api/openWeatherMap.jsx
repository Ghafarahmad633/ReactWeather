var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=49afcf2c8e3ea9c684e6335dbcea66c6&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            debugger;
            if(res.data.message &&res.data.cod){
                throw new Error(res.data.message)
            }
            else{
                return res.data.main.temp
            }

        },function (res) {
            throw new Error(res.data.message)
        })
    }
}
