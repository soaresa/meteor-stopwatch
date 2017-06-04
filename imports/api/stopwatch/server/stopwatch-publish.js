import { Meteor } from 'meteor/meteor';
import { Stopwatches } from '../stopwatch-model.js';

Meteor.publish('Stopwatch', function(_id) {
	return Stopwatches.find({ _id: _id });
});
