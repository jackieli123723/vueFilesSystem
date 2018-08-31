<template>
  <div class="frame-all" id="app">
       <div class="skin-main"></div>
       <router-view></router-view>
  </div>
</template>
<script>
import layoutAside from './components/layoutAside/index'
import layoutMain from './components/layoutMain/index'
import layoutHeader from './components/layoutHeader/index'

export default {
  name: 'app',
  components: {
   layoutAside,
   layoutMain,
   layoutHeader
  }
}
</script>
<style lang="less" >


</style>
