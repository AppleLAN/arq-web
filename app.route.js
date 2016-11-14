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
    .when('/register',{
      templateUrl: "/email/views/register.html",
      controller: "registerController",
    })
    .when('/login',{
      templateUrl: "/email/views/login.html",
      controller: "loginController",
    })
    .when('/sendMessage',{
      templateUrl: "/email/views/send-message.html",
      controller: "sendMessageController",
    })

}]);
