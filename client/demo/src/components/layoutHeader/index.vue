<template>
<div id="layoutHeader">
    <div class="module-header">
        <div  class="module-header-wrapper" style="height: 62px;">
            <dl class="xtJbHcb">
                    <dt class="EHazOI">
                         <a href="/all" target="_self" title="百度网盘"></a>
                    </dt>
                    <dd class="vyQHNyb">
                        <span class="cMEMEF wGMtMgb" >
                            <a href="/all" title="网盘">网盘</a>
                            <span class="gICyHO"></span>
                        </span>
                    </dd>

                <dd class="CDaavKb">
                <span class="DIcOFyb  " ref="person" :class="{'mouseon':personLayer == true}" @mouseover="showPersonLayer "  >
                    <span class="user-photo-box">
<!--  background-image:url(https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/1988db14.jpg);filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/1988db14.jpg', sizingMethod='scale'); -->
                       <i class="user-photo"
                      :style="{backgroundImage:'url(' + avatr + ')'}"
                          ></i>
                    </span>

                    <span class="user-name">jackieli123723</span>
                    <span class="animate-start animate-level-0">
                        <i class="star start-left"></i>
                        <i class="bar-bling"></i>
                        <i class="bar-bling2"></i><i class="star start-right"></i>
                    </span>
                    <a class="JS-user-level " :class="getLevel()"  href="javascript:;" ></a>

                    <i  class="NxuPcOb icon icon-dropdown-arrow"></i>

                    <dl class="PvsOgyb"  @mouseover="showPersonLayer" @mouseout="hidePersonLayer">
                    <dt class="OMDFeH" :class="getLevel()">
                    <i class="desc-arrow"></i>
                    <i class="desc-layer"></i>
                    <span class="desc-header">
                        <span class="user-photo-box">
                              <i class="user-photo"
                               :style="{backgroundImage:'url(' + avatr + ')'}"
                          ></i>
                        </span>
                        <span class="user-info" title="jackieli123723">
                            <span class="username">jackieli123723</span>
                            <a class="JS-user-level" :class="getLevel()"  href="javascript:;" ></a>
                        </span>
                    </span>
                    </dt>

                        <dd class="desc-box">
                            <ul class="QgxQAN">
                                <li class="cMEMEF">
                                  <router-link to="/my">个人资料</router-link> 
                                </li>
                                <li class="cMEMEF password">
                                  <router-link to="/restpassword">修改密码</router-link> 
                                </li>
                          
                                <li class="cMEMEF">
                                  <a href="javascript:;" @click="logout">退出登录</a>
                                </li>
                            </ul>
                        </dd>
                    </dl>

                    </span>

                    <i class="Ebdyswb"></i>
                   
                    <a href="/notify" class="icon app-notice icon-notice app-notice app-icon" title="系统通知"></a>
                    <a href="/feedback"  class="icon icon-feedback app-feedback app-icon" title="意见反馈"></a>
                    <a href="javascript:void(0);"  @click="openThemeBox" class="icon icon-theme app-theme app-icon" title="皮肤中心">
                       <span class="newIcon"></span>
                    </a>
                    <a href="https://github.com/jackieli123723/vueFilesSystem" target="_blank" class="KQcHyA" title="源码下载">源码下载</a>

                </dd>
                 
            </dl>
        </div>
    </div>



      
   

 




   <!--  主题弹出框 -->
    <!-- <div :class="{'checked fadeInUp theme-animated':themeBoxSwitch == true}" class="b-panel theme-b-dialog theme-alert-dialog header-theme-alert-dialog theme-panel" 
    > -->
       <div :class="[themeBoxSwitch == true ? 'checked fadeInUp ' : 'fadeOutDown ']" class="theme-animated b-panel theme-b-dialog theme-alert-dialog header-theme-alert-dialog theme-panel" 
    >
  
    <div class="dlg-bd">
        <div id="_disk_id_6" class="theme-alert-dialog-msg center">
            <div class="theme-panel-bg"></div>
            <div class="theme-panel-header">
                <div class="theme-panel-header-m">
                    <div class="theme-panel-type">
                        <ul>
                            <li>选择皮肤</li></ul>
                    </div>
                </div>
            </div>
            <div class="theme-panel-content">
                <div class="theme-panel-content-m">
                    <div class="theme-panel-content-left">
                        <div class="theme-slide">
                            <div class="slide-box">
                                <div class="slide-ul">
                                    <ul class="theme-list-info" style="left: 0px;">
                                        <li>
                                            <div class="theme-div" @click="updateTheme(theme.theme,index)"    :key='index' :class="{'hover active':themeActivedId == index}" v-for="(theme,index) in themeData">
                                                <a :theme-name=theme.theme href="javascript:void(0);">
                                                    <img :src="themeSmallImg(theme.theme)"></a>
                                                <div class="recommend" v-if="index == 7">推荐</div>    
                                                <div class="theme-preview-hover"></div>
                                                <p class="theme-name">{{theme.name}}</p>
                                                <span class="ok-icon"></span>
                                            </div>
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="slide-current">
                                <a class="prev" href="javascript:void(0);" style="visibility: hidden;"></a>
                                <div class="list" style="display: none;">
                                    <em class="current">0</em></div>
                                <a class="next" href="javascript:void(0);" style="visibility: hidden;"></a>
                            </div>
                        </div>
                    </div>
                    <div class="theme-panel-content-right">
                        <div class="theme-preview">
                            <div class="theme-preview-img">
                                <img :src="themePreviewImg(themeTypeName)" width="100%"></div>
                        </div>
                    </div>
                    <div class="cb"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="dlg-ft b-rlv">
        <div class="theme-alert-dialog-commands clearfix center">
            <a href="javascript:;" @click="hideThemeBoxSure" id="_disk_id_8" class="sbtn okay" >
                <b>确定</b>
            </a>
            <a href="javascript:;" @click="hideThemeBoxCancel" id="_disk_id_9" class="dbtn cancel">
                <b>取消</b>
            </a>
        </div>
    </div>
