(function () {
'use strict';
angular
.module('app')
.directive('sidebar', function () {
  return {
    templateUrl: 'email/views/sidebar.html',
    controller: function ($scope, $timeout) {
      var sidebar = this;
      sidebar.folders = [];
      sidebar.showAddInput = function () {
        sidebar.showFolder = true;
      }
      sidebar.newFolderName = "";
      sidebar.addFolder =function() {
        var folder = {
          "name" : sidebar.newFolderName,
          "emails": [{

          }]
        };
        sidebar.showFolder = false;
        sidebar.folders.push(folder);
      }
      $scope.sidebar = sidebar;
    },
  };
});
})();
