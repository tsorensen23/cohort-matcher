var React = require('react');

var ProfileSubmitButton = React.createClass({
	render: function() {
		return (
			<button id="profileSubmitButton" type='button' onClick={this.props.buttonHandler}>Submit</button>
		);
	}
});

module.exports = ProfileSubmitButton;