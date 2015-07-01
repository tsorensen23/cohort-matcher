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
		if(first === 'admin' && last === 'password'){
			console.log("admin function");
			this.props.toggleAdmin(this.props.adminBool);
			console.log("Login Box", this);
			this.props.addOne(this.props.pageCounter);
			return;
		}
		if(first !== '' && last !== '') {
			this.props.addOne(this.props.pageCounter);
			$('#firstName').val('');
			$('#lastName').val('');
			for(var key in tempLogin){
			if(key === name){
				bool = false;
				console.log("hello");
			}
		}
			if(bool) alert("We do not have an existing account in our database for you. Please proceed to complete your profile.");
			}
		else {
			alert("Please do not be coy. Enter your name bro.");
		}
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


module.exports = LoginBox;
// React.render(<LoginBox />, document.body);