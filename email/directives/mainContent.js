(function () {
'use strict';
angular
.module('app')
.directive('mainContent', function () {
  return {
    templateUrl: 'email/views/main-content.html',
    controller: function ($scope, $location) {
      var content = this;
      content.emails = [
        {
          "title": "Titulo 1",
          "description": "Descripcion general del email que se va a mostrar en este campo, ocupando una porcion de la pantalla",
          "date": "Nov 1"
        },
        {
          "title": "Titulo 2",
          "description": "Descripcion general del email que se va a mostrar en este campo, ocupando una porcion de la pantalla",
          "date": "Nov 2"
        },
        {
          "title": "Titulo 3",
          "description": "Descripcion general del email que se va a mostrar en este campo, ocupando una porcion de la pantalla",
          "date": "Nov 3"
        },
        {
          "title": "Titulo 4",
          "description": "Descripcion general del email que se va a mostrar en este campo, ocupando una porcion de la pantalla",
          "date": "Nov 4"
        },

      ]
      $scope.content = content;
    },
  };
});
})();
