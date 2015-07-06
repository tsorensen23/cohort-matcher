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
					<Admin />
				</div>
			);
		}
		else if(this.state.pageCounter === 1 && this.state.adminBool === 0){
			return (
				<div>
					<ProfileBox pageCounter={this.state.pageCounter} addOne={this.addOne.bind(this)} name={this.state.name} cohort={this.state.cohort} SQ1={this.state.SQ1} SQ2={this.state.SQ2} SQ3={this.state.SQ3} chooseCohort={this.chooseCohort.bind(this)} survey1QuestionsChoice={this.survey1QuestionsChoice.bind(this)} survey2QuestionsChoice={this.survey2QuestionsChoice.bind(this)} survey3QuestionsChoice={this.survey3QuestionsChoice.bind(this)}/>
				</div>
			);
		}

		else if(this.state.pageCounter === 2){
			return (
				<div>
					<NoMatch name={this.state.name} cohort={this.state.cohort} SQ1={this.state.SQ1} SQ2={this.state.SQ2} SQ3={this.state.SQ3} />
				</div>
			);
		}
		else if(this.state.pageCounter === 3){
			return(
				<div>
					<Match />
				</div>
			);
		}
	}
});

React.render(<App />, document.body);