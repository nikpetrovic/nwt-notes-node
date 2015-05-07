angular.module('nwtNotesApp').directive('nwtnBbMenu', function() {
	function getChaptersArray(noOfElemetns) {
		var array = new Array(noOfElemetns);
		for (var i = 0; i < noOfElemetns; i++) {
			array[i] = i + 1;
		}

		return array;
	}

	return {
		restrict : 'A',
		scope : {
			bibleBooks : '=',
			onChSelected : '&',
			content : '=',
			noOfBooksInRow : '=?',
			container : '@?'
		},
		controller : [ '$scope', '$http', 'BibleBookCh', function($scope, $http, BibleBookCh) {
			$scope.container = $scope.container || 'body';
			$scope.noOfBooksInRow = $scope.noOfBooksInRow || 6;
			$scope.bookInRowIndex = getChaptersArray($scope.noOfBooksInRow);

			$scope.showChapter = function(chapter, element) {
				$scope.selectedCh = chapter;
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

			$scope.filterBibleBooks = function(bBook) {
				$scope.selectedBook = bBook;
				var chs = getChaptersArray(bBook.ch_no);
				$scope.chapters = chs;
			}

			$scope.getBibleBookGroupName = function(bibleBook) {
				if (!bibleBook) {
					return;
				}

				if (bibleBook.order_no < 6) {
					return 'tora';
				} else if (bibleBook.order_no < 18) {
					return 'ihist';
				} else if (bibleBook.order_no < 23) {
					return 'psalms';
				} else if (bibleBook.order_no < 28) {
					return 'prophets';
				} else if (bibleBook.order_no < 40) {
					return 'small-prophets';
				} else if (bibleBook.order_no < 44) {
					return 'gospels';
				} else if (bibleBook.order_no < 45) {
					return 'acts';
				} else if (bibleBook.order_no < 58) {
					return 'letters';
				} else if (bibleBook.order_no < 66) {
					return 'finalbooks';
				} else if (bibleBook.order_no < 67) {
					return 'revelation';
				}
			}

			$scope.getPopoverHorizontalPosition = function(bookInRowPosition) {
				if (bookInRowPosition < ($scope.noOfBooksInRow / 3)) {
					return '-left';
				} else if (bookInRowPosition < (2 * $scope.noOfBooksInRow / 3)) {
					return '';
				} else {
					return '-right';
				}
			}
		} ],

		templateUrl : 'app/directives/bible_book_menu/bible_book_menu_directive.html'
	}
});