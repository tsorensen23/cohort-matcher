var React = require('react');

var Admin = React.createClass({
	handleClick: function(){
		console.log("admin button works");
	},

	render: function() {
		return (
			<div id="outerAdmin">
				<h2>How would you like to match?</h2>
				<input type="radio" name='matchType'>  Random</input>
				<br></br>
				<input type="radio" name='matchType'>  Survey</input>
				<br></br>
				<div id="matchButtonHolder">
					<button id="matchButton" type='button' onClick={this.handleClick}>Match!</button>
				</div>
			</div>
		);
	}
});

module.exports = Admin;