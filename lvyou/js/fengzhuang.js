/**
 * Created by Administrator on 2017/5/22.
 */
/*tab 切换*/
    function tabs(a,b,c) {
        if(c==true){
            $(b).children().hide();
            $(a).children().on('click',function () {
                var index =  $(this).index();
                $(a).children().removeClass('tab_active');
                $(this).addClass('tab_active');
                $(b).children().hide();
                $(b).children().eq(index).show()
            })
        }else {
            $(b).children().hide();
            $(b).children().eq(1).show();
            $(a).children().on('click',function () {
                var index =  $(this).index();
                $(a).children().removeClass('tab_active');
                $(this).addClass('tab_active');
                $(b).children().hide();
                $(b).children().eq(index).show()
            })
        }

    };

/*弹出层*/
    function tanChu(a1,b2,c2) {
        $(a1).on('click',function () {
            $(b2).fadeIn()
        });
        $(c2).on('click',function () {
            $(b2).fadeOut()
        })
    };

/*手风琴*/
function accordion(a,b) {
        $(b).slideUp(200);
        $(a).on('click',function () {
            if($(this).siblings(b).is(':hidden')){
                $(b).slideUp(200);
                $(this).siblings(b).slideToggle(300)
            }else {
                $(b).slideUp(200);
            }
        });


}
