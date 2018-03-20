import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './components/weather-app/weather-app';
import cities from './data/cities';
import './index.scss';

ReactDOM.render(<WeatherApp cities={cities} />, document.getElementById('app'));