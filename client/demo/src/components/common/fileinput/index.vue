<template>
     <div class="ExFGye"  
      :class="{'jyabN0g':fileInputHorizontal == true}" 
      v-show="fileInputFlag"
      style="left: 20px; top: 102px; display: block;"
      >
            <div class="arcrG7oq">
              <input  class="GadHyA" type="text" v-focus v-model="title">
              <span  class="xkqbqwN" @click="fileRenameSureText">
                <em class="icon mvGVaA"></em>
                <em class="icon gtrbjL9"></em>
              </span>
              <span  class="yvodbPE4" @click="fileRenameCancelText">
                <em class="icon mvGVaA"></em>
                <em class="icon wheXnAQ"></em>
              </span>
            </div>
    </div>
</template>
 
<script>
import { mapGetters } from 'vuex'

//ExFGye jyabN0g -- 竖屏
//ExFGye  -- 横屏
export default {
  name: 'fileinput',
  props: {
        fileNameTitle:{
          type: String,
          default:""
        },
        fileInputStyle:{
          type: String,
          default:""
        },
        fileInputHorizontal:{
          type: Boolean,
          default:false  //默认竖屏
        }
  },
  computed:{
      ...mapGetters(['fileInputFlag']),
      title(){
          if(this.fileNameTitle !== ''){
              return this.fileNameTitle
          }else{
              return  '新建文件夹'
          }
      }
  },
  data() {
      return {
       
      }
  },
  methods:{
      fileRenameCancelText(){
         this.$store.commit('updateFileInputFlag',false)
      },
      fileRenameSureText() {
          this.$emit('fileName',this.title) 
          this.$store.commit('updateFileInputFlag',false)
     }  
    }
}
</script>

<style lang="less" scoped>
.KPDwCE .wPQwLCb{
        visibility: visible;
}
</style>

