<template>
   <div>
    <!-- 左边nav -->
    <layoutAside />
    <!-- 头部 -->
    <layoutHeader />
    <div  id="layoutMain" class="frame-main">
           <router-view></router-view>
     </div>
  </div>
</template>
<script>
import layoutAside from '../../components/layoutAside/index'
import layoutMain from '../../components/layoutMain/index'
import layoutHeader from '../../components/layoutHeader/index'
import {sessionStorageFetch} from '../../utils/storage.js'

export default {
  name: 'home',
  components: {
   layoutAside,
   layoutMain,
   layoutHeader
  },
  data(){
   return {
       themeTypeName: sessionStorageFetch('userInfo').theme  
   }
  },
  mounted(){
    //  alert( sessionStorageFetch('userInfo').theme)
    this.writeStyleTheme(this.themeTypeName)
  },
  methods:{
    //换肤 注入初始化 
        
    writeStyleTheme(themeType){
        // let url = require('../../assets/theme/'+themeType+'/diskSystem-theme.less')
        let url = '/theme/'+themeType+'/diskSystem-theme.css'
        let cssTag = document.getElementById('changeTheme');
        if(cssTag) document.getElementsByTagName("head")[0].removeChild(cssTag);
        return new Promise(() => {
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.id = 'changeTheme';
            link.href = url;
            document.getElementsByTagName("head")[0].appendChild(link);
        });
    },
  }
}
</script>
<style lang="less">


// @import "../../assets/less/function.less";
// @import "../../assets/less/disk.header.less";
// @import "../../assets/less/context-all.less";
// @import "../../assets/less/disk.theme.less";
// @import "../../assets/less/home-all.less";
// @import "../../assets/less/cover.less";
// @import "../../assets/less/all.less";
// @import "../../assets/less/inline.less";


//这个是通用的样式
@import "../../assets/less/function.less";

@import "../../assets/less/disk.header.less";
@import "../../assets/less/home-all.less";
@import "../../assets/less/context-all.less";
@import "../../assets/less/cover.less";
@import "../../assets/less/all.less";
@import "../../assets/less/inline.less";

@import "../../assets/less/disk.theme.less";

@import "../../assets/less/uploader-all.less";

//这里是选主题样式覆盖 16种皮肤

// @import "../../assets/theme/white/diskSystem-theme.less";
// @import "../../assets/theme/black/diskSystem-theme.less";
// @import "../../assets/theme/blue/diskSystem-theme.less";
// @import "../../assets/theme/skycloud/diskSystem-theme.less";
// @import "../../assets/theme/night/diskSystem-theme.less";
// @import "../../assets/theme/dusk/diskSystem-theme.less";
// @import "../../assets/theme/evening/diskSystem-theme.less";
// @import "../../assets/theme/beach/diskSystem-theme.less";
// @import "../../assets/theme/desert/diskSystem-theme.less";
// @import "../../assets/theme/jellyfish/diskSystem-theme.less";
//   @import "../../assets/theme/seasunset/diskSystem-theme.less";
//   @import "../../assets/theme/spacewalk/diskSystem-theme.less";
//   @import "../../assets/theme/mysticalforest/diskSystem-theme.less";
//   @import "../../assets/theme/greengrass/diskSystem-theme.less";
//   @import "../../assets/theme/comfortableafternoon/diskSystem-theme.less";
//   @import "../../assets/theme/christmas/diskSystem-theme.less";


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
