'use strict';

var React       = require('react');
var ReactDOM    = require('react-dom');
var App         = require('./components/App.js');
var rootElement = document.getElementById('react-content');

require('../styles/main.js');

ReactDOM.render(
  <App />,
  rootElement
);
