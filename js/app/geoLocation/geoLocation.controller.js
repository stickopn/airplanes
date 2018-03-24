(function (){
    "use strict";
 
     angular.module("app.geoLocation").controller("geoLocationController", geoLocationController);
 
     geoLocationController.$inject = ["$scope","$geolocation"];
 
     function geoLocationController($scope, $geolocation) {
 
         var vm = this;

         vm.showLocation = null;
         vm.showHideLocation = showHideLocation;
         vm.latitude = 0.0;
         vm.longitude = 0.0;
         $scope.myPosition = null;
 
         activate();
 
        function activate(){
            $geolocation.getCurrentPosition({
                timeout: 60000
             }).then(function(position) {
                $scope.myPosition = position;
                if($scope.myPosition != null ){
                    if($scope.myPosition.coords != null){
                        if($scope.myPosition.coords.latitude != null && $scope.myPosition.coords.longitude != null){
                            vm.latitude =  $scope.myPosition.coords.latitude;
                            vm.longitude =  $scope.myPosition.coords.longitude;
                        }
                    }
                }
             });
        }

        function showHideLocation(setIsVisible){
            vm.showLocation = setIsVisible;
        }

    }
 })();

 
 