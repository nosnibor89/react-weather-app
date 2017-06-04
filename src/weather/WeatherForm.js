import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

import './WeatherForm.scss';
class WeatherForm extends Component {
    state = {  }
    render() {
        return (              
            <form>
                {/*<input type="text" placeholder="Enter city name"/>*/}
                <Geosuggest placeholder="Enter city name"/>
                <button type="submit" className="button expanded">Get Weather</button>
            </form>
        );
    }
}

export default WeatherForm;