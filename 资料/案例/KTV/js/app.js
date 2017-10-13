/**
 * Created by 123 on 2017/4/18.
 */
var App = angular.module("app",['ionic']);
App.controller("myCtrl",["$scope","$stateParams","$ionicHistory","$state",function($scope,$stateParams,$ionicHistory,$state){

    $scope.goback = function(){
        $ionicHistory.goBack()
    }
    $scope.searchs = function(){
        $state.go("tabs.searchs")
    }

    $scope.brandID = $stateParams.id
    console.log($scope.brandID)

}])

//自定义指令  取消tabs   ---------------------------------------------------
App.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });
            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
});
App.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("tabs",{
            url:"/tabs",
            templateUrl:"template/tabs.html"
        })
        .state("tabs.home",{
            url:"/home",
            views:{
                "home":{
                    templateUrl:"template/home.html"
                }
            }
        })
            //搜索----------------------------------------------------------
        .state("tabs.searchs",{
            url:"/searchs",
            views:{
                "home":{
                    templateUrl:"template/eachs.html"
                }
            }
        })
        //商品列表--------------------------------------------------------------------------------
        .state("tabs.Splb",{
            url:"/Splb",
            views:{
                "home":{
                    templateUrl:"template/shangpinliebiao.html"
                }
            }
        })
        .state("tabs.spxq",{
            url:"/spxq",
            views:{
                "home":{
                    templateUrl:"template/shangpinxingxi.html"
                }
            }
        })
          //经营管理--------------------------------------------------------------
        .state("tabs.Jygl",{
            url:"/Jygl",
            views:{
                "home":{
                    templateUrl:"template/jingyingguanli.html"
                }
            }
        })
        .state("tabs.Gsjs",{
            url:"/Gsls",
            views:{
                "home":{
                    templateUrl:"template/gongsijieshao.html"
                }
            }
        })



        //        账户余额--------------------------------------------------------------------
        .state("tabs.ye",{
            url:"/ye",
            views:{
                "home":{
                    templateUrl:"template/zhanghuyue.html"
                }
            }
        })
        //        订单验证---------------------------------------------------------------------
        .state("tabs.user",{
            url:"/user",
            views:{
                "users":{
                    templateUrl:"template/shangjiatuangou.html"
                }
            }
        })
        .state("tabs.yanzheng",{
            url:"/yanzheng",
            views:{
                "users":{
                    templateUrl:"template/yanzhengdingdan.html"
                }
            }
        })

        .state("tabs.yanzheng.yanZ1",{
            url:"/yanZ1",
            views:{
                "D1yanzheng":{
                    templateUrl:"template/yanzheng/yanZ1.html"
                }
            }
        })
        .state("tabs.yanzheng.yanZ2",{
            url:"/yanZ2",
            views:{
                "D1yanzheng":{
                    templateUrl:"template/yanzheng/yanZ2.html"
                }
            }
        })
        .state("tabs.yzjg",{
            url:"/yzjg",
            views:{
                "users":{
                    templateUrl:"template/yanzhengjieguo.html"
                }
            }
       })
            // 我的银行卡---------------------------------------
        .state("tabs.creditCard",{
            url:"/creditCard",
            views:{
                "users":{
                    templateUrl:"template/xuanzeyinhangka.html"
                }
            }
        })
        .state("tabs.addCard",{
            url:"/addCard",
            views:{
                "users":{
                    templateUrl:"template/tianjiayinhangkas.html"
                }
            }
        })

          //   我的店址=-------------------------------------------
        .state("tabs.address",{
            url:"/address",
            views:{
                "users":{
                    templateUrl:"template/wodedianzhi.html"
                }
            }
        })

        //         订单管理--------------------------------------------------------------------
        .state("tabs.Order",{
            url:"/Order",
            views:{
                "users":{
                    templateUrl:"template/dingdanguanli.html"
                }
            }
        })
        .state("tabs.Order.quanbu",{
            url:"/quanbu?id",
            views:{
                "D2yanzheng":{
                    templateUrl:"template/dingDs.html"
                }
            }
        })
        //消息  -----------------------------------
        .state("tabs.information",{
            url:"/information",
            views:{
                "information":{
                    templateUrl:"template/xiaoxiliebiao.html"
                }
            }
        })
        .state("tabs.message",{
            url:"/message",
            views:{
                "information":{
                    templateUrl:"template/yushuiliaotian.html"
                }
            }
        })
    $urlRouterProvider.otherwise("/tabs")
}])
App.controller("yanzhengCon",["$scope",function($scope){


}])
App.controller("myEach",["$scope","$http",function($scope,$http){
    $scope.eachF = function(){
        $scope.eachX = true
    }
    $scope.eachB = function(){
        $scope.eachX = false
        console.log($scope.texts)
    }
    $scope.sousuo = function(){
        $scope.texts = $scope.texts
        $http.jsonp("https://suggest.taobao.com/sug?code=utf-8&callback=JSON_CALLBACK&q="+$scope.texts)
            .success(function(data){
                $scope.data = data
            })
    }
    $scope.getT = function(){
        https://s.taobao.com/api?_ksTS=1492871796915_261&callback=jsonp262&ajax=true&m=customized&rn=2fa052d4d9f35d71e07e592774c953bb&initiative_id=tbindexz_20170422&ie=utf8&spm=a21bo.50862.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=%E5%AE%89%E5%85%A8%E8%A3%A4&suggest=history_1&_input_charset=utf-8&wq=a
            console.log(this.a[0])
    }
}])
App.controller("mySpxq",["$scope","$ionicPopup","$timeout",function($scope,$ionicPopup,$timeout){
    $scope.numS = 0
    if($scope.numS==false){
        $scope.numS = 0
    }
    $scope.showGWC = function() {
        $scope.data = {}

        // 一个精心制作的自定义弹窗
        var myPopup = $ionicPopup.show({
            template: '<div class="text-center"><img src="images/shangjia/S12.png" alt=""><p>添加购物车成功</p></div>',
            title: '<img src="" alt="">',
            subTitle: '',
            scope: $scope,
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        $timeout(function () {
            myPopup.close(); //由于某种原因3秒后关闭弹出
//                $scope.gwcon=false
        }, 2000);
    }
}])