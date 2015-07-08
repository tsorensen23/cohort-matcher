var React = require('react');
var Question = require('./question.jsx');
var numQuestionsAnswered = 0;
var ProfileBox = React.createClass({
	handleClick: function(e) {
		this.props.chooseCohort(cohortChoice());
		this.props.survey1QuestionsChoice(survey1Chooser());
		this.props.survey2QuestionsChoice(survey2Chooser());
		this.props.survey3QuestionsChoice(survey3Chooser());
		this.props.survey4QuestionsChoice(survey4Chooser());
		this.props.survey5QuestionsChoice(survey5Chooser());
		this.props.survey6QuestionsChoice(survey6Chooser());
		this.props.survey7QuestionsChoice(survey7Chooser());
		if(numQuestionsAnswered === 7) {
			this.props.addOne();
		}
		else {
			numQuestionsAnswered = 0;
			alert("Please answer every question.");
		}
	},

	render: function() {
		var tempQuestionArray = [
			{
				Q: "What is your goal after codesmith?",
				A: "I want to start my own company",
				B: "I want to work at a startup",
				C: "I want to work at a large established tech company",
				D: "I'm looking to get exposure to the tech industry"
			},
			{
				Q: "What are you most excited about at codesmith?",
				A: "Building my own projects",
				B: "Networking with new people",
				C: "Becoming a full-stack engineer",
				D: "Thirsty Thursdays"
			},
			{
				Q: "Where did you grow up?",
				A: "International",
				B: "East Coast",
				C: "West Coast",
				D: "Midwest"
			},
			{
				Q: "How do you like to spend your evenings?",
				A: "With my significant other",
				B: "At the bar",
				C: "Sleeping",
				D: "Hanging out with my new friends at Codesmith"
			},
			{
				Q: "Do you consider yourself:",
				A: "An extrovert",
				B: "An introvert",
				C: "Both",
				D: "I don't believe in such things"
			},
			{
				Q: "What statement do you agree with the most?",
				A: "I like the beach, but I don't like sand or water",
				B: "Dang.",
				C: "Muhuhahahaha",
				D: "Jank"
			},
			{
				Q: "Choose a superpower",
				A: "Invisibility",
				B: "Time control",
				C: "Telepathy",
				D: "The ability to fly"
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
						<h3>Which cohort are you in? (Optional)</h3>
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
			numQuestionsAnswered++;
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
			numQuestionsAnswered++;
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
			numQuestionsAnswered++;
		}
	}
	return s3answer;
}

var survey4Chooser = function() {
	var s4answer;
	var s4Question = document.getElementsByName('4');

	for(var i = 0; i<s4Question.length; i++){
		if(s4Question[i].checked === true){
			s4answer = s4Question[i].value; 
			numQuestionsAnswered++;
		}
	}
	return s4answer;
}

var survey5Chooser = function() {
	var s5answer;
	var s5Question = document.getElementsByName('5');

	for(var i = 0; i<s5Question.length; i++){
		if(s5Question[i].checked === true){
			s5answer = s5Question[i].value; 
			numQuestionsAnswered++;
		}
	}
	return s5answer;
}

var survey6Chooser = function() {
	var s6answer;
	var s6Question = document.getElementsByName('6');

	for(var i = 0; i<s6Question.length; i++){
		if(s6Question[i].checked === true){
			s6answer = s6Question[i].value; 
			numQuestionsAnswered++;
		}
	}
	return s6answer;
}

var survey7Chooser = function() {
	var s7answer;
	var s7Question = document.getElementsByName('7');

	for(var i = 0; i<s7Question.length; i++){
		if(s7Question[i].checked === true){
			s7answer = s7Question[i].value; 
			numQuestionsAnswered++;
		}
	}
	return s7answer;
}
module.exports = ProfileBox;
// React.render(<ProfileBox />, document.body);