
window.onload=function(){
    getMyTime();
    getMyTime1();
}
//1.前面补0
function p(n){
    return n<10?'0'+n:n;
}
//2.倒计时
function getMyTime(){
    var startDate=new Date();
    var endDate=new Date('2017/7/18 10:05:00');
    var countDown=(endDate.getTime()-startDate.getTime())/1000;
    var day=parseInt(countDown/(24*60*60));
    var h=parseInt(countDown/(60*60)%24);
    var m=parseInt(countDown/60%60);
    var s=parseInt(countDown%60);
    document.getElementById('time').innerHTML=day+'天'+h+'时'+m+'分'+p(s)+'秒';
    setTimeout('getMyTime()',1000);

    if(countDown<=0){
        document.getElementById('time').innerHTML='活动结束';
    }
}
//3.当前时间
function getMyTime1(){
    var myDate=new Date();
    var year=myDate.getFullYear();
    var month=myDate.getMonth()+1;
    var day=myDate.getDate();
    var week=myDate.getDay();
    var array=['星期日','星期一','星期二','星期三','星期四','星期五','星期六',];
    var hour=myDate.getHours();
    var minute=myDate.getMinutes();
    var second=myDate.getSeconds();
    document.getElementById('time1').innerHTML=year+'年'+month+'月'+day+'日'+'&nbsp;'+array[week]+'&nbsp;'+p(hour)+':'+p(minute)+':'+p(second);
    setTimeout('getMyTime1()',500);
}/**
 * Created by Administrator on 2017/7/18.
 */
