'use strict';

angular.module('nwtNotesApp').service('BibleBook', function($resource) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	return $resource('/api/bible_book_codes/:id/:chapter', {
		id : '@_id'
	});
});
