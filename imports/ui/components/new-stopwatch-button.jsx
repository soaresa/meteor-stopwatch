import React from 'react';
import { Meteor } from  'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Button } from 'react-bootstrap';

const NewStopwatchButton = () => {
	function handleClick(event) {
	    event.preventDefault();
	    Meteor.call('Stopwatch.new', (error, result) => { 
	    	if (error)
	    		return alert(error.reason);
	    	FlowRouter.go('Stopwatch', { _id: result });
	    });
	}
	return (
		<Button bsStyle="primary" bsSize="large" onClick={handleClick}>New Stopwatch</Button>
	);
}

export default NewStopwatchButton;