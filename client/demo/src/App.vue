<template>
  <div class="frame-all" id="app">
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

@import "./assets/less/function.less";

.frame-all {
    background-color: #4287ed;
    -webkit-transition: background 1s ease;
    -moz-transition: background 1s ease;
    -o-transition: background 1s ease;
    transition: background 1s ease;
    user-select: none
}

html {
    *overflow-y: hidden!important
}

body {
    overflow: hidden
}

body,button,input,select,textarea {
    color: #666
}

input::-ms-clear,input::-ms-reveal {
    display: none
}

.cb {
    clear: both;
    width: 0;
    height: 0;
    display: block
}

#app {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    min-width: 1103px;
    _width: 100%;
    _height: 630px
}

#layoutAside {
    width: 194px;
    height: 100%;
    top: 62px;
    left: 0;
    bottom: 0;
    z-index: 9;
    position: absolute
}

#layoutMain {
    top: 62px;
    left: 194px;
    bottom: 0;
    right: 10px;
    z-index: 1;
    background: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    position: absolute
}

#layoutHeader {
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 62px;
    z-index: 41;
    position: absolute
}

.aside-absolute-container {
    bottom: 62px
}

</style>
