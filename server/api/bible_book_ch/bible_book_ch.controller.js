'use strict';

var _ = require('lodash');
var BibleBookCh = require('./bible_book_ch.model');

// Get list of bible_book_chs
exports.index = function(req, res) {
  BibleBookCh.find(function (err, bible_book_chs) {
    if(err) { return handleError(res, err); }
    return res.json(200, bible_book_chs);
  });
};

// Get a single bible_book_ch
exports.show = function(req, res) {
  BibleBookCh.findById(req.params.id, function (err, bible_book_ch) {
    if(err) { return handleError(res, err); }
    if(!bible_book_ch) { return res.send(404); }
    return res.json(bible_book_ch);
  });
};

//Get bible book chapter
exports.chapter = function(req, res) {
	BibleBookCh.findOne({order_no : 1}, function(err, bible_book_ch) {
		if(err) { return handleError(res, err); }
    if(!bible_book_ch) { return res.send(404); }
    return res.json(bible_book_ch);
	});
}

// Creates a new bible_book_ch in the DB.
exports.create = function(req, res) {
  BibleBookCh.create(req.body, function(err, bible_book_ch) {
    if(err) { return handleError(res, err); }
    return res.json(201, bible_book_ch);
  });
};

// Updates an existing bible_book_ch in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  BibleBookCh.findById(req.params.id, function (err, bible_book_ch) {
    if (err) { return handleError(res, err); }
    if(!bible_book_ch) { return res.send(404); }
    var updated = _.merge(bible_book_ch, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, bible_book_ch);
    });
  });
};

// Deletes a bible_book_ch from the DB.
exports.destroy = function(req, res) {
  BibleBookCh.findById(req.params.id, function (err, bible_book_ch) {
    if(err) { return handleError(res, err); }
    if(!bible_book_ch) { return res.send(404); }
    bible_book_ch.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}