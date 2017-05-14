var app = angular.module("myApp",[]);
    app.controller("Attention",["$scope",function ($scope) {
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
    
app.controller("myFriend",["$scope","$location",function($scope,$location){
	$scope.AttentionHref = function(path){
		console.info($location);
		var a = $location.absUrl();
		var aa = a.lastIndexOf("/");
		var aaa = a.substring(0,aa);
		var aaaa = aaa+"/friendAttention.html";
		console.log(window.location)
		window.location.href = aaaa;
		
	}
}])
