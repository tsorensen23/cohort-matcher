var React = require('react');

var Question = React.createClass({
	render: function() {
		
		return (
			<div className="question">
				<p>{this.props.counter}. {this.props.data.Q}</p>
				<input type="radio" name={this.props.counter} value="1">{this.props.data.A}</input>
				<br></br>
				<input type="radio" name={this.props.counter} value="2">{this.props.data.B}</input>
				<br></br>
				<input type="radio" name={this.props.counter} value="3">{this.props.data.C}</input>
				<br></br>
				<input type="radio" name={this.props.counter} value="4">{this.props.data.D}</input>
				<br></br>
			</div>
		);
	}
});

module.exports = Question;