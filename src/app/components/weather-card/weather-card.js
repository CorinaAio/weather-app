import React, {Component} from 'react';


class WeatherCard extends Component {
	render() {
		return (
			<div>
				{this.props.city.name}
				{JSON.stringify(this.props.city.data)}
			</div>
		);
	}
}

export default WeatherCard;