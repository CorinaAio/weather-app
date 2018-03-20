import React, {Component} from 'react';
import Menu from '../menu/menu';
import WeatherCard from '../weather-card/weather-card';
import WeatherService from '../../services/weather-service';
import ErrorBoundary from '../error-boundary/error-boundary';
import cities from '../../data/cities';
import {APP_ERR_MSG} from '../../data/constants';


/*
	This component takes care of the state of the application
	It retrieves the necessary data based on user actions 
	Updates the state in order to trigger a re-render of
	 the necessary components in order to display the user the data that it needs
	
	I didn't choose to use a state management library like Redux because the app is
	 quite small and it seemed more like over engineering. Although, if the app should grow,
	 them it would be necessary to add on for a cleaner code
*/
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

	/*
		if the component is first rendered with no selected city comming throuh props,
		it is initialised using the first city retrieved from the cities map
		data is fetched using that id
	*/
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
	
	/*
		retrieves the id of the first city in the cities map
	*/
	getFirstCityId = (cities) => {
		return cities.keys().next().value;
	}

	/*
		requests data from the service based on the selected cityId and
		updates the current state
	*/
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

	/*
		handler for menu item clicks
	*/
	onClickCityHandler = (cityId) => {
		this.updateSelectedCityWeatherData(cityId);
	}

	/*
		callback used by menu component to identify which menu item is selected
		in order to set a class on the selected one
	*/
	isSelected = (id) => {
		return this.state.selectedCity.id === id;
	}

	/*
		the rendered template is wrapped in an ErrorBoundary component in order to
		catch the error that could arise and give the user a human readable message
	*/
	render() {
		let {cities, selectedCity} = this.state;

		return (
			<ErrorBoundary errorMessage={APP_ERR_MSG}>
				<div className="weather-app">
					<Menu items={cities} onClickHandler={this.onClickCityHandler} isSelected={this.isSelected}/>
					{selectedCity.id && <WeatherCard city={selectedCity}/>}
				</div>
			</ErrorBoundary>
		);
	}
}

export default WeatherApp;