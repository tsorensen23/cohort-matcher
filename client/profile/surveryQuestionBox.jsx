var React = require('react');
var Question = require('./question.jsx');

var SurveyQuestionBox = React.createClass({
	render: function() {
		var tempQuestionArray = [
			{
				Q: "What is your alma mater?",
				A: "UCLA",
				B: "UVA",
				C: "Duke",
				D: "Cal"
			},
			{
				Q: "Which main sport do you play?",
				A: "golf",
				B: "basketball",
				C: "bowling",
				D: "badminton"
			},
			{
				Q: "Which music do you like best?",
				A: "pop",
				B: "traditional Irish folk music",
				C: "Korean rap",
				D: "country"
			}
		];
		var counter = 0;
		var tempFormattedArray = tempQuestionArray.map(function(oneQuestion) {
			counter++;
			return (<Question data={oneQuestion} counter={counter} />);
		});
		return (
			<div id="surveyQuestionBox">{tempFormattedArray}</div>
		);
	}
});

module.exports = SurveyQuestionBox;