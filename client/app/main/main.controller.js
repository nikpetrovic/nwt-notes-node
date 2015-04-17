'use strict';

angular.module('nwtNotesApp').controller('MainCtrl', function($scope, $http, BibleBook, BibleBookCh) {
	$scope.awesomeThings = [];

	$http.get('/api/mains').success(function(awesomeThings) {
		$scope.awesomeThings = awesomeThings;
	});

	$http.get('/api/bible_book_codes/').success(function(bibleBooks) {
		$scope.bibleBooks = bibleBooks;
		
		$('.tokenfield').tokenfield({
			autocomplete : {
				source : getTokenfieldSource(bibleBooks),
				delay : 50
			},
			showAutocompleteOnFocus : true
		})
	});
	
	function getTokenfieldSource(bibleBooks) {
		var source = new Array(bibleBooks.length);
		for (var i = 0; i < bibleBooks.length; i++) {
			source[i] = { label : bibleBooks[i].name, value : bibleBooks[i]._id };
		}
		return source;
	}

	$scope.filterBibleBooks = function(bBook) {
		console.log('fired filterBibleBooks: ' + bBook.name + ', tokenfield: ' + $scope.tokenField);
		if (bBook._id === $scope.tokenField && $scope.tokenField) {
			$scope.chapters = [];
			$('.tokenfield').tokenfield('setTokens', {});
			$scope.tokenField = '';
		} else {
			var chs = getChaptersArray(bBook.ch_no);
			$scope.chapters = chs;
			$('.tokenfield').tokenfield('setTokens', [{ value: bBook._id, label: bBook.name }]);
		}
	}
	
	$scope.showChapter = function(chapter) {
		console.log($scope.tokenField + ': ' + chapter);
		$scope.content = {};
		var selectedBook = $scope.bibleBooks.filter(function(element) {
			if (element._id == $scope.tokenField) {
				return element;
			}
		});
		console.log(JSON.stringify(selectedBook));
		$scope.searchCriteria = selectedBook[0].name + ' ' + chapter;
		var response = BibleBookCh.get({id: $scope.tokenField, chapter: chapter}, function(response) {
			$scope.content.body = response.content;
		});
	}
	
	function getChaptersArray(noOfElemetns) {
		var array = new Array(noOfElemetns);
		for (var i = 0; i<noOfElemetns; i++) {
			array[i] = i+1;
		}
		
		return array;
	}
});