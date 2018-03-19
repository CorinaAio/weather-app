import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu';
import WeatherCard from './components/weather-card';
import './index.scss';

class App extends Component {
	render() {
   		return (
   			<div>
   				<Menu items={['Ams', 'Izsi', 'fd']} />
   				<WeatherCard cityName="Iasi" />
   			</div>
   		);
   }
}

ReactDOM.render(<App />, document.getElementById('app'));