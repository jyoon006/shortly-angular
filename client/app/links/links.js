angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  
  $scope.data = [];

  $scope.getLinks = function() {
    Links.get()
    .then(function(resp) {
      console.log(resp);
      $scope.data.links = resp.data;
      console.log($scope.data.links);
    });
      
  };
  $scope.getLinks();
});



