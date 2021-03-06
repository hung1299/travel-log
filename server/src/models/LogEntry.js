const mogoose = require('mongoose');

const { Schema } = mogoose;

const requiredNumber = {
  type: Number,
  required: true,
};

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  comment: String,
  image: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90,
  },
  longtitude: {
    ...requiredNumber,
    min: -180,
    max: 180,
  },
  visitDate: {
    type: Date,
    required: true,
  },
},
{
  timestamps: true,
});

const LogEntry = mogoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
