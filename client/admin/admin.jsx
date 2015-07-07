var React = require('react');

var Admin = React.createClass({
	handleClick: function(){
		var updatedData = [];
		var ajaxBool = true;
		var matchType = document.getElementsByName('matchType');
		var matchMethod;
		for(var b = 0; b < matchType.length; b++) {
			if(matchType[b].checked === true) {
				matchMethod = matchType[b].value;
			}
		}
		$.ajax({
            method: 'GET',
            dataType: 'json',
            url: '/profile',
            success: function(data) {
                var srArray = [];
                var jrArray = [];
                for(var i = 0; i < data.length; i++) {
                	if(data[i].cohort === "Senior Cohort") {
                		srArray.push(data[i]);
                	}
                	else {
                		jrArray.push(data[i]);
                	}
                }
                var matchesRemaining = srArray.length;

                //random matching
                if(matchMethod === 'random') {
                	console.log('random');
                	for(var i = 0; i < srArray.length; i++) {
	                	var bool = true;
	                	while(bool) {
	                		var matchIndex = Math.floor(Math.random()*jrArray.length);
	                		if(jrArray[matchIndex].matchAvailable === null) {
	                			srArray[i].matchAvailable = jrArray[matchIndex].name;
	                			jrArray[matchIndex].matchAvailable = srArray[i].name;
	                			updatedData.push(srArray[i]);
	                			updatedData.push(jrArray[matchIndex]);
	                			console.log('updatedData before for loop', updatedData);
	                			bool = false;
	                			matchesRemaining--;
	                		}
	                	}
                	}
                }

                // //survey-based matching
                else {
                	console.log('survey');
                	for(var i = 0; i<srArray.length; i++) {
	                	var currentPoints = 0;
	                	var bestMatchPoints = 0;
	                	var bestMatchIndex;

	                	for(var j = 0; j<jrArray.length; j++) {
	                		if(jrArray[j].matchAvailable === null) {
		                		if(srArray[i].SQ1 === jrArray[j].SQ1) {
		                			++currentPoints;
		                		}
		                		if(srArray[i].SQ2 === jrArray[j].SQ2) {
		                			++currentPoints;
		                		}
		                		if(srArray[i].SQ3 === jrArray[j].SQ3) {
		                			++currentPoints;
		                		}
		                		if(currentPoints>bestMatchPoints) {
		                			bestMatchPoints = currentPoints;
		                			bestMatchIndex = j;
		                			currentPoints = 0;
		                		}
		                		if(bestMatchIndex === null) {
		                			for(var k = 0; k<jrArray.length; k++) {
		                				if(jrArray[k].matchAvailable === null) {
		                					bestMatchIndex = k;
		                					break;
		                				}
		                			}
		                		}	
	                		}
	                		
	                	}
	               		srArray[i].matchAvailable = jrArray[bestMatchIndex].name;
	               		jrArray[bestMatchIndex].matchAvailable = srArray[i].name;
	               		updatedData.push(srArray[i]);
            			updatedData.push(jrArray[bestMatchIndex]);
            			console.log('updatedData', updatedData);
            			matchesRemaining--;
	                }
                }
                alert('Thanks for matching!');
                updatedData = data;
                ajaxBool = false;
                if(matchesRemaining <= 0) {
                	updateMatches();
                }
            }
        });
	var updateMatches = function() {
		for(var d = 0; d < updatedData.length; d++) {
			var matchObject = {name: updatedData[d].name, cohort: updatedData[d].cohort, SQ1: updatedData[d].SQ1, SQ2: updatedData[d].SQ2, SQ3:updatedData[d].SQ3, matchAvailable:updatedData[d].matchAvailable };
			console.log(matchObject);

	        $.ajax({
	            type: 'POST',
	            contentType: 'application/json',
	            url: '/profileAfter',
	            data: JSON.stringify(matchObject),
	            success: function(data) {
	               console.log(data);
	               console.log("post request successful");
	            }
	        });
	}





		// 	var matchObject = { matchAvailable: updatedData[d].matchAvailable };
		// 	var matchID = updatedData[d]._id;
		// 	console.log(matchID);
		// 	$.ajax({
	 //            type: 'PUT',
	 //            contentType: 'application/json',
	 //            url: '/profile/'+matchID,
	 //            data: JSON.stringify(matchObject),
	 //            success: function(data) {
	 //               console.log(data);
	 //               console.log("post request successful");
	 //            }
	 //        });
		// }
		};

	},

	render: function() {
		return (
			<div id="outerAdmin">
				<h2>How would you like to match?</h2>
				<input type="radio" name='matchType' value='random'>  Random</input>
				<br></br>
				<input type="radio" name='matchType' value='survey'>  Survey-based</input>
				<br></br>
				<div id="matchButtonHolder">
					<button id="matchButton" type='button' onClick={this.handleClick}>Match!</button>
				</div>
			</div>
		);
	}
});

module.exports = Admin;