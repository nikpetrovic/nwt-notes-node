'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BibleBookSchema = new Schema({
  ch_no: Number,
  name: String,
  order_no: Number,
  short_name: String
});

module.exports = mongoose.model('BibleBook', BibleBookSchema, 'tbl_bible_book_code');