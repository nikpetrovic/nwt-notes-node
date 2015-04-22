'use strict';

angular.module('nwtNotesApp').controller('MainCtrl', function($scope, $http, BibleBook, BibleBookCh) {
	$scope.isCollapsed = true;
	$scope.activeNavbarItem = -1;

	$http.get('/api/mains').success(function(awesomeThings) {
		$scope.awesomeThings = awesomeThings;
	});

	$http.get('/api/bible_book_codes/').success(function(bibleBooks) {
		$scope.bibleBooks = bibleBooks;
	});

	function getTokenfieldSource(bibleBooks) {
		var source = new Array(bibleBooks.length);
		for (var i = 0; i < bibleBooks.length; i++) {
			source[i] = {
				label : bibleBooks[i].name,
				value : bibleBooks[i]._id
			};
		}
		return source;
	}

	$scope.asideTitle = "Aside Title";
	$scope.asideContent = "SOME CONTENT";
	$scope.apopover = {
		title : "Popover Title",
		content : "POPOVER CONTENT"
	};

	$scope.filterBibleBooks = function(bBook) {
		$scope.selectedBook = bBook;
		console.log('fired filterBibleBooks: ' + bBook.name + ', tokenfield: ' + $scope.tokenField);
		if (bBook._id === $scope.tokenField && $scope.tokenField) {
			$scope.chapters = [];
			$scope.tokenField = '';
		} else {
			var chs = getChaptersArray(bBook.ch_no);
			$scope.chapters = chs;
		}
	}

	$scope.someValue = true;
	$scope.animate = true;

	$scope.showChapter = function(chapter) {
		$scope.showContentClass = '';
		console.log($scope.tokenField + ': ' + chapter);
		$scope.content = {};
		console.log(JSON.stringify($scope.selectedBook));
		$scope.searchCriteria = $scope.selectedBook.name + ' ' + chapter;
		var response = BibleBookCh.get({
			id : $scope.selectedBook._id,
			chapter : chapter
		}, function(response) {
			$scope.content.body = response.content;
			$scope.content.selectedBook = $scope.selectedBook;
			$scope.content.selectedCh = chapter;
			$scope.showContentClass = 'animated fadeIn';
		});
	}

	function getChaptersArray(noOfElemetns) {
		var array = new Array(noOfElemetns);
		for (var i = 0; i < noOfElemetns; i++) {
			array[i] = i + 1;
		}

		return array;
	}
});