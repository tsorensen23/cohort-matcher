var React = require('react');
var ProfileName = require('./profileName.jsx');
var CohortSelector = require('./cohortSelector.jsx');
var SurveyQuestionBox = require('./surveryQuestionBox.jsx');
var ProfileSubmitButton = require('./profileSubmitButton.jsx');

var ProfileBox = React.createClass({
	handleClick: function(e) {
		this.props.addOne(this.props.pageCounter);
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

module.exports = ProfileBox;
// React.render(<ProfileBox />, document.body);