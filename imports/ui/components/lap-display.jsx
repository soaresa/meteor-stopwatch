import React from 'react';

const styles = {
  mainLap: {
    fontSize: "80px",
    padding: "20px 0px"
  }
}

class LapDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.formatTime = this.formatTime.bind(this);
  }
  formatTime(time) {
    let milliseconds = parseInt((time%1000) /100);
    let seconds = parseInt((time/1000) %60);
    let minutes = parseInt((time/(1000*60)) %60);
    let hours = parseInt((time/(1000*60*60)) %24);
    return { 
      hours: this.formatNumber(hours), 
      minutes: this.formatNumber(minutes), 
      seconds: this.formatNumber(seconds), 
      milliseconds: this.formatNumber(milliseconds, 1)
    };
  }
  formatNumber(number, decimals) {
    return ("0" + number).slice(decimals ? -decimals : -2);
  }
  render() {
    let format = this.formatTime(this.props.time);
  	return (
  		<span style={styles[this.props.style]}>{format.hours}:{format.minutes}:{format.seconds}.{format.milliseconds}</span>
  	)
  }
}

export { LapDisplay };