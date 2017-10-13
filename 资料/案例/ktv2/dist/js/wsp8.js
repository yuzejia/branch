 var app = angular.module('app', ["ionic"]);
        
        app.controller("con",function ($scope) {
            $scope.data = {
                current: "1" 
            };
            $scope.actions =
            {
                setCurrent: function (param) {
                    $scope.data.current = param;
                }
            }
        })