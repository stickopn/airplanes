(function (){
    "use strict";
 
     angular.module("app.airplane").controller("airplaneController", airplaneController);
 
     airplaneController.$inject = ["$scope","airplaneService", "$state", "$interval"];
 
     function airplaneController($scope, airplaneService, $state,  $interval) {
 
         var vm = this;
         vm.getAirplanes = getAirplanes;
         var latitude = $state.params.latitude;
         var longitude = $state.params.longitude;
         vm.westOrEast = westOrEast;
         vm.showInfo = showInfo;
         vm.isInfo = false;
         vm.showForId = null;
         $scope.airplanes = null;
        
         activate();
 
        function activate(){ 
            getAirplanes();
        }
            function getAirplanes(){
              if (latitude != undefined && longitude != undefined) {
                  airplaneService.getAirplanes(latitude, longitude);
                  $interval(airplanesList, 1000);  
               }
            }

            function airplanesList(){
                $scope.airplanes = airplaneService.getResult();
                airplaneService.getAirplanes(latitude, longitude);
            }

            function westOrEast(lon){
                if(lon > 0){
                    return 'east';
                }
                return 'west';
            }

            function showInfo(Id){
                vm.isInfo = !vm.isInfo;
                vm.showForId = Id;
            }
        }
 })();