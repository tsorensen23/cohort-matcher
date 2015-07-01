var React = require('react');
//require this page because we want to get name from this
var LoginBox = require('./../login/loginBox.jsx');

var ProfileName = React.createClass({
	render: function() {
		return (
			<div id="profileName">
				<p>Hello, ...</p>
			</div>
		);
	}
});

module.exports = ProfileName;