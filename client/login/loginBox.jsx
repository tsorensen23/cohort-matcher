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
		for(var key in tempLogin){
			if(key === name){
				console.log("hello");
			}
		}
	},

	render: function()
	{
		return (
			<div id="bigHolder">
				<FirstName />
				<LastName />
				<SubmitButton handleSubmit={this.handleButtonClick}/>
			</div>
		);
	}
});

React.render(<LoginBox />, document.body);