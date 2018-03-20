import 'whatwg-fetch';

export default {
	retrieveWeatherDataByCityId
}

/*
	retrieves weather data based on city id
*/
function retrieveWeatherDataByCityId(cityId) {
	return fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&&&units=metric&&id=${cityId}`)
    	.then(response => response.json());
}