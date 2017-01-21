angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    }).then(function (resp) {
      return resp.data;
    });
  };

});
