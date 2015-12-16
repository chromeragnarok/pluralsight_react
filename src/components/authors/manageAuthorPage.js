"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var history = require('history');
var Router = require('react-router').Router;
var History = require('react-router').History;
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    mixins: [
        History
    ],
    getInitialState: function(){
        return {
            author: { id: '', firstName: '', lastName: '' }
        }
    },
    setAuthorState: function(event){
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },
    saveAuthor: function(event){
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author saved!')
        this.history.pushState(null, '/authors');
    },
    render: function()  {
        return (
            <AuthorForm author={this.state.author}
            onChange={this.setAuthorState}
            onSave={this.saveAuthor} />
        )
    }
});

module.exports = ManageAuthorPage;
