<template>
  <div class="travel">
    <!-- 轮播 -->
    <div class="content">
      <!--<div class="con1">-->
        <!--<div class="swiper-container">-->
          <!--<div class="swiper-wrapper">-->

            <!--<div style="background: red" class="swiper-slide">-->
              <!--<a href="">-->
                <!--<img  src="../assets/img/u=4186807976,1707145605&fm=23&gp=0.jpg" alt="">-->
              <!--</a>-->
            <!--</div>-->
            <!--<div style="background: blue" class="swiper-slide">-->
              <!--<a href="">-->
                <!--<img  src="../assets/img/u=3078336511,3371836423&fm=23&gp=0.jpg" alt="">-->
              <!--</a>-->
            <!--</div>-->
            <!--<div style="background:#c0a16b" class="swiper-slide">-->
              <!--<a href="">-->
                <!--<img  src="../assets/img/u=506330584,1735364885&fm=23&gp=0.jpg" alt="">-->
              <!--</a>-->
            <!--</div>-->

          <!--</div>-->
          <!--&lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
          <!--<div class="swiper-pagination"></div>-->
        <!--</div>-->
      <!--</div>-->
      <!--秒杀抢购-->
      <!--<div class="con2">-->
        <!--<div class="con2_top">-->
          <!--<div class="title fl">-->
            <!--<img src="../assets/img/47.png" alt="">-->
          <!--</div>-->
          <!--<div class="fl">-->
            <!--<div class="slideTxtBox">-->
              <!--<div class="bd">-->
                <!--<ul>-->
                  <!--<li>-->
                    <!--<i></i>-->
                    <!--<span>普及+双飞机票+普及双飞机票双飞机票 </span>-->
                    <!--<span>￥300</span>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<i></i>-->
                    <!--<span>普及+双飞机票+普及双飞机票双飞机票 </span>-->
                    <!--<span>￥300</span>-->
                  <!--</li>-->
                  <!--<li>-->
                    <!--<i></i>-->
                    <!--<span>普及+双飞机票+普及双飞机票双飞机票 </span>-->
                    <!--<span>￥300</span>-->
                  <!--</li>-->
                <!--</ul>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="con2_content">-->
          <!--<div>-->
            <!--<a href="particulars.html">-->
              <!--<div class="con2_cont_top">-->
                <!--<span>郑州</span><span>6天跟团</span>-->
              <!--</div>-->
              <!--<div class="con2_cont_bottom">-->
                <!--<div class="ovH">-->
                  <!--<p class="fl">22时55钟44秒</p>-->
                  <!--<p class="fr">-->
                    <!--<span><s>原<i>7888</i>元</s></span>-->
                  <!--</p>-->
                <!--</div>-->
                <!--<div class="ovH">-->

                  <!--<p class="fl">仅剩<span>10</span>人</p>-->
                  <!--<p class="fr">￥<span>3600</span>起</p>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="con2_cont_img">-->
                <!--<img src="../assets/img/7730-1411031GZ4.jpg" alt="">-->
              <!--</div>-->
            <!--</a>-->
          <!--</div>-->

        <!--</div>-->
      <!--</div>-->
      <!--热门尾单-->
      <div class="con3">
        <div class="con3_top">
          <img src="../assets/img/48.png" alt="">
        </div>
        <div class="con3_content">
          <div>
            <a href="">
              <div class="con3_cont_top">
                <span>郑州郑州郑</span><span><em>12月18日 </em><em>剩10人</em></span>
              </div>
              <div class="con3_cont_img">
                <img src="../assets/img/u=506330584,1735364885&fm=23&gp=0.jpg" alt="">
              </div>
              <div class="con3_cont_bottom">
                <div class="ovH">
                  [中青旅]全国直飞美国塞班岛五星酒店自由行旅游
                </div>
                <div class="ovH con3_price">
                  <p class="fl">￥<span>3600</span></p>
                  <p class="fr"><i><img width="15" src="../assets/img/time.png" alt=""></i>22时55分44秒</p>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="">
              <div class="con3_cont_top">
                <span>郑州郑州郑</span><span><em>12月18日 </em><em>剩10人</em></span>
              </div>
              <div class="con3_cont_img">
                <img src="../assets/img/u=506330584,1735364885&fm=23&gp=0.jpg" alt="">
              </div>
              <div class="con3_cont_bottom">
                <div class="ovH">
                  [中青旅]全国直飞美国塞班岛五星酒店自由行旅游
                </div>
                <div class="ovH con3_price">
                  <p class="fl">￥<span>3600</span></p>
                  <p class="fr"><i><img width="15" src="../assets/img/time.png" alt=""></i>22时55分44秒</p>
                </div>
              </div>
            </a>
          </div>


        </div>
        <div class="more"><a href="danku.html">点击查看更多...</a></div>
      </div>
    </div>
    <!--tabs-->

  </div>
