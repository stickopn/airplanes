(function (){
    "use strict";
    angular.module("app").config(appConfig);
 
    function appConfig($stateProvider, $urlRouterProvider){
 
    $stateProvider
     .state('location', {
       url: "/location",
       templateUrl: './templates/geoLocation/location.html',
       controller: 'geoLocationController',
       controllerAs: 'geoContr'
     }).state('airplanes', {
      url: "/airplanes/:latitude/:longitude",
      templateUrl: './templates/airplane/airplane.html',
      controller: 'airplaneController',
      controllerAs: 'airContr'
    });
     $urlRouterProvider.otherwise("/location");
    }
 })();