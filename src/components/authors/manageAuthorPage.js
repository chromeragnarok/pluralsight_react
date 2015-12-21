"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var history = require('history');
var Router = require('react-router').Router;
var History = require('react-router').History;
var Lifecycle = require('react-router').Lifecycle;
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    mixins: [
        History, Lifecycle
    ],
    routerWillLeave: function(nextLocation){
        if(this.state.dirty){
            return 'Leave without saving?';
        }
    },
    getInitialState: function(){
        return {
            author: { id: '', firstName: '', lastName: '' },
            errors: {}
        }
    },
    componentWillMount: function(){
        var authorId = this.props.params.id;
        if(authorId){
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    },
    setAuthorState: function(event){
        this.setState({dirty: true})
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },
    authorFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.author.firstName.length < 3){
            this.state.errors.firstName = 'First name must be at least 3 characters.';
            formIsValid = false;
        }

        if(this.state.author.lastName.length < 3){
            this.state.errors.lastName = 'Last name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },
    saveAuthor: function(event){
        event.preventDefault();
        if(!this.authorFormIsValid()){
            return;
        } else {
            this.setState({dirty: false}, function(){
                if(this.state.author.id){
                    AuthorActions.updateAuthor(this.state.author);
                } else {
                    AuthorActions.createAuthor(this.state.author);
                }
                toastr.success('Author saved!')
                this.history.pushState(null, '/authors');
            });
        }
    },
    render: function()  {
        return (
            <AuthorForm author={this.state.author}
            onChange={this.setAuthorState}
            onSave={this.saveAuthor}
            errors={this.state.errors} />
        )
    }
});

module.exports = ManageAuthorPage;
