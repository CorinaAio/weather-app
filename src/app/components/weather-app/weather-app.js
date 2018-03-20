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
			let [id, name] = this.getFirstCity(cities);
			selectedCity = {id, name, data: {}};
		}
		
		this.updateSelectedCityWeatherData(selectedCity.id);
	}
	
	getFirstCity = (cities) => {
		return cities.entries().next().value;
	}

	updateSelectedCityWeatherData = (cityId) => {
		WeatherService
			.retrieveWeatherDataByCityId(cityId)
			.then(rjson => {
				let {id, name} = rjson;
				this.setState({
					selectedCity: {id, name, data: rjson}
				});
			})
			.catch(err => console.error(err));
	}

	onClickCityHandler = (cityId) => {
		this.updateSelectedCityWeatherData(cityId);
	}

	render() {
		return (
			<div className="weather-app">
				<Menu items={this.state.cities} onClickHandler={this.onClickCityHandler}/>
				{this.state.selectedCity.id && <WeatherCard city={this.state.selectedCity}/>}
			</div>
		);
	}
}

export default WeatherApp;