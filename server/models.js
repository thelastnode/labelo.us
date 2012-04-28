var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Image = new Schema({
  data: {
    type: Buffer,
    required: true,
  },
  labels: [{
    name: String,
    weight: Number,
  }],
});

exports.Image = mongoose.model('Image', Image);
