const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSeriesSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  data: [Object],
});

const TimeSeriesModel = mongoose.model('TimeSeries', timeSeriesSchema);

module.exports = TimeSeriesModel;