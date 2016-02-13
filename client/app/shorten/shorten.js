angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  
  
  $scope.addLink = function(link) {
    if(Links.isValidUrl(link.url)) {
      $scope.isLoading = true;
      console.log($scope.isLoading);
      Links.post(link)
      .then(function(resp) {
        console.log(resp);
        $scope.isLoading = false;
        $scope.link = '';
      })
      .catch(function(e) {
        console.log(e);
      });
    }
    else {
      console.error("Invalid Url");
    }
  };
  
});
