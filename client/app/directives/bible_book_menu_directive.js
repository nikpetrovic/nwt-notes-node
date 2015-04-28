angular.module('nwtNotesApp').directive('bbMenu', function() {
	$http.get('/api/bible_book_codes/').success(function(bibleBooks) {
		$scope.bibleBooks = bibleBooks;
	});

	function getChaptersArray(noOfElemetns) {
		var array = new Array(noOfElemetns);
		for (var i = 0; i < noOfElemetns; i++) {
			array[i] = i + 1;
		}

		return array;
	}

	return {
		restrict : 'EA',
		scope : {
			showChapter : function(chapter, element) {
				console.log('selected chapter: ' + chapter);
				content = {};
				searchCriteria = selectedBook.name + ' ' + chapter;
				var response = BibleBookCh.get({
					id : selectedBook._id,
					chapter : chapter
				}, function(response) {
					content.body = response.content;
					content.selectedBook = selectedBook;
					content.selectedCh = chapter;
				});
			},
			filterBibleBooks : function(bBook) {
				selectedBook = bBook;
				var chs = getChaptersArray(bBook.ch_no);
				chapters = chs;
			},
			content : {},
			searchCriteria : {},
			selectedBook : {},
			chapters : {},
			bibleBooks : $scope.bibleBooks
		}
	}
});