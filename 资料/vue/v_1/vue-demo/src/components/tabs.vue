<template>
  <div class="tabs">
    <div class="footer">
      <div  v-for="v in msg.msg1" v-on:click="tabStyle($event)" >
        <router-link v-bind:to="v.b">
          <p><img width="20" src="../assets/img/01.png" alt=""></p>
          <p>{{v.a}}</p>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
      isActive: true,
      msg: {
        msg1: [
          {"a":"订单",b:"/"},
          {"a":"主页",b:"/home"},
          {"a":"单库",b:"list"},
        ],
      }
    }
  },

  methods :{
    tabStyle:function (event) {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tabs .footer{
    z-index: 99;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    border-top:1px solid #d4d4d4;
    background: #fff;
  }
  .tabs .footer div{
    float: left;
    width:33.3%;
    text-align: center;
    padding:0.1rem;
    font-size: 0.25rem;

  }
  .tabs .footer div a {
    color: #000;
  }
  .tabs .footer div a img{
    width:0.4rem;
  }
</style>