</template>

<script>

  export default {
  name: 'travel',
  data () {
    return {
      msg:{ }
    }
  }
};

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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html , body  , .travel{
    /*height:100%;*/
  }
  .travel header{
    z-index: 99;
    width:100%;
    position: fixed;
    top:0;
    left:0;
    padding:0.2rem;
    font-size: 0.3rem;
    color: #FFF;
    background: #5189e9;
    text-align: center;
  }
  .travel header .Left{
    width:0.4rem;
    position: absolute;
    left:0.2rem;
  }
  .travel header .right{
    width:0.6rem;
    position: absolute;
    right:0.2rem;
    color: #fff;
  }
  .travel .content{
    padding-bottom: 1rem;
  }
  .travel .conentMy{
    min-height: 13rem;
    padding: 0.8rem 0.2rem 1rem;

  }
  .travel .footer{
    z-index: 99;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    border-top:1px solid #d4d4d4;
    background: #fff;
  }
  .travel .footer div{
    float: left;
    width:33.3%;
    text-align: center;
    padding:0.1rem;
    font-size: 0.25rem;

  }
  .travel .footer div a {
    color: #000;
  }
  .travel .footer div a img{
    width:0.4rem;
  }
  /*秒杀抢购*/
  .slideTxtBox{
    /*margin-top: 0.1rem;*/
    width: 5.2rem;
  }
  .slideTxtBox .bd ul{
    zoom:1;
  }
  .slideTxtBox .bd li{
    width:100%;
    height:0.5rem;
    text-align: center;
    overflow: hidden;
    font-size: 0.25rem;
    color: #000;
    margin-left: 0.1rem;
  }
  .slideTxtBox .bd li a{
    font-size: 0.2rem;
    color: #000;
  }
  .con1 .swiper-container {
    width: 100%;
    height:4rem;
  }
  .con1 .swiper-container img{
    width: 100%;
    height: 100%;
  }

  /*---------------------------------*/
  .ovH{
    overflow: hidden;
  }
  .travel .title img{
    width: 2rem;
  }
  .travel .con2{
    overflow: hidden;
  }
  .travel .con2 .con2_top{
    padding-left: 0.1rem;
    overflow: hidden;
    height: 0.7rem;
    border-bottom:1px solid #e1e1e1;
    padding-top: 0.1rem;
    background: #ffffff;
  }
  .travel .con2 .slideTxtBox .bd li i{
    margin:0.22rem 0 0 0.3rem;
    width: 0.1rem;
    height: 0.1rem;
    display: block;
    float: left;
    border-radius: 50%;
    background: red;
  }
  .travel .con2 .slideTxtBox .bd li span:nth-of-type(1){
    width: 3.5rem;
    display: inline-block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-top: 0.1rem;
  }
  .travel .con2 .slideTxtBox .bd li span:nth-of-type(2){
    font-size: 0.4rem;
    color: darkred;
    vertical-align: top;
  }
  /*秒杀尾单*/
  .travel .con2{
    overflow: hidden;

  }
  .travel .con2_content{
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
  }
  .travel .con2_content>div{
    position: relative;
    width: 47%;
    height: 3rem;
    margin:0.1rem;
  }

  .travel .con2_content .con2_cont_top{
    padding: 0.1rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color:rgba(0,0,0,0.6) ;
    color: #ffffff;
    font-size: 0.25rem;
  }
  .travel .con2_content .con2_cont_bottom{
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    overflow: hidden;
    background-color:rgba(0,0,0,0.6);
    color: #ffffff;
    padding:0.05rem 0.1rem;
  }
  .travel .con2_content .con2_cont_bottom div:nth-of-type(1) p:nth-of-type(1){
    font-size: 0.3rem;
    border-bottom:1px solid #fff;
    font-weight: bolder;
    padding-bottom: 0.07rem;
  }
  .travel .con2_content .con2_cont_bottom div:nth-of-type(1) p:nth-of-type(1) span{
    margin:0 0.05rem;
  }
  .travel .con2_content .con2_cont_bottom div:nth-of-type(1) p:nth-of-type(2){
    color: #aeaeae;
    font-size: 0.25rem;
    margin-top: 0.05rem;
  }
  .travel .con2_content .con2_cont_bottom div:nth-of-type(2) img{
    width: 0.3rem;
    vertical-align: sub;
    margin-right: 0.02rem;
  }
  .travel .con2_content .con2_cont_bottom div:nth-of-type(2) p:nth-of-type(1){
    font-size: 0.2rem;

  }
  .travel .con2_content .con2_cont_bottom div:nth-of-type(2) p:nth-of-type(1) span{
    font-size: 0.35rem;
    color: #dffc22;
    font-weight: bolder;
  }
  .travel .con2_content .con2_cont_bottom div:nth-of-type(2) p:nth-of-type(2){
    font-size: 0.2rem;
  }
  .travel .con2_content .con2_cont_bottom div:nth-of-type(2) p:nth-of-type(2) span{
    font-size: 0.35rem;
    color: #dffc22;
    font-weight: bolder;
  }
  .travel .con2_content .con2_cont_img{
    width:100%;
    height: 100%;
  }
  .travel .con2_content .con2_cont_img img{
    width:100%;
    height: 100%;
  }
  /*热门尾单*/
  .travel .con3{
    overflow: hidden;
  }
  .travel .con3 .con3_top{
    padding-left: 0.1rem;
    overflow: hidden;
    border-bottom:1px solid #e1e1e1;
    padding-top: 0.1rem;
    background: #ffffff;
  }
  .travel .con3 .con3_top img{
    width: 2rem;
  }
  .con3_content{
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
  }
  .travel .con3_content>div{
    position: relative;
    width: 47%;
    min-height: 4rem;
    margin:0.1rem;
  }
  .travel .con3_content .con3_cont_top{
    padding:0.1rem;
    padding-left: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #ffffff;
    font-size: 0.25rem;
  }
  .travel .con3_content .con3_cont_top span:nth-of-type(1){
    padding:0.1rem 0.05rem;
    width: 1rem;
    height:100% ;
    background: rgba(253,196,24,0.6);
    color: #000;
  }

  .travel .con3_content .con3_cont_top span:nth-of-type(2){
    padding:0.1rem 0.05rem;
    width: 1rem;
    height:100% ;
    background:rgba(0,0,0,0.6);
  }
  .travel .con3_content .con3_cont_bottom{
    overflow: hidden;
    opacity: 0.6;
    color: #000;
    padding:0.05rem 0.05rem;
  }
  .travel .con3_content .con3_cont_bottom div:nth-of-type(1){
    color: #000;
    font-weight: bolder;
    font-size: 0.25rem;
    height: 0.7rem;
  }
  .travel .con3_content .con3_cont_bottom .con3_price{
    margin-top: 0.1rem;
  }
  .travel .con3_content .con3_cont_bottom .con3_price p:nth-of-type(1){
    font-size: 0.35rem;
    color: darkred;
    font-weight: bolder;
  }
  .travel .con3_content .con3_cont_bottom .con3_price p:nth-of-type(2){
    margin-top: 0.05rem;
    font-size: 0.25rem;
  }
  .travel .con3_content .con3_cont_bottom .con3_price p:nth-of-type(2) img{
    width: 0.3rem;
    vertical-align: bottom;
  }
  .travel .con3_content .con3_cont_img{
    width:100%;
    height: 3rem;
  }

  .travel .con3_content .con3_cont_img img{
    width:100%;
    height: 100%;
  }
  .travel .con3 .more{
    padding:0.2rem;
    text-align: center;
    font-size: 0.25rem;

  }

</style>
