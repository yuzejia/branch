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
var mySwiper2 = new Swiper('.con2 .swiper-container',{
       // autoplay: 3000,
    loop : true,
    autoplayDisableOnInteraction : false,
});
/*广告滚动*/
jQuery(".slideTxtBox").slide({
    mainCell:".bd ul",
    autoPage:true,
    effect:"topLoop",
    autoPlay:true,
    scroll:1,
    delayTime:700
});

/*筛选*/
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

/*滑动底部*/
