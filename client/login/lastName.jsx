var React = require('react');

var LastName = React.createClass({
	render: function() {
		return (
			<input id="lastName" placeholder="Last Name"></input>
		);
	}
});

module.exports = LastName;