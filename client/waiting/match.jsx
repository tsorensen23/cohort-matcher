var React = require('react');

var Match = React.createClass({
	render: function() {
		return (
			<div id="outerMatch">
				<h3>Congrats! You have been matched with {this.props.match}!</h3>
			</div>
		);
	}
});

module.exports = Match;