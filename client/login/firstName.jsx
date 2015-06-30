var React = require('react');

var FirstName = React.createClass({
	render: function() {
		return (
			<input id="firstName" placeholder="First Name"></input>
		);
	}
});

module.exports = FirstName;