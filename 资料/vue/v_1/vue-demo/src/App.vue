<template>
  <div id="app">

    <router-view></router-view>
    <tabs></tabs>
  </div>
</template>
<script>
  import tabs from './components/tabs.vue'
export default {
  name: 'app',
  components: {
    tabs
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  margin:0;
  padding:0;
}
</style>
