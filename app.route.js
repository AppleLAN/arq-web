var app = angular.module('app.routes',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: "/email/views/email-main.html",
      controller: "emailController",
    })
    .when('/email',{
      templateUrl: "/email/views/personal-email.html",
      controller: "personalEmailController",
    })
}]);
