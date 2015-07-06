var React = require('react');

var NoMatch = React.createClass({
	postRequest: function() {
		var messageObject = {name: this.props.name, cohort: this.props.cohort, SQ1: this.props.SQ1, SQ2: this.props.SQ2, SQ3:this.props.SQ3, matchAvailable: null };
		console.log(messageObject);

        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: '/profile',
            data: JSON.stringify(messageObject),
            success: function(data) {
               console.log(data);
               console.log("post request successful");
            }
        });
	},

	render: function() {
		return (
			<div id="outerNoMatch">
				<h2>Waiting on admin - tell Rob to hurry up with the matching.</h2>
				<button id="ajaxSubmitButton" type='button' onClick={this.postRequest}>Press me to submit your profile</button>
			</div>
		);
	}
});

module.exports = NoMatch;