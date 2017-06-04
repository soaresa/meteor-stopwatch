import { Meteor } from 'meteor/meteor';
import Stopwatch from '../stopwatch-model.js'; 

Meteor.methods({
	'Stopwatch.new': function() {
		let watch = new Stopwatch({});
		return watch.save();
	},
});
