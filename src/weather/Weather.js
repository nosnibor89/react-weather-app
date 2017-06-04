import React, { Component } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMessage from './WeatherMessage';
class Weather extends Component {
  state = {};
  render() {
    return (
      <div className="medium-6 medium-offset-3 columns">
        <h1>Get Weather</h1>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
}

export default Weather;
