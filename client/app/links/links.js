angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $window) {
  // Your code here
  $scope.data = {};

  Links.getAll().then(function(result) {
    $scope.data.links = result;
  });
  // $scope.data.myData = ['fakedata', 'fakedata2'];

});