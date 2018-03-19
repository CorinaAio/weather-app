import './index.scss';
import 'whatwg-fetch';
/*
import React, {Component} from 'React';*/


class TestClass {
    constructor() {
        let msg = "Using ES2015+ syntax";
        console.log(msg, API_KEY);
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${2759794}&&appid=${API_KEY}`)
        	.then(response => response.json())
        	.then(rjson => console.log(rjson))
    }
}

let test = new TestClass();