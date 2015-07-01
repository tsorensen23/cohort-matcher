var React = require('react');
var LoginBox = require('./client/login/loginBox.jsx');
var ProfileBox = require('./client/profile/profileBox.jsx');
var NoMatch = require('./client/waiting/noMatch.jsx');
var Match = require('./client/waiting/match.jsx');	
var Admin = require('./client/admin/admin.jsx');


var App = React.createClass({
	getInitialState: function(){
		return {pageCounter: 0,
			adminBool: 0
		}
	},

	toggleAdmin: function(adminBool) {
		console.log("main", adminBool);
		this.setState({adminBool: ++adminBool});
		console.log("after main", adminBool);
	},

	addOne: function(pageCounter) {
		console.log('context in addone', this);
		this.setState({pageCounter: ++pageCounter});
	},
	render: function(){
		console.log('App', this);
		console.log("render");
		if(this.state.pageCounter === 0){
			return (
				<div>
					<LoginBox pageCounter={this.state.pageCounter} addOne={this.addOne.bind(this)} adminBool={this.state.adminBool} toggleAdmin={this.toggleAdmin} />
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
					<ProfileBox pageCounter={this.state.pageCounter} addOne={this.addOne.bind(this)}/>
				</div>
			);
		}
		else if(this.state.pageCounter === 2){
			return (
				<div>
					<NoMatch />
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