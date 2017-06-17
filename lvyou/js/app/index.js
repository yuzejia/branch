/**
 * Created by Administrator on 2017/5/24.
 */
var mySwiper = new Swiper('.con1 .swiper-container',{
    autoplay: 2000,
    pagination : '.swiper-pagination',
    loop : true,
    autoplayDisableOnInteraction : false,
});
/*秒杀抢购*/
/*广告滚动*/
jQuery(".slideTxtBox").slide({
    mainCell: ".bd ul",
    autoPage: true,
    effect: "topLoop",
    autoPlay: true,
    scroll: 1,
    delayTime: 700
});

/*筛选*/

(function () {
    $('.tabs>div').hide();
    $('.filt_list>div').eq(0).addClass();
    $('.filt_list>div').click(function () {
        var index = $(this).index();
        $('.filt_list>div').removeClass('tab_active')
        $(this).addClass('tab_active');
        $('.tabs>div').eq(index).siblings().hide();
        $('.tabs>div').eq(index).toggle();
        if( $('.tabs>div').eq(index).is(":hidden")){
            $('.content').animate({'margin-top':45});
        }else{
            var height = $('.tabs>div').eq(index).height();
            $('.content').animate({'margin-top':height+45});
        }
    });
    /*筛选*/
    $('.tab>div').on('click',function () {
        $('.tab>div').removeClass('activeS')
        $(this).addClass('activeS')
    });
})();


/*时间选择器*/
// jeDate({
//     dateCell:"#dateinfo",
//     format:"YYYY年MM月DD日",
//     isinitVal:true,
//     isTime:true, //isClear:false,
//     minDate:"2014-09-19 00:00:00",
//     okfun:function(val){}
// });
/*滑动底部*/
