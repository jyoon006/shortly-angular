angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  
  
  $scope.addLink = function(link) {
    if(Links.isValidUrl(link.url)) {
      $scope.isLoading = true;
      Links.post(link)
      .then(function(resp) {
        $scope.isLoading = false;
        $scope.link = '';
      })
      .catch(function(e) {
        console.error(e);
      });
    }
    else {
      console.error("Invalid Url");
    }
  };
  
});
