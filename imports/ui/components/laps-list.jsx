import React from 'react';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import { LapDisplay } from './lap-display.jsx';

const lapIndex = {
	marginRight: "10px"
}

const LapsList = ({laps}) => {
  let content = null;
  if (laps.length == 0) {
    content = <p>No laps to show</p>
  } else {
    content = <ListGroup>
      {laps.map(({start, end}, index) => (
        <ListGroupItem key={index}>
        	<span className="lead"><strong style={lapIndex}>#{index + 1}</strong> <LapDisplay time={end-start} /></span>
        </ListGroupItem>
      ))}
    </ListGroup> 
  }
  return (
    <div>
      <h2>Laps</h2>
      {content}
    </div>
  );
}

export { LapsList };