import React, {Component} from 'react';
import Menu from '../menu/menu';
import WeatherCard from '../weather-card/weather-card';
import WeatherService from '../../services/weather-service';
import cities from '../../data/cities';
import './weather-app.scss'

class WeatherApp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cities: this.props.cities,
			selectedCity: this.props.selectedCity || {},
		};
	}

	componentDidMount() {
		this.init();
	}

	init = () => {
		let {selectedCity} = this.state;

		if(!selectedCity.id) {
			selectedCity = {
				id: this.getFirstCityId(cities),
				data: {}
			};
		}
		
		this.updateSelectedCityWeatherData(selectedCity.id);
	}
	
	getFirstCityId = (cities) => {
		return cities.keys().next().value;
	}

	updateSelectedCityWeatherData = (cityId) => {
		WeatherService
			.retrieveWeatherDataByCityId(cityId)
			.then(rjson => {
				this.setState({
					selectedCity: {id: cityId, data: rjson}
				});
			})
			.catch(err => console.error(err));
	}

	onClickCityHandler = (cityId) => {
		this.updateSelectedCityWeatherData(cityId);
	}

	isSelected = (id) => {
		return this.state.selectedCity.id === id;
	}

	render() {
		let {cities, selectedCity} = this.state;

		return (
			<div className="weather-app">
				<Menu items={cities} onClickHandler={this.onClickCityHandler} isSelected={this.isSelected}/>
				{selectedCity.id && <WeatherCard city={selectedCity}/>}
			</div>
		);
	}
}

export default WeatherApp;