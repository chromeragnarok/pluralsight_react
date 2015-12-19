"use strict";

var React = require('react');
var Link = require('react').Link;
var AuthorApi = require('../../api/authorApi');

var AuthorList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    render: function(){
        var createAuthorRow = function(author){
            return (
                <tr key={author.id}>
                    <td><Link to="/authors" params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
        );
    }
});

module.exports = AuthorList;
