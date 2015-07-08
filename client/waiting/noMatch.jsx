var React = require('react');

var NoMatch = React.createClass({
	refreshMessages: function() {
		var self = this;
		$.ajax({
            method: 'GET',
            dataType: 'json',
            url: '/profileAfter',
            success: function(data) {
             	for(var i = 0; i < data.length; i++) {
                    if(data[i].name === self.props.name) {
                    	match = data[i].matchAvailable;
                    	self.props.addOne();
                    	self.props.updateMatch(match);

            		}
            	}
            }
     	});
	},
	postRequest: function() {
        $('#ajaxSubmitButton').animate({'opacity': "0.0"},1000);
        $('#ajaxSubmitButton').animate({'margin-top': "400px"},10);
		var messageObject = {name: this.props.name, cohort: this.props.cohort, SQ1: this.props.SQ1, SQ2: this.props.SQ2, SQ3:this.props.SQ3, SQ4:this.props.SQ4, SQ5:this.props.SQ5, SQ6:this.props.SQ6, SQ7:this.props.SQ7, matchAvailable: null };

        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: '/profile',
            data: JSON.stringify(messageObject),
            success: function(data) {
            }
        });
	},

	componentDidMount: function() {
		var self = this;
		this.refreshMessages();
		setInterval(self.refreshMessages, 2000);
		
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