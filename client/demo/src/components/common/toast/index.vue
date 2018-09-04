<template>
   <div>
           <template v-if="type=='loading'">
                 <!--  正在 -->
                <div class="module-yun-tip" v-if="show">
                        <div class="tip-inner">
                            <span class="tip-icon tip-icon-loading"></span>
                            <span class="tip-msg">{{toastText}}</span>
                        </div>
                </div>
           </template>

           <template v-if="type=='success'">
                 <!--  成功 -->
                  <div class="yun-header-tip-box" v-if="show">
                    <div class="yun-header-tip success">
                    <i class="yun-header-tip-icon icon icon-tips-success"></i>
                    <span class="yun-header-tip-msg">{{toastText}}</span>
                    </div>
                </div>
           </template>

            <template v-if="type=='failure'">
                 <!--  失败 -->
                  <div class="module-yun-tip red-yun-tips" v-if="show">
                    <div class="tip-inner">
                    <span class="tip-icon icon icon-tips-caution"></span>
                    <span class="tip-msg">{{toastText}}</span>
                    </div>
                </div>
           </template>

           <template v-if="type=='failureclose'" >
                <!-- // 失败 有关闭按钮 -->
                <div class="module-yun-tip red-yun-tips" v-if="show" >
                    <div class="tip-inner">
                        <span class="tip-icon icon icon-tips-caution"></span>
                        <span class="tip-msg">{{toastText}}</span>
                        <span class="tip-close tip-icon icon icon-tips-close" @click="close"></span>
                    </div>
                </div>
           </template>
      
   </div>


</template>

<script>
//default
//success
//failure
//loading
//percent 
//failureclose
export default {
    name: 'toast',
    props:{
        //提示的内容
        toastText:{
            type:String,
            default:"正在加载数据..."
        },
        //样式
        toastType:{
            type:String,
            default:'loading'
        },    
    },
  data(){
     return {
      //type:"failureclose",
      show:true
     }
  },
  computed:{
    type(){
        let tosttype = this.toastType 
        return tosttype
    }
  },
  mounted(){
     
  },
  methods:{
    close(){
     this.show = !this.show
    }
  }
}
</script>

<style lang="less" scoped>
.module-yun-tip{
top: 74px; 
left: 50%; 
margin-left: -58.5px;
}

.toast-transition{
    transition: all .3s ease;
}
.toast-enter{
    opacity:0;
    transform:scale(0.1);
}
.toast-leave{
    opacity:0;
    transform:scale(0.1);
}

.yun-header-tip-box{
    position: fixed
}
</style>

