<template>
  <div class="hello">
   <div class="header">
     <ul>
       <li v-for="m in msg.msg1"><router-link  v-bind:to='m.b'>{{m.a}}</router-link></li>

     </ul>
   </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg:{
       msg1: [
           {"a":"首页",b:"/"},
           {"a":"列表",b:"/list"},
           {"a":"信息",b:"123"},
           {"a":"个人",b:"123"}
       ],
        ready: function() {
          this.$http({url: ''}).then(function (response) {
            //求助的部分
           console.log(response)
          })

    }
  }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    position: fixed;
    bottom: 0;
    width:100%;
    background: #E1E1E1;
  }
.header ul li{
  width:25%;
  height: 40px;
  display: block;
  line-height: 40px;
  float: left;
  list-style: none;
  text-align: center;
}

a {
  color: #000;
  text-decoration: none;
}
</style>
