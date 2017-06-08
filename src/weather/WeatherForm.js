import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

import './WeatherForm.scss';
class WeatherForm extends Component {

    /*
    * I've refactor this to facebook style
    */
    constructor(props){
        super(props);
        this.state = {
            location: null
        };
        // This binding is necessary to make `this` work in the callback
        this.getWeather = this.getWeather.bind(this);
        this.setLocation = this.setLocation.bind(this);
    }

    // state = {  }

    setLocation(suggest){
        // console.log(suggest);
        let location = {
            lat: suggest.location.lat,
            lon: suggest.location.lng
        };
        this.setState({
            location: location
        });
    }

    getWeather(e){
        e.preventDefault();
        console.log('aqui');
        if(this.state.location){
            this._geoSuggest.clear();
            this.props.onSearch(this.state.location)
        }
    }
    render() {
        return (              
            <form onSubmit={this.getWeather}>
                {/*<input type="text" placeholder="Enter city name" ref={(input) => { this.textInput = input; }}/>*/}

                <Geosuggest placeholder="Enter city name" ref={el=>this._geoSuggest=el} onSuggestSelect={this.setLocation}/>
                <button type="submit" className="button expanded">Get Weather</button>
            </form>
        );
    }
}

export default WeatherForm;