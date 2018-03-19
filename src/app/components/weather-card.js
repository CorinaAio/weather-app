import React, {Component} from 'react';


class WeatherCard extends Component {
	render() {
		return <div>this is the weather card of city {this.props.cityName}</div>
	}
}

export default WeatherCard;