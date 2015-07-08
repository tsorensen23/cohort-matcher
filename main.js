var React = require('react');
var LoginBox = require('./client/login/loginBox.jsx');
var ProfileBox = require('./client/profile/profileBox.jsx');
var NoMatch = require('./client/waiting/noMatch.jsx');
var Match = require('./client/waiting/match.jsx');	
var Admin = require('./client/admin/admin.jsx');

var App = React.createClass({
	getInitialState: function(){
		return {pageCounter: 0,
			adminBool: 0,
			name: null,
			cohort: null,
			SQ1: null,
			SQ2: null,
			SQ3: null,
			SQ4: null,
			SQ5: null,
			SQ6: null,
			SQ7: null,			
			matchAvailable: null
		}
	},

	setName: function(yourName){
		this.setState({name: yourName});
	},

	toggleAdmin: function() {
		this.setState({adminBool: ++this.state.adminBool});
	},

	addOne: function() {
		this.setState({pageCounter: ++this.state.pageCounter});
	},

	updateMatch: function(yourMatch) {
		console.log("update match function");
		this.setState({matchAvailable:yourMatch});
	},

	chooseCohort: function(cohortChoice) {
		this.setState({cohort: cohortChoice});
	},
	survey1QuestionsChoice: function(survey1Choice) {
		this.setState({SQ1: survey1Choice});
	},
	survey2QuestionsChoice: function(survey2Choice) {
		this.setState({SQ2: survey2Choice});
	},
	survey3QuestionsChoice: function(survey3Choice) {
		this.setState({SQ3: survey3Choice});
	},
	survey4QuestionsChoice: function(survey4Choice) {
		this.setState({SQ4: survey4Choice});
	},
	survey5QuestionsChoice: function(survey5Choice) {
		this.setState({SQ5: survey5Choice});
	},
	survey6QuestionsChoice: function(survey6Choice) {
		this.setState({SQ6: survey6Choice});
	},
	survey7QuestionsChoice: function(survey7Choice) {
		this.setState({SQ7: survey7Choice});
	},

	render: function(){
		if(this.state.pageCounter === 0){
			return (
				<div>
					<LoginBox pageCounter={this.state.pageCounter} addOne={this.addOne.bind(this)} adminBool={this.state.adminBool} toggleAdmin={this.toggleAdmin} setName={this.setName.bind(this)}/>
				</div>
			);	
		}
		else if(this.state.pageCounter === 1 && this.state.adminBool === 1){
			return (
				<div>
					<Admin pageCounter={this.state.pageCounter} />
				</div>
			);
		}
		else if(this.state.pageCounter === 1 && this.state.adminBool === 0){
			return (
				<div>
					<ProfileBox pageCounter={this.state.pageCounter} addOne={this.addOne.bind(this)} name={this.state.name} cohort={this.state.cohort} SQ1={this.state.SQ1} SQ2={this.state.SQ2} SQ3={this.state.SQ3} chooseCohort={this.chooseCohort.bind(this)} survey1QuestionsChoice={this.survey1QuestionsChoice.bind(this)} survey2QuestionsChoice={this.survey2QuestionsChoice.bind(this)} survey3QuestionsChoice={this.survey3QuestionsChoice.bind(this)} SQ4={this.state.SQ4} S5={this.state.SQ5} SQ6={this.state.SQ6} SQ7={this.state.SQ7} survey4QuestionsChoice={this.survey4QuestionsChoice.bind(this)} survey5QuestionsChoice={this.survey5QuestionsChoice.bind(this)} survey6QuestionsChoice={this.survey6QuestionsChoice.bind(this)} survey7QuestionsChoice={this.survey7QuestionsChoice.bind(this)} />
				</div>
			);
		}

		else if(this.state.pageCounter === 2){
			return (
				<div>
					<NoMatch match={this.state.matchAvailable} updateMatch={this.updateMatch.bind(this)} pageCounter={this.state.pageCounter} addOne={this.addOne.bind(this)} name={this.state.name} cohort={this.state.cohort} SQ1={this.state.SQ1} SQ2={this.state.SQ2} SQ3={this.state.SQ3} SQ4={this.state.SQ4} SQ5={this.state.SQ5} SQ6={this.state.SQ6} SQ7={this.state.SQ7} />
				</div>
			);
		}
		else if(this.state.pageCounter === 3){
			return(
				<div>
					<Match match={this.state.matchAvailable} pageCounter={this.state.pageCounter}/>
				</div>
			);
		}
	}
});

React.render(<App />, document.body);