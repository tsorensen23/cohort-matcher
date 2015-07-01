var React = require('react');
var FirstName = require('./firstName.jsx');
var LastName = require('./lastName.jsx');
var SubmitButton = require('./submitButton.jsx');

var LoginBox = React.createClass({
	// getInitialState: function(){
	// 	return {data:"hi"};
	// },

	handleButtonClick: function(e){
		var travissorensen = {'survey1': 'travis'};
		var victorialeon = {'survey1': 'victoria'};
		var tempLogin = {travissorensen, victorialeon};
		var first = $('#firstName').val();
		var last = $('#lastName').val();
		var name = first+last;
		var bool = true;
		$('#firstName').val('');
		$('#lastName').val('');
		for(var key in tempLogin){
			if(key === name){
				bool = false;
				console.log("hello");
			}
		}
		if(bool) alert("Incorrect login credentials");
	},

	render: function()
	{
		return (
			<div id="bigHolder">
				<div id="loginContentHolder">
					<h1>Cohort Matcher</h1>
					<div id="loginInput">
						<FirstName />
						<LastName />
					</div>
					<div id="submitButtonHolder">
						<SubmitButton handleSubmit={this.handleButtonClick}/>
					</div>
				</div>
			</div>
		);
	}
});

React.render(<LoginBox />, document.body);