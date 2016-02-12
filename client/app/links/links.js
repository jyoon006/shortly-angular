angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  
  $scope.data = [];

  $scope.getLinks = function() {
    Links.getLinks(function(data) {
      console.log('getlinks from linkcontroller', data);
      $scope.data.links = data;
    });

  };
  $scope.getLinks();
});



