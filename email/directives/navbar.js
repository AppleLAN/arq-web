(function () {
'use strict';
angular
.module('app')
.directive('navbar', function () {
  return {
    templateUrl: 'email/views/navbar.html',
    controller: function ($scope, $location) {
      var navbar = this;
      $scope.navbar = navbar;
    },
  };
});
})();
