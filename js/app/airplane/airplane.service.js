(function (){
    "use strict";
    angular.module("app.airplane").service("airplaneService", airplaneService);
 
    airplaneService.$inject = ["$http"];
 
       function airplaneService($http) {

        var airplanes = "";
      
 
       this.getAirplanes= function(latitude, longitude){
        /*$http({
                   method: 'GET',
                    url: 'https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat='+ latitude +'&lng='+longitude
                 }).then(function successCallback(response) {
                         return response.data;
                       }, function errorCallback(response) {
                         return response;
                   });*/
             $http.get("airplanes.json").then(function successCallback(response) {
               airplanes = response.data;
            }, function errorCallback(response) {
                return response;
           });
       };

       this.getResult = function(){
         return airplanes;
       }
    }
 
 })();
 