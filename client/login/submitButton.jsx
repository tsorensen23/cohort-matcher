var React = require('react');


var SubmitButton = React.createClass({
	

	render: function() {
		return (
			<button id="submitButton" type='button' onClick={this.props.handleSubmit}>Submit</button>
		);
	}
});

module.exports = SubmitButton;