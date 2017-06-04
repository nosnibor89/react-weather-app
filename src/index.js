import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('foundation-sites');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
