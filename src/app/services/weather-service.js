import 'whatwg-fetch';

export default {
	retrieveWeatherDataByCityId
}

function retrieveWeatherDataByCityId(cityId) {
	return fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&&id=${cityId}`)
    	.then(response => response.json())
    	.then(rjson => console.log(rjson))
}