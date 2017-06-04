import { compose } from 'react-komposer';
import { getTrackerLoader } from '/imports/modules/tracker-loader.js';
import Stopwatch from '/imports/api/stopwatch/stopwatch-model.js';
import StopwatchPage from '../pages/stopwatch-page.jsx';

function reactiveMapper(props, onData) {
  if (Meteor.subscribe('Stopwatch', props._id).ready()) {
    const watch = Stopwatch.findOne({_id: props._id});
    let isPlaying = watch.isPlaying();
    onData(null, { watch, isPlaying });
  };
}

export default compose(getTrackerLoader(reactiveMapper))(StopwatchPage);