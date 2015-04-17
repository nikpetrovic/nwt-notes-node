'use strict';

angular.module('nwtNotesApp').service('BibleBookCh', function($resource) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	return $resource('/api/bible_book_chs/:id/:chapter', {
		id : '@_id'
	});
});
