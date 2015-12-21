var ReactDOM = require('react-dom');
var React = require('react');
var routes = require('./routes');
var InitializeActions = require('./actions/InitializeActions');

InitializeActions.initApp();
ReactDOM.render(routes, document.getElementById('app'));
