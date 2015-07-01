var React = require('react');

var NoMatch = React.createClass({
	render: function() {
		return (
			<div id="outerNoMatch">
				<h3>Waiting on admin - tell Rob to hurry up with the matching.</h3>
				// <img src="adminRob.png" id="adminRob"/>
			</div>
		);
	}
});

module.exports = NoMatch;