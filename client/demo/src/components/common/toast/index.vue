<template>
       <div  class="module-yun-tip" transition="toast">
            <div class="tip-inner">
                <span class="tip-icon tip-icon-loading"></span>
                <span class="tip-msg">正在加载数据...</span>
            </div>
        </div>

       <!-- <div class="yun-header-tip-box" >
        <div class="yun-header-tip success">
        <i class="yun-header-tip-icon icon icon-tips-success"></i>
        <span class="yun-header-tip-msg">皮肤应用成功！</span>
        </div>
      </div> -->
      
 <!--  正在 -->

 
<!-- 失败 -->

       <!-- <div class="module-yun-tip red-yun-tips">
           <div class="tip-inner">
           <span class="tip-icon icon icon-tips-caution"></span>
           <span class="tip-msg">不能将文件移动到自身或其子目录下</span>
           </div>
       </div> -->

       <!-- <div class="module-yun-tip">
           <div class="tip-inner">
           <span class="tip-icon icon icon-tips-success"></span>
           <span class="tip-msg">重命名成功</span>
           </div>
       </div> -->


    <!-- // 失败 有关闭按钮 -->
    <!-- <div class="module-yun-tip red-yun-tips" >
    <div class="tip-inner">
        <span class="tip-icon icon icon-tips-caution"></span>
        <span class="tip-msg">操作过于频繁，请稍后再试</span>
        <span class="tip-close tip-icon icon icon-tips-close"></span>
    </div>
    </div> -->

</template>

<script>
//success
//failure
//loading
//percent 
//failureclose

export default {
  name: 'toast',
    props:{
        //是否显示提示
        toastshow:{
            type:Boolean,
            required: false,
              default:function(){
                return false;
            }
        },
        //提示的内容
        toasttext:{
            type:String,
            required: false,
            default:function(){
                return 'no message';
            }
        },
        //显示的时间
        duration: {
            type: Number,
            default:3000,//默认3秒
            required:false
        }        
    },
  data(){
     return {

     }
  },
  methods:{

  },
   watch:{
        toastshow(val){
            if (this._timeout) clearTimeout(this._timeout)
            if (val && !!this.duration) {
             this._timeout = setTimeout(()=> this.toastshow = false, this.duration)
            }
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
</style>

