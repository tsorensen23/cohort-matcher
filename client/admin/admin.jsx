var React = require('react');

var Admin = React.createClass({
	handleClick: function(){
		var updatedData = [];
		var matchType = document.getElementsByName('matchType');
		var groupType = document.getElementsByName('groupType');
		var matchMethod;
		var groupMethod;
		for(var b = 0; b < 2; b++) {
			if(groupType[b].checked === true) {
				groupMethod = groupType[b].value;
			}
			if(matchType[b].checked === true) {
				matchMethod = matchType[b].value;
			}
		}
		$.ajax({
            method: 'GET',
            dataType: 'json',
            url: '/profile',
            success: function(data) {
            	//match 2 groups
            	if(groupMethod === 2) {
	          		twoGroupMatching(data, matchMethod, updatedData);
	            }
	            //match 1 group
	            else {
	            	oneGroupMatching(data, matchMethod, updatedData);
	            }
            alert('Thanks for matching!');
            var unmatched = [];
            for(var i = 0; i< data.length; i++) {
            	if(data[i].matchAvailable === null) {
            		unmatched.push(data[i]);
            	}
            }
            if(unmatched.length === 1) {
            	
            }
            console.log(updatedData, "matched data after group by one");
            // updatedData = data;
            updateMatches();
	       }
        });

		var updateMatches = function() {
			for(var d = 0; d < updatedData.length; d++) {
				var matchObject = {name: updatedData[d].name, cohort: updatedData[d].cohort, SQ1: updatedData[d].SQ1, SQ2: updatedData[d].SQ2, SQ3:updatedData[d].SQ3, SQ4:updatedData[d].SQ4, SQ5:updatedData[d].SQ5, SQ6:updatedData[d].SQ6, SQ7:updatedData[d].SQ7, matchAvailable:updatedData[d].matchAvailable };
				console.log("this is supposed to get POSTed", matchObject);
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
		};
	},

	render: function() {
		return (
			<div id="outerAdmin">
				<h2>How would you like to group?</h2>
				<input type="radio" name='groupType' value='1'>  One group</input>
				<br></br>
				<input type="radio" name='groupType' value='2'>  Two groups</input>
				<br></br>
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

var twoGroupMatching = function(data, matchMethod, updatedData) {
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
    // var matchesRemaining = srArray.length;

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
        			// matchesRemaining--;
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
            		if(srArray[i].SQ4 === jrArray[j].SQ4) {
            			++currentPoints;
            		}
            		if(srArray[i].SQ5 === jrArray[j].SQ5) {
            			++currentPoints;
            		}
            		if(srArray[i].SQ6 === jrArray[j].SQ6) {
            			++currentPoints;
            		}
            		if(srArray[i].SQ7 === jrArray[j].SQ7) {
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
			// matchesRemaining--;
        }
    }
    return updatedData;
};

var oneGroupMatching = function(data, matchMethod, updatedData) {
	//match randomly
	if(matchMethod === 'random') {
    	console.log('random');
    	for(var i = 0; i < data.length; i++) {
        	var bool = true;
        	while(bool || data.length <= 1) {
        		// debugger;
        		console.log("beginning of the while loop");
        		console.log("data", data);
        		var matchIndex = Math.floor(Math.random()*data.length);
        		console.log("matchIndex", matchIndex);
        		console.log("first data point", data[0].matchAvailable);
        		console.log("second data point", data[1].matchAvailable);
        		if(data[i].matchAvailable !== null) {
        			bool = false;
        			break;
        		}
        		if(data[matchIndex].name !== data[i].name && data[matchIndex].matchAvailable === null) {
        			data[i].matchAvailable = data[matchIndex].name;
        			data[matchIndex].matchAvailable = data[i].name;
        			updatedData.push(data[matchIndex]);
        			updatedData.push(data[i]);
        			// data.splice(matchIndex, 1);
        			// data.splice(i, 1);
        			// i = 0;
        			bool = false;
        			break;
        			// matchesRemaining--;
        			//commented out matchesRemaining-- because I don't think it's necessary
        		}
        	}
        console.log("end of the while loop");
    	}
    }
    else {
    	//match based on survey responses
    	for(var i = 0; i < data.length; i++) {
    		var currentPoints = 0;
        	var bestMatchPoints = 0;
        	var bestMatchIndex;
        	if(data[i].matchAvailable !== null) {
        		break;
        	}
			for(var a = 0; a < data.length; a++) {
				if(data[i].name !== data[a].name && data[a].matchAvailable === null) {
					if(data[i].SQ1 === data[a].SQ1) {
            			++currentPoints;
            		}
        			if(data[i].SQ2 === data[a].SQ2) {
        				++currentPoints;
        			}
    				if(data[i].SQ3 === data[a].SQ3) {
            			++currentPoints;
            		}
    				if(data[i].SQ4 === data[a].SQ4) {
            			++currentPoints;
            		}
    				if(data[i].SQ5 === data[a].SQ5) {
            			++currentPoints;
            		}
    				if(data[i].SQ6 === data[a].SQ6) {
            			++currentPoints;
            		}
    				if(data[i].SQ7 === data[a].SQ7) {
            			++currentPoints;
            		}			                		
            		if(currentPoints>bestMatchPoints) {
            			bestMatchPoints = currentPoints;
            			bestMatchIndex = a;
            			currentPoints = 0;
            		}
				}
			}
			data[i].matchAvailable = data[bestMatchIndex].name;
			data[bestMatchIndex].matchAvailable = data[i].name;
			updatedData.push(data[i]);
			updatedData.push(data[bestMatchIndex]);
		}	
    }
    return updatedData;
};
