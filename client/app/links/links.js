angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  angular.extend($scope, Links);
})
.factory('Links', function() {
  var data = [];

  return {
    data: data,
    getLinks: function() {
      
    }
  }
});


