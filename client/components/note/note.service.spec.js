'use strict';

describe('Service: note', function () {

  // load the service's module
  beforeEach(module('nwtNotesApp'));

  // instantiate service
  var note;
  beforeEach(inject(function (_note_) {
    note = _note_;
  }));

  it('should do something', function () {
    expect(!!note).toBe(true);
  });

});
