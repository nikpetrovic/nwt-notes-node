'use strict';

describe('Service: bibleBook.service', function () {

  // load the service's module
  beforeEach(module('nwtNotesApp'));

  // instantiate service
  var bibleBook.service;
  beforeEach(inject(function (_bibleBook.service_) {
    bibleBook.service = _bibleBook.service_;
  }));

  it('should do something', function () {
    expect(!!bibleBook.service).toBe(true);
  });

});
