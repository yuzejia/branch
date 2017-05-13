var app = angular.module("myApp",[]);
    app.controller("myFriend",["$scope",function ($scope) {
        $scope.lays = function () {
            var Hbody = window.screen.height ;
            $(".Friend .Fmodel").css({"height":Hbody,"display":"block"});
            $scope.lays2 = true;
            $(".Friend .lays").css({"bottom":0})
        };
        /*取消关注*/
        // $scope.cancelAttention = function () {
        //
        // }；
        /*取消底层弹框*/
        $scope.cancel = function () {
            $scope.lays2 = false;
            $(".Friend .Fmodel").css("display","none");
        }
    }]);