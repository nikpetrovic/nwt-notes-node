'use strict';

angular.module('nwtNotesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    
    $scope.chapters = [1,2,3,444,5,6,7,8,9,10,141,12, 13, 14];

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

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
});