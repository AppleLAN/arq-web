

angular.module('customPage').directive('textDirective', function (textService) {
  return {
    restrict: 'E',
    templateUrl: 'js/templates/textDirective.html',
    controller: function ($scope, $timeout) {
      setTimeout(function () {
        jQuery('.post').addClass('hidden-div').viewportChecker({
          classToAdd: 'visible-div animated fadeIn',
        });
      }, 10);

      var vm = this;
      vm.textList = {};
      var promise = textService.getText();
      promise.then(function (data) {
        vm.textList = data.data;
      });

      $scope.vm = vm;
    },
  };
});
