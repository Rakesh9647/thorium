const axios = require('axios');

const getWeatherByPlace = async (request, response) => {
    try {
        const place = request.query.q;
        const appId = request.query.appId;
        const option = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appId=${appId}`
        }
        const dataRes = await axios(option);
        response.status(200).send({
            'temperature': dataRes.data.main.temp,
            'data': dataRes.data
        });
    } catch (error) {
        response.status(500).send({
            'Error: ': error.message
        });
    }
}

const sortTemperature = async (request, response) => {
    const collection = [];
    try {
        const appId = "62151a336dc9d1e2f9dd5767b734909c";
        const city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        for (let i = 0; i < city.length; i++) {
            const option = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appId=${appId}`
            }
            const dataRes = await axios(option);
            collection.push({'city': city[i],'temp': dataRes.data.main.temp });
        }

    } catch (error) {
        response.status(500).send({
            'Error: ': error.message
        });
    }
    const sortedData = collection.sort((x, y) => {
        return x.temp - y.temp;
    });
    response.status(200).send({
        'data': sortedData
    });
}

module.exports = {
    getWeatherByPlace: getWeatherByPlace,
    sortTemperature: sortTemperature
}