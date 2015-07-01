var React = require('react');
var ProfileName = require('./profileName.jsx');
var CohortSelector = require('./cohortSelector.jsx');
var SurveyQuestionBox = require('./surveryQuestionBox.jsx');
var ProfileSubmitButton = require('./profileSubmitButton.jsx');

var ProfileBox = React.createClass({
	handleClick: function(e) {
		console.log('hello again');
	},

	render: function() {
		return (
			<div id="outerProfileBox">
				<div id="profileBox">
					<ProfileName />
					<CohortSelector />
					<SurveyQuestionBox />
				</div>
				<ProfileSubmitButton buttonHandler={this.handleClick} />
			</div>
		);
	}
});

React.render(<ProfileBox />, document.body);