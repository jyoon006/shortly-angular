angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  // angular.extend($scope, $location, Links);
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink(function(data) {
      console.log('addlink data', data);
    });
  };
  
});
