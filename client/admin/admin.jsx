var React = require('react');

var Admin = React.createClass({
	handleClick: function(){
		console.log("admin button works");
	},

	render: function() {
		return (
			<div id="outerAdmin">
				<h3>How would you like to match?</h3>
				<input type="radio" name='matchType'>Random</input>
				<br></br>
				<input type="radio" name='matchType'>Survey</input>
				<br></br>
				<button id="matchButton" type='button' onClick={this.handleClick}>Match!</button>
			</div>
		);
	}
});

module.exports = Admin;