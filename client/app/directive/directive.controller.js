'use strict'

angular.module('nwtNotesApp').controller('DirectiveCtrl', function($scope, $http) {
	$scope.hello = "Hello Nikola";

	$http.get('/api/bible_book_codes/').success(function(bibleBooks) {
		$scope.bibleBooks = bibleBooks;
	});
	
	$scope.displayContent = function(content) {
		$scope.content = content;
	};
});