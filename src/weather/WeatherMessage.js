import React, { Component } from 'react';

class WeatherMessage extends Component {
    state = {  }
    render() {
        let {temp, location, date} = this.props;
        if(!temp && !location){
            return null;
        }

        return (              
            <div className="text-center">
               <h4>Its {temp}* in {location} at {date}</h4>
            </div>
        );
    }
}

export default WeatherMessage;