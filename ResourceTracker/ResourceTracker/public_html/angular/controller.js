/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myApp', ['ngRoute']);

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('AndroidController', function($scope) {
  $scope.message = 'Hello from AndroidController';
});

app.controller('KonyController', function($scope) {
  $scope.message = 'Hello from KonyController';
});
app.controller('HybridController', function($scope) {
  $scope.message = 'Hello from HybridController';
});
app.controller('XamarinController', function($scope) {
  $scope.message = 'Hello from XamarinController';
});
app.controller('AngularController', function($scope) {
  $scope.message = 'Hello from AngularController';
});

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/android', {
    templateUrl : 'display.html',
    controller  : 'AndroidController'
  })

  .when('/kony', {
    templateUrl : 'pages/home.html',
    controller  : 'KonyController'
  })
  .when('/xamarin', {
    templateUrl : 'pages/home.html',
    controller  : 'XamarinController'
  })
  .when('/angular', {
    templateUrl : 'pages/home.html',
    controller  : 'AngularController'
  })
  .when('/hybrid', {
    templateUrl : 'pages/home.html',
    controller  : 'HybridController'
  })
  

  .otherwise({redirectTo: '/'});
});