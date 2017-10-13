/**
 * Created by Administrator on 2017/7/20.
 */


    function lisid(a,b) {
        $(a).on('click',function () {
            if($(this).html() =='展开'){
                $(this).html('收起')
            }else if($(this).html()== '收起'){
                $(this).html('展开')
            }
            $(b).slideToggle(200)
        })
    }
    lisid('.list-hide','.show1');
lisid('.list-hide2','.show2');