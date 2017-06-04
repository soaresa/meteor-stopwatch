import { Class } from 'meteor/jagi:astronomy';

const Stopwatches = new Mongo.Collection('Stopwatches');
const Stopwatch = Class.create({
	name: 'Stopwatch',
	collection: Stopwatches,
	fields: {
		laps: { type: [ Object ], default: () => [] }
	},
	secured: {
		update: false
	},
	helpers: {
		lastLap() {
			return this.laps[this.laps.length - 1];
		},
		play() {
			this._stop();
			this._play();
			this.save();
		},
		reset() {
			this.laps = [];
			this.save();
		},
		stop() {
			this._stop();
			this.save();
		},
		split() {
			this._stop();
			this._play();
			this.save();
		},
		_play() {
			this.laps.push({ start: Date.now(), end: null });
		},
		_stop() {
			let last = this.lastLap();
			if (last && !last.end) {
				last.end = Date.now();
			}
		},
		lapsCompleted() {
			return this.laps.filter(lap => lap.end);
		},
		totalLaps() {
			return this.laps.reduce((total, lap) => { 
				if (lap.end) {
					return total += lap.end - lap.start;
				}
				return total;
			}, 0);
		},
		isPlaying() {
			let last = this.lastLap();
			return last && !last.end;
		}
	}
});

export default Stopwatch;
export { Stopwatches };