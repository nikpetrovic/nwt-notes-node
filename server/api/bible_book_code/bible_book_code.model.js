'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BibleBookCodeSchema = new Schema({
  ch_no: Number,
  name: String,
  order_no: Number,
  short_name: String
});

module.exports = mongoose.model('BibleBookCode', BibleBookCodeSchema);