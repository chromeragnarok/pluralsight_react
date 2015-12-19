"use strict"

var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Redirect = require('react-router').Redirect;

var aboutConfirm = function(nextState, replaceState){
    if(!confirm("Are you sure you read a page that's this boring?")){
        replaceState({ nextPathname: nextState.location.pathname }, '/')
    }
}

var routes = (
    <Router>
        <Route name="app" path="/" component={require('./components/app')}>
            <IndexRoute component={require('./components/homePage')} />
            <Route path="authors" component={require('./components/authors/authorPage')} />
            <Route path="authors/new" component={require('./components/authors/manageAuthorPage')} />
            <Route path="authors/:id" component={require('./components/authors/manageAuthorPage')} />
            <Route path="about" component={require('./components/about/aboutPage')} />
            <Redirect from="about-us" to="about"/>
            <Route path="*" component={require('./components/common/notFoundPage')} />
        </Route>
    </Router>
)

module.exports = routes;
