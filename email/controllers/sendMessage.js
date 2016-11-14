(function () {
'use strict';
angular
.module('app')
.controller('sendMessageController', function ($scope, $location) {
  var sendMessage = {};
  sendMessage.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
  sendMessage.goTo = function() {
    $location.url('');
  };
  sendMessage.test="hola";
  $scope.sendMessage = sendMessage;
});
})();
