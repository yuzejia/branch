/**
 * Created by Administrator on 2017/5/22.
 */
/*tab 切换*/


   function tabs (a,b) {

       $(b).children().hide();
       // $(b).children().eq(0).show();
       $(a).children().eq(0).addClass('tab_active');
       $(a).children().on('click', function () {
           var index = $(this).index();
           $(a).children().removeClass('tab_active');
           $(this).addClass('tab_active');
           $(b).children().hide();
           $(b).children().eq(index).toggle()
       })
   }
    // function tabs(a,b) {
    //     $(a).children().on('click',function () {
    //         var index =  $(this).index();
    //         $(a).children().removeClass('tab_active');
    //         $(this).addClass('tab_active');
    //         $(b).children().hide();
    //         $(b).children().eq(index).show()
    //     })
    // };

/*弹出层*/
    function tanChu(a1,b2,c2) {
        $(a1).on('click',function () {
            $(b2).fadeIn()
        });
        $(c2).on('click',function () {
            $(b2).fadeOut()
        })
    };



