angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link) {
    Links.addOne({url: link});
  };

});
