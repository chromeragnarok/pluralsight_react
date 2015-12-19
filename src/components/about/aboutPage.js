"use strict"
var React = require('react');
var Lifecycle = require('react-router').Lifecycle;

var About = React.createClass({
    mixins: [Lifecycle],
    routerWillLeave: function(nextLocation){
        return 'Your work is not saved! Are you sure you want to leave?'
    },
    render: function(){
        return (
            <div>
                <h1>About</h1>
                <div>
                    This application uses the following technologies
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = About;
