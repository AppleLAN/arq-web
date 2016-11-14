(function () {
'use strict';
angular
.module('app')
.controller('registerController', function ($scope, $location) {
  var register = {};
  register.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
  register.goTo = function() {
    $location.url('');
  };
  register.test="hola";
  $scope.register = register;
});
})();
