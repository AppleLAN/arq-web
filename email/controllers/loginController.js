(function () {
'use strict';
angular
.module('app')
.controller('loginController', function ($scope, $location, emailService) {
  var login = {};
  login.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
  login.goTo = function() {
    $location.url('');
  };
  login.logIn = function () {
    emailService.login(login.userInfo);
    $location.url('');
  };
  login.test="hola";
  $scope.login = login;
});
})();
