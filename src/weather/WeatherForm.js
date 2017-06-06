import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

import './WeatherForm.scss';
class WeatherForm extends Component {
    state = {  }

    onSuggestSelect(suggest){
        console.log(suggest)
    }

    onFormSubmit(e){
        e.preventDefault();

        var location = this.refs.location.value;

        if(location.length){
            this.refs.location.value = '';
            this.props.onSearch();
        }

    }
    render() {
        return (              
            <form onSubmit={this.onFormSubmit}>
                <input type="text" placeholder="Enter city name" ref="location"/>

                {/*<Geosuggest placeholder="Enter city name" onSuggestSelect={this.onSuggestSelect}/>*/}
                <button type="submit" className="button expanded">Get Weather</button>
            </form>
        );
    }
}

export default WeatherForm;