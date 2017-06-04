import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class StopwatchButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleSplitClick = this.handleSplitClick.bind(this);
  }
  handlePlayClick() {
    this.props.watch.play();
  }
  handleStopClick() {
    this.props.watch.stop();
  }
  handleResetClick() {
    this.props.watch.reset();
  }
  handleSplitClick() {
    this.props.watch.split();
  }
  render() {
    let mainButton, splitButton = null;
    if (this.props.isPlaying) {
      mainButton = <Button bsStyle="danger" bsSize="large" onClick={this.handleStopClick}>Stop</Button>
      splitButton = <Button bsStyle="success" bsSize="large" onClick={this.handleSplitClick}>Split</Button>
    } else {
      mainButton = <Button bsStyle="primary" bsSize="large" onClick={this.handlePlayClick}>Play</Button>
      splitButton = <Button bsStyle="success" bsSize="large" disabled>Split</Button>
    }
    return (
      <ButtonToolbar>
        {mainButton}
        {splitButton}
        <Button bsSize="large" onClick={this.handleResetClick}>Reset</Button>
      </ButtonToolbar>
    )
  }
}

export { StopwatchButtons };