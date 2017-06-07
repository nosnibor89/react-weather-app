import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

import './WeatherForm.scss';
class WeatherForm extends Component {

    /*
    * I've refactor this to facebook style
    */
    constructor(props){
        super(props);
        this.state = {};
        // This binding is necessary to make `this` work in the callback
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // state = {  }

    onSuggestSelect(suggest){
        console.log(suggest);
    }

    onFormSubmit(e){
        e.preventDefault();

        let location = this.textInput.value;

        if(location.length){
            this.textInput.value = '';
            this.props.onSearch(location);
        }

    }
    render() {
        return (              
            <form onSubmit={this.onFormSubmit}>
                <input type="text" placeholder="Enter city name" ref={(input) => { this.textInput = input; }}/>

                {/*<Geosuggest placeholder="Enter city name" onSuggestSelect={this.onSuggestSelect}/>*/}
                <button type="submit" className="button expanded">Get Weather</button>
            </form>
        );
    }
}

export default WeatherForm;