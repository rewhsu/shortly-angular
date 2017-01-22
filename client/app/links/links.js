angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $window, Auth) {
  // Your code here
  $scope.data = {};
  $scope.isAuth = Auth.isAuth();
  Links.getAll().then(function(result) {
    $scope.data.links = result;
  });
  $scope.data.myData = ['fakedata', 'fakedata2'];

});