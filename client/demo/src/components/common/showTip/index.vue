<template>
<div>
  <template v-if="delType==1">
  <div id="themeConfirmBg" v-if="show"></div>  
  <div v-if="show" class="b-panel theme-b-dialog theme-alert-dialog header-theme-alert-dialog not-save-dialog" id="themeConfirm">
        <div class="dlg-hd b-rlv">
                <div class="dlg-cnr dlg-cnr-r icon icon-close" @click="closeConfirm"></div>
                <h3>{{delHeadTitle}}</h3>
        </div>
        <div class="dlg-bd">
                <div class="theme-alert-dialog-msg center">{{delTitle}}</div>
        </div>
        <div class="dlg-ft b-rlv">
                <div class="theme-alert-dialog-commands clearfix center">
                        <a href="javascript:;"  class="sbtn okay" @click="callBackSure">
                                <b>{{delSureText}}</b>
                        </a>
                        <a href="javascript:;" class="dbtn cancel" @click="closeConfirm">
                                <b>{{delCancelText}}</b>
                        </a>
                </div>
            
        </div>
  </div> 
  </template>

  <template v-if="delType==2">
  <div class="module-canvas" v-if="show" ></div>
  <div class="dialog dialog-confirm  dialog-gray" v-if="show" id="confirm">
    <div class="dialog-header dialog-drag">
      <h3>
        <span class="dialog-header-title">
          <em class="select-text">{{delHeadTitle}}</em></span>
      </h3>
      <div class="dialog-control">
        <span class="dialog-icon dialog-close icon icon-close"  @click="closeConfirm">
          <span class="sicon">×</span>
          </span>
      </div>
    </div>
    <div class="dialog-body">
      <div class="dialog-body-text">{{delTitle}}
        <br><br>
      </div>
    </div>
    <div class="dialog-footer g-clearfix">
      <a class="g-button g-button-blue-large" @click="callBackSure" href="javascript:;" >
        <span class="g-button-right" >
          <span class="text">{{delSureText}}</span></span>
      </a>
      <a class="g-button g-button-large" @click="closeConfirm" href="javascript:;">
        <span class="g-button-right">
          <span class="text">{{delCancelText}}</span></span>
      </a>
    </div>
  </div>
  </template>

</div>
</template>


<script>

  export default{
    name:"showTip",
    props: {
        delHeadTitle:{
          type: String,
          default:"确认删除"
        },
        delTitle:{
          type: String,
          default:"确认要把所选文件放入回收站吗？"
        },
        delSureText:{
          type: String,
          default:"确定"
        },
        delCancelText:{
          type: String,
          default:"取消"
        },
        delType:{
          type: Number,
          default:1
        },
    },
    data() {
      return {
        show:true
      }
    },
    methods:{
      closeConfirm(){
          this.show = false;
          this.$emit('delItem') 
      },
      callBackSure() {  
        this.show = false;
        this.$emit('delItem') 
       }  
    }
  }
</script>

<style lang="less" scoped>

.KPDwCE .g-button{
 border:1px solid #c0d9fe;
}
.g-button-large .text{
  color:#3b8cff;
}
.g-button-blue-large,.g-button-large{
padding-left: 50px;
}

.g-button-right{
  padding-right: 50px;
}

.dialog-body-text{
text-align:center;
padding:40px 22px 22px 22px;
}

.g-button-large .g-button-right, .g-button-blue-large .g-button-right {
    height: 32px;
    line-height: 32px;
    padding-right: 50px;
}
.module-canvas{
  position: fixed; 
  left: 0px;
   top: 0px;
  z-index: 50; 
  background: rgb(0, 0, 0);
  opacity: 0.5; 
  width: 100%;
  height: 100%; 
  display: block;
}

#confirm{
  position: fixed;
  width: 460px;
  height: 224px; /*必须写个偶数 否则字体模糊*/
  left: 50%;
  top:50%;
  transform:translate(-50%,-50%);
  display: block;
  z-index: 55;
}


#themeConfirmBg{
    left: 0px;
    top: 0px;
    right: 0px;
    bottom:0;
    position: fixed;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 5000;
    background: #000;
    opacity: .5!important;
}

#themeConfirm{
    display: block;
    height:164px;
    position: fixed;
    left: 50%;
    top:50%; 
    transform: translate(-50%,-50%);
    z-index: 5001;
}
</style>