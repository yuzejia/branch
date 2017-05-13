/**
 * Created by Administrator on 2017/4/20 0020.
 */
var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    /*点击按钮开始播放*/
    $scope.indexInfo = {
        showPoster: true, /*展示视屏封面*/
        showMeeting: false, /*显示约见律师蒙层*/
        showCompleteMeeting: false, /*显示约见付费后的蒙层*/
        showPutQuestion: false, /*显示付费提问蒙层*/
        showCompleteQuestion: false, /*显示提问付费后的蒙层*/
        sendMessage:　false, /*打开软键盘显示留言框*/
        messageBoxAnimate: true, /*默认输入框缩成圆*/
        showShare: false, /*显示分享弹出层*/
        content: '' /*评论内容*/
    };
    /*开始播放视频*/
    $scope.startPlay = function () {
        $scope.indexInfo.showPoster = false;
        $('video').get(0).play();
        /*弹窗公告*/
        $('.topTwo').removeClass('hide').removeClass('bounceOutLeft').addClass('bounceInRight');
        var topWatch = $('.main .topTwo .topTwo-watch');
        var sysTips = $('#systemTips');
        topWatch.removeAttr('style');
        if (topWatch.width() > sysTips.width()) {
            topWatch.animate({
                'left': - (sysTips.width() + sysTips.position().left) / 50 - 0.24 + 'rem'
            }, 10000, function () {
                $('.topTwo').removeClass('bounceInRight').addClass('bounceOutLeft');
                topWatch.css({
                    left: '0rem',
                    overflow: 'hidden'
                })
            });
        } else {
            topWatch.animate({
                'left': - sysTips.width() / 50 - 0.5 + 'rem'
            }, sysTips.width() * 15, function () {
                $('.topTwo').removeClass('bounceInRight').addClass('bounceOutLeft');
                topWatch.css({
                    left: '0rem',
                    overflow: 'hidden'
                })
            });
        }

    };


    /*当为安卓机时，让输入框增加一输入框的高度*/
    $scope.SendFocus = function () {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        if(isAndroid){
            $('.comment-input.comment-input2').css("bottom",0.7+"rem")
        }
    };
    /*打开发布评论框*/
    $scope.sendMessage = function () {
        $('.comment-input.input-animate').hide();
        $scope.indexInfo.sendMessage = true;
        $timeout(function () {
            $('.comment-input.comment-input2 .sendMessage').focus();
            $('.comment-input.comment-input2').css({"position":"fixed"});
            $scope.SendFocus();
        }, 500);

    };
    $('.comment-input.comment-input2 .sendMessage').focus(function () {
        $('.comment-input.comment-input2').css({"position":"fixed"});
        $('.comment-input.comment-input2').css("bottom",0.7+"rem");
    });
    /*当输入框失去焦点*/
    $('.comment-input.comment-input2 .sendMessage').blur(function (){
        $('.comment-input.comment-input2').css({"position":"absolute","bottom":"0"});
        if($('.comment-input.comment-input2').css("bootom")==0){

        }
    });


    /*设置点击输入框以外的东西让输入框消失*/
    $scope.setInput = function () {
        if ($scope.indexInfo.sendMessage = true) {
            $scope.indexInfo.sendMessage = false;
            $('.comment-input.input-animate').show();
        };

    };

    $scope.setInput2 = function () {
        if ($scope.indexInfo.sendMessage = true) {
            $scope.indexInfo.sendMessage = false;
            $('.comment-input.input-animate').show();
        }
    };

    /*发布评论*/
    $scope.hideMessageBox = function () {
        $scope.indexInfo.content = '';
        $scope.indexInfo.sendMessage = false;
        $('.comment-input.input-animate').show();
    };

    /*点击分享，显示分享弹出层*/
    $scope.makeShare = function () {
        $scope.indexInfo.showShare = true;
    };

    /*取消保存图片*/
    $scope.goBackSave = function () {
        if ($scope.indexInfo.showShare) {
            $scope.indexInfo.showShare = false;
        }
    };

    /*保存分享图片*/
    $scope.saveImg = function () {
        layer.open({
            content: '保存成功',
            skin: 'msg',
            time: 1 //1秒后自动关闭
        });
        $timeout(function () {
            $scope.indexInfo.showShare = false;
        }, 1000);
    };

    /*点击爱心动画*/
    $scope.makeSupport = function () {
        var x = 10;
        var y = 100;
        var num = Math.floor(Math.random() * 3 + 1);
        var index=$('.action-animate').children('img').length;
        var rand = parseInt(Math.random() * (x - y + 1) + y);

        $(".action-animate").append("<img src=''>");
        $('.action-animate img:eq(' + index + ')').attr('src','img/'+num+'.png');
        var imgItem = $('.action-animate img:last-child');
        imgItem.stop().animate({
            bottom:"4.66rem",
            opacity:"0",
            right: rand
        },2000, 'linear', function () {
            $(this).remove();
        });
    };

    /*点击礼物*/
    $scope.makeGift = function () {
        if ($scope.indexInfo.messageBoxAnimate) {
            $('.action-order, .action-suggestion, .action-support').hide();
            $('.action-gift').animate({'right': '0', 'bottom': '0.2rem'});
            $('.bottom-action.giftArea').removeClass('hide').removeClass('bounceOutRight').addClass('bounceInRight');
            $('.comment-input.input-animate').css({
                'animation': 'circle1 500ms ease',
                'animation-fill-mode' : 'forwards'
            }).find('.input-text-wrap').css({
                'animation': 'circle2 500ms ease',
                'animation-fill-mode' : 'forwards'
            }).find('input').css({
                'animation': 'circle3 500ms ease',
                'animation-fill-mode' : 'forwards'
            });
            $('.comment-input.input-animate .input-img').css({
                'animation': 'circle4 500ms ease',
                'animation-fill-mode' : 'forwards'
            });
            $scope.indexInfo.messageBoxAnimate = false;
            $timeout(function () {
                $('.comment-input.input-animate').hide();
                new IScroll('#wrapper', {
                    eventPassthrough: true,
                    scrollX: true,
                    scrollY: false,
                    preventDefault: false
                });
            }, 300);
        } else {
            $('.comment-input.input-animate').show();
            $('.comment-input.input-animate').css({
                'animation': 'circle5 500ms ease',
                'animation-fill-mode' : 'none'
            }).find('.input-text-wrap').css({
                'animation': 'circle6 500ms ease',
                'animation-fill-mode' : 'none'
            }).find('input').css({
                'animation': 'circle7 500ms ease',
                'animation-fill-mode' : 'none'
            });
            $('.comment-input.input-animate .input-img').css({
                'animation': 'circle8 500ms ease',
                'animation-fill-mode' : 'none'
            });
            $scope.indexInfo.messageBoxAnimate = true;
            $('.bottom-action.giftArea').removeClass('bounceInRight').addClass('bounceOutRight');
            $timeout(function () {
                $('.action-order, .action-suggestion, .action-support').fadeIn();
                $('.action-gift').animate({'right': '1.1rem', 'bottom': '0'});
            }, 500);
        }
    };

    /*约见律师*/
    $scope.makeMeeting = function () {
          $scope.indexInfo.showMeeting = true;
    };

    /*约见返回*/
    $scope.goBackOrder = function () {
        if ($scope.indexInfo.showMeeting) {
            $scope.indexInfo.showMeeting = false;
        }
    };

    /*跳转到付费后联系小助理的页面*/
    $scope.getContactMeet = function () {
        $scope.indexInfo.showCompleteMeeting = true;
        $scope.indexInfo.showMeeting = false;
    };

    /*返回付费提问*/
    $scope.goBackQuestion = function () {
        if ($scope.indexInfo.showPutQuestion) {
            $scope.indexInfo.showPutQuestion = false;
        }
    };

    /*联系小助理后关闭约见弹层*/
    $scope.getCompleteMeet = function () {
        $scope.indexInfo.showCompleteMeeting = false;
    };

    /*付费提问*/
    $scope.makeQuestion = function () {
        $scope.indexInfo.showPutQuestion = true;
    };

    /*跳转到付费后联系小助理的页面*/
    $scope.getContactQuestion = function () {
        $scope.indexInfo.showCompleteQuestion = true;
        $scope.indexInfo.showPutQuestion = false;
    };

    /*联系小助理后关闭提问弹层*/
    $scope.getCompleteQuestion = function () {
        $scope.indexInfo.showCompleteQuestion = false;
    };

    /*点击微信左上角返回按钮时，停止播放显示暂停图标*/
    window.onload = function () {
        document.querySelector('video').addEventListener("x5videoexitfullscreen", function(){
            $('.i-play-btn2').css('display', 'block');
        });
    };

    /*视频暂停时点击开始播放*/
    $scope.startPlay2 = function (event) {
        var target = $(event.target);
        $(target).css('display', 'none');
        $('video').get(0).play();
    };

    /*控制点击返回*/
    clickBack();
    function clickBack() {
        pushHistory();
        setTimeout(function () {
            window.addEventListener("popstate", function(e) {
                showBox("再按一次退出程序", 2000, function() {
                    pushHistory();
                });
            }, false);
        }, 300);

        function pushHistory() {
            var state = {
                title: "title",
                url: "#"
            };
            window.history.pushState(state, "title", "#");
        }

        function showBox(msg, timeOut, onTimeOut) {
            if (typeof alertBoxDiv === "undefined") {
                alertBoxDiv = $("<div/>").addClass("alert-box hide").append( $("<div/>").addClass("label label-primary")).appendTo($("body"));
            }
            alertBoxDiv.children(".label").html(msg);
            alertBoxDiv.removeClass("hide");
            if (typeof timeOut === "undefined") timeOut = 2000;
            setTimeout(function() {
                alertBoxDiv.addClass("hide");
                if (typeof onTimeOut !== "undefined") onTimeOut();
            }, timeOut);
        }
    }
}]);

/*获取当前视口的宽高*/
var winWidth = $(window).width();
var winHeight = $(window).height();

$('body').css('height', winHeight);

$('.main').css('height', winHeight);
$('.inke-video-wrap').css({
    'width': winWidth,
    'height': $(window).height()
});
$('video').attr('width', winWidth);

/*阻止页面下拉滑动*/
/*$('body').on('touchmove', function (ev) {
    ev.preventDefault();
});*/

$(function () {
    new IScroll('#wrapper2', {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false
    });

    /*取消移动端的点击延迟*/
    FastClick.attach(document.body);
});


