var React = require('react');

var NoMatch = React.createClass({
	refreshMessages: function() {
		var self = this;
		$.ajax({
            method: 'GET',
            dataType: 'json',
            url: '/profileAfter',
            success: function(data) {
            	console.log(data, "this sis the data");
             	for(var i = 0; i < data.length; i++) {
                    if(data[i].name === self.props.name) {
                    	match = data[i].matchAvailable;
                    	self.props.addOne();
                    	self.props.updateMatch(match);
                    	console.log("MY MATCH IS ", data[i].matchAvailable);
                    	console.log("MY NAME IS ", self.props.name);

            		}
            	}
            }
     	});
	},
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

	componentDidMount: function() {
		this.refreshMessages();
		setInterval(this.refreshMessages, 2000);
	},

	render: function() {
			return (
				<div id="outerNoMatch">
					<h2>Waiting on admin - tell Rob to hurry up with the matching.</h2>
					<div id="profileSubButtonHolder">
						<button id="ajaxSubmitButton" type='button' onClick={this.postRequest}>Press me to submit your profile</button>
					</div>
				</div>
			);
		}
});

module.exports = NoMatch;