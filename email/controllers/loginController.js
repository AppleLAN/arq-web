(function () {
'use strict';
angular
.module('app')
.controller('loginController', function ($scope, $location) {
  var login = {};
  login.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
  login.goTo = function() {
    $location.url('');
  };
  login.test="hola";
  $scope.login = login;
});
})();
