import React, { Component } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMessage from "./WeatherMessage";
class Weather extends Component {
  constructor(props) {
    super(props);

    //Initial States
    this.state = {
      date: new Date().toLocaleTimeString(),
      location: "Miami",
      temp: 30
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    this.setState({
      location: location,
      temp: 23
    });

  }

  render() {
    return (
      <div className="medium-6 medium-offset-3 columns">
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
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
