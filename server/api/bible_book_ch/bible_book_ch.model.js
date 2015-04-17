'use strict';

var mongoose = require('mongoose'), Schema = mongoose.Schema;

var BibleBookChSchema = new Schema({
	order_no : Number,
	content : String
});

module.exports = mongoose.model('BibleBookCh', BibleBookChSchema);