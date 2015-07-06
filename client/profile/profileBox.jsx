var React = require('react');
var Question = require('./question.jsx');

var ProfileBox = React.createClass({
	handleClick: function(e) {
		//why are we using props instead of state here?
		this.props.chooseCohort(cohortChoice());
		//
		this.props.survey1QuestionsChoice(survey1Chooser());
		this.props.survey2QuestionsChoice(survey2Chooser());
		this.props.survey3QuestionsChoice(survey3Chooser());

// name: {this.props.name}, cohort: {this.props.cohort}, SQ1: {this.props.SQ1}, SQ2: {this.props.SQ2}, SQ3:{this.props.SQ3}, matchAvailable: null
		
		this.props.addOne(this.props.pageCounter);
	},

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
		var self = this;
		return (
			<div id="outerProfileBox">
				<div id="profileBox">
					<div id="profileName">
						<p>Hello {this.props.name}!</p>
					</div>
					<div id="cohortSelector">
						<h3>Which cohort are you in?</h3>
						<input type="radio" name='cohortType' value="Senior Cohort">Senior Cohort</input>
						<br></br>
						<input type="radio" name='cohortType' value="Junior Cohort">Junior Cohort</input>
					</div>
					<div id="surveyQuestionBox">{tempFormattedArray}</div>
				</div>
				<button id="profileSubmitButton" type='button' onClick={this.handleClick}>Submit</button>
			</div>
		);
	}
});

var cohortChoice = function() {
	var answer;
	var question = document.getElementsByName("cohortType");
	for(var i = 0; i < question.length; i++) {
		if(question[i].checked === true) {
			answer = question[i].value;
		}
	}
	return answer;
}

var survey1Chooser = function() {
	var s1answer;
	var s1Question = document.getElementsByName('1');

	for(var i = 0; i<s1Question.length; i++){
		if(s1Question[i].checked === true){
			s1answer = s1Question[i].value; 
		}
	}
	return s1answer;
}

var survey2Chooser = function() {
	var s2answer;
	var s2Question = document.getElementsByName('2');

	for(var i = 0; i<s2Question.length; i++){
		if(s2Question[i].checked === true){
			s2answer = s2Question[i].value; 
		}
	}
	return s2answer;
}

var survey3Chooser = function() {
	var s3answer;
	var s3Question = document.getElementsByName('3');

	for(var i = 0; i<s3Question.length; i++){
		if(s3Question[i].checked === true){
			s3answer = s3Question[i].value; 
		}
	}
	return s3answer;
}


module.exports = ProfileBox;
// React.render(<ProfileBox />, document.body);