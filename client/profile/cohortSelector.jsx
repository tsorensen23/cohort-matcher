var React = require('react');

var CohortSelector = React.createClass({
	render: function() {
		return (
			<div id="cohortSelector">
				<h3>Which cohort are you in?</h3>
				<input type="radio" name='radioButton' value="Senior Cohort">Senior Cohort</input>
				<br></br>
				<input type="radio" name='radioButton' value="Junior Cohort">Junior Cohort</input>
			</div>
		);
	}
});

module.exports = CohortSelector;