import React, { Component } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMessage from './WeatherMessage';
class Weather extends Component {
  //Initial States
  state = {
    date: new Date().toLocaleTimeString(),
    location: 'Miami',
    temp: 30
  };

  handleSearch(location){
    this.setState({
      location: location,
      temp: 23
    });
  }
  
  render() {
    return (
      <div className="medium-6 medium-offset-3 columns">
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage date={this.state.date} location={this.state.location} temp={this.state.temp} />
      </div>
    );
  }
}

export default Weather;
