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



      <!-- 成功 -->
   <!--    <div class="yun-header-tip-box" style="display: -none;">
        <div class="yun-header-tip success">
        <i class="yun-header-tip-icon icon icon-tips-success"></i>
        <span class="yun-header-tip-msg">皮肤应用成功！</span>
        </div>
      </div> -->
       
      <!--  正在 -->

   <!-- <div class="yun-header-tip-box" style="display: -none;">
        <div class="yun-header-tip success">
        <i class="yun-header-tip-icon icon icon-tips-success"></i>
        <span class="yun-header-tip-msg">皮肤应用成功！</span>
        </div>
      </div> -->
<!-- 
       失败 -->

    <!--    <div class="module-yun-tip red-yun-tips" style="top: 74px;left: 50%;margin-left: -119px;opacity: 1;/* display: none; */">
           <div class="tip-inner">
           <span class="tip-icon icon icon-tips-caution"></span>
           <span class="tip-msg">不能将文件移动到自身或其子目录下</span>
           </div>
       </div> -->

     <!--   <div class="module-yun-tip" style="top: 74px; left: 50%; margin-left: -48px; opacity: 1; ">
           <div class="tip-inner">
           <span class="tip-icon icon icon-tips-success"></span>
           <span class="tip-msg">重命名成功</span>
           </div>
       </div> -->

      <!--  <div class="yun-header-tip-box" style="display: -none;">
        <div class="yun-header-tip success">
        <i class="yun-header-tip-icon icon icon-tips-success"></i>
        <span class="yun-header-tip-msg">皮肤应用成功！</span>
        </div>
      </div> -->


   <!-- 选好主题的弹出框 -->
    <!--   <div class="b-panel theme-b-dialog theme-alert-dialog header-theme-alert-dialog not-save-dialog" style="left: 592px; top: 80.5px; display: block;">
            <div class="dlg-hd b-rlv">
                    <div title="关闭" id="_disk_id_9" class="dlg-cnr dlg-cnr-r icon icon-close"></div>
                    <h3 id="_disk_id_7">提示</h3>
            </div>
            <div class="dlg-bd">
                    <div id="_disk_id_8" class="theme-alert-dialog-msg center">是否使用选择的皮肤？</div>
            </div>
            <div class="dlg-ft b-rlv">
                    <div class="theme-alert-dialog-commands clearfix center">
                            <a href="javascript:;" id="_disk_id_10" class="sbtn okay">
                                    <b>是</b>
                            </a>
                            <a href="javascript:;" id="_disk_id_11" class="dbtn cancel">
                                    <b>否</b>
                            </a>
                    </div>
                    <div class="clearfix theme-alert-dialog-commands-plus">
                            <a id="_disk_id_12" href="javascript:;" class="dbtn okay">
                                    <b>关闭</b>
                            </a>
                    </div>
            </div>
    </div> -->




   <!--  主题弹出框 -->
    <div :class="{'checked':themeBoxSwitch == true}" class="b-panel theme-b-dialog theme-alert-dialog header-theme-alert-dialog theme-panel" 
    >
    <div class="dlg-hd b-rlv" style="display: none;">
        <div title="关闭" id="_disk_id_7" class="dlg-cnr dlg-cnr-r icon icon-close"></div>
        <h3 id="_disk_id_5">切换主题</h3></div>
    <div class="dlg-bd">
        <div id="_disk_id_6" class="theme-alert-dialog-msg center">
            <div class="theme-panel-bg"></div>
            <div class="theme-panel-header">
                <div class="theme-panel-header-m">
                    <div class="theme-panel-type">
                        <ul>
                            <li>选择皮肤</li></ul>
                    </div>
                    <div class="dialog-control">
                        <span class="icon close"></span></div>
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
            <a href="javascript:;" @click="hideThemeBox" id="_disk_id_8" class="sbtn okay" >
                <b>确定</b>
            </a>
            <a href="javascript:;" @click="hideThemeBox" id="_disk_id_9" class="dbtn cancel">
                <b>取消</b>
            </a>
        </div>
    </div>
</div>




    <!-- 永久删除文件夹的提示弹出框 -->

<!--    <div class="module-canvas" style="position: fixed; left: 0px; top: 0px; z-index: 50; background: rgb(0, 0, 0); opacity: 0.5; width: 100%; height: 100%; display: block;"></div>


    <div class="dialog dialog-confirm   dialog-gray" id="confirm" style="width: 460px; top: 212px; bottom: auto; left: 538px; right: auto; display: block; visibility: visible; z-index: 55;">
        <div class="dialog-header dialog-drag">
                <h3>
                        <span class="dialog-header-title">
                                <em class="select-text">确认删除</em></span>
                </h3>
                <div class="dialog-control">
                        <span class="dialog-icon dialog-close icon icon-close">
                                <span class="sicon">×</span></span>
                </div>
        </div>
        <div class="dialog-body">
                <div style="text-align:center;padding:40px 22px 22px 22px;">确认要把所选文件放入回收站吗？
                        <br>删除的文件可在10天内通过回收站还原</div></div>
        <div class="dialog-footer g-clearfix">
                <a class="g-button g-button-blue-large" data-button-id="b95" data-button-index="" href="javascript:;" title="确定" style="padding-left: 50px;">
                        <span class="g-button-right" style="padding-right: 50px;">
                                <span class="text" style="width: auto;">确定</span></span>
                </a>
                <a class="g-button g-button-large" data-button-id="b97" data-button-index="" href="javascript:;" title="取消" style="padding-left: 50px;">
                        <span class="g-button-right" style="padding-right: 50px;">
                                <span class="text" style="width: auto;">取消</span></span>
                </a>
        </div>
     
</div>
 -->



</div>
</template>

<script>
export default {
  name: "layoutHeader",
  data(){
    return {
        personLayer:false,
        level:2,//0,1,2 账号等级可根据文件个数 定义10 50 100
        avatr:"https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/1988db14.jpg",
        themeActivedId:0,
        themeTypeName:"white",
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
  mounted(){
 
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
    openThemeBox(){
     this.themeBoxSwitch = !this.themeBoxSwitch
    },
    hideThemeBox(){
     this.themeBoxSwitch = !this.themeBoxSwitch
    },
    changeTheme(){
    
    },
    updateTheme(themeName,index){
      this.themeTypeName = themeName
      this.themeActivedId = index
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

@import "../../assets/less/disk.header.less";
@import "../../assets/less/context-all.less";
@import "../../assets/less/disk.theme.less";
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
.theme-b-dialog.checked{
    display: block;
}


</style>
