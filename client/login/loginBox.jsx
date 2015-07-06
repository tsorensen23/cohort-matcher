var React = require('react');
var FirstName = require('./firstName.jsx');
var LastName = require('./lastName.jsx');
var SubmitButton = require('./submitButton.jsx');

var LoginBox = React.createClass({
	// getInitialState: function(){
	// 	return {data:"hi"};
	// },

	handleButtonClick: function(e){
		var self = this;
		// var travissorensen = {'survey1': 'travis'};
		// var victorialeon = {'survey1': 'victoria'};
		// var tempLogin = {travissorensen, victorialeon};
		var first = $('#firstName').val();
		var last = $('#lastName').val();
		var name = first+ " " + last;
		var bool = true;
		if(first === 'admin' && last === 'password'){
			this.props.toggleAdmin();
			this.props.addOne();
			return;
		}
		if(first !== '' && last !== '') {
			console.log(this.props.pageCounter, "this is the page counter");
			// console.log("first addOne call", this);
			this.props.addOne();
			this.props.setName(name);
			// console.log("before AJAX", self.props.pageCounter);
			$('#firstName').val('');
			$('#lastName').val('');
	
		$.ajax({
            method: 'GET',
            dataType: 'json',
            url: '/profile',
            success: function(data) {
                console.log("data from loginBox success function", data);
                var profileExists = false;
                for(var i = 0; i < data.length; i++) {
                    if(data[i].name === name) {
                        // profileExists = true;
                        self.props.addOne();
                    }
                }
                console.log("AJAX add one call", self);
                console.log("pageCounter in ajax request", self.props.pageCounter);
            }
        });
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