import React from 'react';
import { Meteor } from 'meteor/meteor';
import { LapDisplay } from '../components/lap-display.jsx';
  		
class LapDisplayRealTime extends React.Component {
	constructor(props) {
    super(props);		
    this.state = { time: 0 };
  }
  componentDidMount() {
  	this.startTimer();
  }
  componentWillUnmount() {
    this.stopTimer();
  }
  startTimer() {
  	if (this.timerID)
  		return null;
  	let total = this.props.watch.totalLaps();
  	let start = this.props.watch.lastLap().start;
  	const tick = () => {
			this.setState({ time: total + Date.now() - start });
		}
  	this.timerID = Meteor.setInterval(tick, 100);
  	tick();
  }
  stopTimer() {
  	if (this.timerID) {
  		Meteor.clearInterval(this.timerID);
  		this.timerID = null;
  	}
  }
  render() {
  	return (
  		<LapDisplay time={this.state.time } style={"mainLap"}/>
  	)
  }
}

export { LapDisplayRealTime };