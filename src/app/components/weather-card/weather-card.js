import React, {Component} from 'react';
import './weather-card.scss';

class WeatherCard extends Component {
	render() {
		let {name, wind: {speed, deg}, main:{temp}} = this.props.city.data;
		return (
			<div className="weather-card">
				<span className="temperature">{temp}&deg;C</span>
				<span className="wind-speed">Wind speed: {speed} km/h</span>
			</div>
		);
	}
}

export default WeatherCard;