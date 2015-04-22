'use strict';

var _ = require('lodash');
var BibleBookCode = require('./bible_book_code.model');

// Get list of bible_books
exports.index = function(req, res) {
  BibleBookCode.find(function (err, bible_books) {
    if(err) { return handleError(res, err); }
    return res.json(200, bible_books);
  });
};

// Get a single bible_book
exports.show = function(req, res) {
  BibleBookCode.findById(req.params.id, function (err, bible_book) {
    if(err) { return handleError(res, err); }
    if(!bible_book) { return res.send(404); }
    return res.json(bible_book);
  });
};

// Creates a new bible_book in the DB.
exports.create = function(req, res) {
  BibleBookCode.create(req.body, function(err, bible_book) {
    if(err) { return handleError(res, err); }
    return res.json(201, bible_book);
  });
};

// Updates an existing bible_book in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  BibleBookCode.findById(req.params.id, function (err, bible_book) {
    if (err) { return handleError(res, err); }
    if(!bible_book) { return res.send(404); }
    var updated = _.merge(bible_book, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, bible_book);
    });
  });
};

// Deletes a bible_book from the DB.
exports.destroy = function(req, res) {
  BibleBookCode.findById(req.params.id, function (err, bible_book) {
    if(err) { return handleError(res, err); }
    if(!bible_book) { return res.send(404); }
    bible_book.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}