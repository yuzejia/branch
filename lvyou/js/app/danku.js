/**
 * Created by Administrator on 2017/6/1.
 */

/*筛选*/
$('.shaixuan').click(function () {
    $('.filtrate').toggle();
});

$('.tabs>div').hide();
$('.filt_list>div').eq(0).css('color','#4f82ed');
//$('.tabs>div').eq(0).show();
$('.filt_list>div').click(function () {
    var index = $(this).index();
    $('.filt_list>div').css('color','#666')
    $(this).css('color','#4f82ed');
    $('.tabs>div').eq(index).siblings().hide();
    $('.tabs>div').eq(index).toggle();
});

$('.tab>div').on('click',function () {
    $('.tab>div').removeClass('activeS')
    $(this).addClass('activeS')
});

filt('.filt_list','.grid')
function filt(a,b) {
    $(a).children().click(function () {
        var index = $(this).index();
        if(index ==0){
            $(b).animate({marginTop:'80px'})
        }else {
            if (index ==1){
                $(b).animate({marginTop:'120px'})
            }else {
                $(b).animate({marginTop:'100px'})
            }
        }
    });
    $('.shaixuan').click(function () {
        $('.grid').animate({marginTop:'0'})
    })


}


    //jeDate.skin('gray');
    jeDate({
        dateCell:"#dateinfo",
        format:"YYYY年MM月DD日",
        isinitVal:true,
        isTime:true, //isClear:false,
        minDate:"2014-09-19 00:00:00",
        okfun:function(val){alert(val)}
    })

