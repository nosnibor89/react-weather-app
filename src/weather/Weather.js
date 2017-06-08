import React, { Component } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMessage from "./WeatherMessage";
import WeatherData from "../api/weather-data";
class Weather extends Component {
  constructor(props) {
    super(props);

    //Not the best aproach
    this.WeatherData = new WeatherData();

    //Initial States
    this.state = {};

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    this.WeatherData.getTemp(location).then(data => {
      this.setState({
        location: data.name,
        temp: data.main.temp,
        date: new Date(data.dt).toLocaleTimeString()
      });
    });
  }

  render() {
    return (
      <div className="medium-6 medium-offset-3 columns">
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage
          date={this.state.date}
          location={this.state.location}
          temp={this.state.temp}
        />
      </div>
    );
  }
}

export default Weather;
