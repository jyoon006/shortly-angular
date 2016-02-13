angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  
  $scope.addLink = function(link) {
    if(Links.isValidUrl(link.url)) {
      Links.post(link)
      .then(function(resp) {
        console.log(resp);
        $scope.link = '';
      });
    }
    else {
      console.err("Invalid Url");
    }
  };
  
});
