'use strict';

angular.module('nwtNotesApp').controller('MainCtrl', function($scope, $http, BibleBook, BibleBookCh, $popover) {
	$scope.isCollapsed = true;
	$scope.activeNavbarItem = -1;

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

	$scope.asideTitle = "Choose the Bible Book and the chapter";

	$scope.filterBibleBooks = function(bBook) {
		$scope.selectedBook = bBook;
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
	$scope.aside = {
		title: "Aside Title",
		content: "Aside Content"
	};

	$scope.showChapter = function(chapter, element) {
		console.log('selected chapter: ' + chapter);
		$scope.content = {};
		$scope.searchCriteria = $scope.selectedBook.name + ' ' + chapter;
		var response = BibleBookCh.get({
			id : $scope.selectedBook._id,
			chapter : chapter
		}, function(response) {
			$scope.content.body = response.content;
			$scope.content.selectedBook = $scope.selectedBook;
			$scope.content.selectedCh = chapter;
		});
	}

	function getChaptersArray(noOfElemetns) {
		var array = new Array(noOfElemetns);
		for (var i = 0; i < noOfElemetns; i++) {
			array[i] = i + 1;
		}

		return array;
	}
})

.directive('rmPopovers', function($document, $rootScope, $timeout, $popover) {
	return {
		restrict : 'EA',
		link : function(scope, element, attrs) {
			var $element = $(element);
			$element.click(function() {
				$('.popover, .aside').each(function() {
					var $this = $(this);
					$this.scope().$hide();
				});
			});
		}
	}
});