</div>




</div>
</template>

<script>

import {sessionStorageSave,sessionStorageFetch} from '../../utils/storage.js'

import Toast from '../common/toast'


export default {
  name: "layoutHeader",
  components:{
    Toast,
  },
  data(){
    return {
        themeConfirmFlag:false,
        personLayer:false,
        level:2,//0,1,2 账号等级可根据文件个数 定义10 50 100
        avatr:"https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/1988db14.jpg",
        // themeActivedId:7,
        // themeTypeName:"beach",
        themeTypeName:sessionStorageFetch('userInfo').theme || 'beach',
        lastThemeActivedId:-1,
        themeActivedIdSmallImg: require('../../assets/theme/white/demo.png'),
        themeBoxSwitch:false,
        themeData:[
           {
            "name":'默认',
            "theme":'white'
           },
            {
            "name":'经典黑',
            "theme":'black'
           },
            {
            "name":'经典蓝',
            "theme":'blue'
           },
            {
            "name":'云上的日子',
            "theme":'skycloud'
           },
            {
            "name":'月半弯',
            "theme":'night'
           },
            {
            "name":'璀璨星空',
            "theme":'dusk'
           },
            {
            "name":'夜色',
            "theme":'evening'
           },
            {
            "name":'碧海蓝天',
            "theme":'beach'
           },
            {
            "name":'浩瀚沙海',
            "theme":'desert'
           },
            {
            "name":'海底世界',
            "theme":'jellyfish'
           },
            {
            "name":'霞光万道',
            "theme":'seasunset'
           },
            {
            "name":'太空漫步',
            "theme":'spacewalk'
           },
            {
            "name":'神秘森林',
            "theme":'mysticalforest'
           },
            {
            "name":'绿意盎然',
            "theme":'greengrass'
           },
            {
            "name":'安适的午后',
            "theme":'comfortableafternoon'
           },
            {
            "name":'圣诞节',
            "theme":'christmas'
           }
        ]
    }
  },
  computed:{
     themeActivedId(){
          var self =this
          var idx = ''
          self.themeData.forEach(function(val,index,arr){
           if(self.themeTypeName == val.theme){
               idx = index
           }
         })
         return idx
     }
  },
  mounted(){
//    let theme = sessionStorageFetch("theme")
//    alert(theme)
  },

  methods:{
    logout(){
       this.$router.push('/login');
    },
    showPersonLayer(){
      this.personLayer = true
    },
    hidePersonLayer(){
      this.personLayer = false
    },
    themeSure(){
      this.themeConfirmFlag = !this.themeConfirmFlag
    },
    themeCancle(){
      this.themeConfirmFlag = !this.themeConfirmFlag
    },
    openThemeBox(){
     this.themeBoxSwitch = !this.themeBoxSwitch
    },
    hideThemeBoxCancel(){
      //应用皮肤
     //this.themeConfirmFlag = !this.themeConfirmFlag
     
     this.themeBoxSwitch = !this.themeBoxSwitch
     
    },
    hideThemeBoxSure(){
     this.themeBoxSwitch = !this.themeBoxSwitch
     //注入css
    
    //保证最后一个的删除在注入
    // let len = document.getElementsByTagName("head")[0].getElementsByTagName('link')
    // if(document.getElementsByTagName('link')[len-1].href="[object Object]"){
    //   document.getElementsByTagName("head")[0].removeChild(document.getElementsByTagName('link')[len-1]);
    // }

    this.writeStyleTheme(this.themeTypeName)
    },
      //换肤  
    writeStyleTheme(themeType){
        // let url = require('../../assets/theme/'+themeType+'/diskSystem-theme.less')
        // let url = 'https://yun.baidu.com/box-static/disk-theme/theme/'+themeType+'/diskSystem-theme.css'
         let url = '/theme/'+themeType+'/diskSystem-theme.css'
        let cssTag = document.getElementById('changeTheme');
        if(cssTag)  document.getElementsByTagName("head")[0].removeChild(cssTag);
        return new Promise(() => {
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.id = 'changeTheme';
            link.href = url;
            document.getElementsByTagName("head")[0].appendChild(link);
        });
    },
    changeTheme(){
    
    },
    updateTheme(themeName,index){
      this.themeTypeName = themeName
      this.lastThemeActivedId = index
      sessionStorageSave('userInfo',{
          theme:themeName
      })
    this.writeStyleTheme(this.themeTypeName)
    },
    themePreviewImg(theme){
     return require('../../assets/theme/'+theme+'/demo.png')
    },
    themeSmallImg(theme){
     return require('../../assets/theme/'+theme+'/smallDemo.png')
    },
    getLevel(){
        let levelstr = ''
        if(this.level == 0){
            levelstr = 'level-0'
        }
        if(this.level == 1){
            levelstr = 'level-1'
        }
        if(this.level == 2){
            levelstr = 'level-2'
        }
        return levelstr
    }

  }
};
</script>

<style lang="less" scoped>

// @import "../../assets/less/disk.header.less";
// @import "../../assets/less/context-all.less";
// @import "../../assets/less/disk.theme.less";



.xtJbHcb .OMDFeH.level-0 .desc-arrow {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #3e81e0;
}
.xtJbHcb .OMDFeH.level-1 .desc-arrow {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #f3a723;
}

.xtJbHcb .OMDFeH.level-2 .desc-arrow {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #dd6966;
}

.theme-b-dialog{
   bottom:-310px;
}
.theme-b-dialog.checked{
    display: block;
    bottom:0;
}

.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp
}

.fadeOutDown {
    -webkit-animation-name: fadeOutDown;
    animation-name: fadeOutDown;
}

.theme-animated {
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}


@keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0,100%,0);
        -ms-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
}

@keyframes fadeOutDown {
    0% {
       bottom:-310px;
    }

    100% {
        bottom:0
    }
}



</style>
