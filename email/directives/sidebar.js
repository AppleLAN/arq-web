(function () {
'use strict';
angular
.module('app')
.directive('sidebar', function () {
  return {
    templateUrl: 'email/views/sidebar.html',
    controller: function ($scope, $timeout) {
      var sidebar = this;
      $scope.sidebar = sidebar;
    },
  };
});
})();
