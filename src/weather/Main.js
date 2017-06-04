import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

import Nav from './Nav';
import Weather from './Weather';
import About from './About';
import Example from './Example';
class Main extends Component {
    state = {  }
    render() {
        return (
            // <Route path="/about" exact={true} component={Main}/>
              
            <div>
                <Nav/>
                <h2>Main Component</h2>
                {/*{this.props.children}*/}
                <Route path="/" exact={true} component={Weather}/>
                <Route path="about" component={About}/>  
                <Route path="example"  component={Example}/>  
            </div>
        );
    }
}

export default Main;