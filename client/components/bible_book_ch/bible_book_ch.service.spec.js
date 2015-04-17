'use strict';

describe('Service: bibleBookCh', function () {

  // load the service's module
  beforeEach(module('nwtNotesApp'));

  // instantiate service
  var bibleBookCh;
  beforeEach(inject(function (_bibleBookCh_) {
    bibleBookCh = _bibleBookCh_;
  }));

  it('should do something', function () {
    expect(!!bibleBookCh).toBe(true);
  });

});
