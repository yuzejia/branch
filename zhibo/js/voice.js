/**
 * Created by Administrator on 2017/5/8 0008.
 */
var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function ($scope) {

}]);

$(function () {
    $('.img-bg').on('touchstart', function () {
        $('img').attr('src', 'img/voice2.png');
        $('.voice-desc').html('正在录音...');
    });

    $('.img-bg').on('touchend', function () {
        $('img').attr('src', 'img/voice.png');
        $('.voice-desc').html('长按按钮进行录音');
    });
});