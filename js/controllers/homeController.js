var app = angular.module('customPage');
app.controller('homeController', function ($scope, textService) {
  var vm = this;
  $scope.array = ['sign out','sign in','options'];
});
