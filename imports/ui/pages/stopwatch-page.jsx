import React from 'react';
import { Grid, Button, ButtonToolbar } from 'react-bootstrap';
import { LapDisplay } from '../components/lap-display.jsx';
import { LapDisplayRealTime } from '../components/lap-display-real-time.jsx';
import { StopwatchButtons } from '../components/stopwatch-buttons.jsx';
import { LapsList } from '../components/laps-list.jsx';
import { Meteor } from 'meteor/meteor';

class StopwatchPage extends React.Component {
	constructor(props) {
    super(props);
  }
  render() {
  	let lapDisplay = null;
  	if (this.props.isPlaying) {
      lapDisplay = <LapDisplayRealTime watch={this.props.watch} />;
  	} else {
      lapDisplay = <LapDisplay time={this.props.watch.totalLaps()} style={"mainLap"}/>;
  	}
    return (
			<Grid>
		    <h1 className="page-header">Stopwatch</h1>
        <p className="lead">To share this stopwatch with others copy the link address and send it to them. If you are on development environment try open multiple tabs with this same link.</p>
		    {lapDisplay}
        <StopwatchButtons isPlaying={this.props.isPlaying} watch={this.props.watch}/>
        <LapsList laps={this.props.watch.lapsCompleted()} />
		  </Grid>
		);
  }
}

export default StopwatchPage;

