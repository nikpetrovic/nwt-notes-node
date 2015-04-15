'use strict';

angular.module('nwtNotesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    
    $scope.bibleBooks = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth'];

    $http.get('/api/mains').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };
    
    $scope.filterBibleBooks = function(bBook) {
	if ($scope.bibleBookFilter != null && $scope.bibleBookFilter.length > 0) {
	    $scope.bibleBookFilter = '';
	    $scope.chapters = [];
	} else {
	    $scope.bibleBookFilter = bBook;
	    $scope.chapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
	}
    }

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
});