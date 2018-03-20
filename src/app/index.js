import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './components/weather-app/weather-app';
import cities from './data/cities';
import './index.scss';

/*
	renders the WeatherApp component with the cities that are hardcoded in data/cities.js file
	not having the list imported in the WeatherApp component allows retrieving similar data from anywhere
*/
ReactDOM.render(<WeatherApp cities={cities} />, document.getElementById('app'));