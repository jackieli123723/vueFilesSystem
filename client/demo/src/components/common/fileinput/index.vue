<template>
     <div class="ExFGye"  
      :class="{'jyabN0g':fileInputHorizontal == true}" 
      v-show="fileInputFlag"
      :style="{display: 'block', left: fileInputStyle.left + 'px',top:fileInputStyle.top + 'px'}"
      >
      <div class="arcrG7oq">
        <input  class="GadHyA" type="text" v-focus v-model="title" @input="changeTitle"  >
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
          default:"新建文件夹"
        },
        fileInputStyle:{
          type: Object,
          default:""
        },
        fileInputHorizontal:{
          type: Boolean,
          default:false  //默认竖屏
        }
  },
  computed:{
      ...mapGetters(['fileInputFlag']),
  },
  data() {
      return {
        title:this.fileNameTitle
      }
  },
  methods:{
      fileRenameCancelText(){
         this.$store.commit('updateFileInputFlag',false)
       
      },
      fileRenameSureText() {
          this.$emit('changeFileNameSure',this.title) 
          this.$store.commit('updateFileInputFlag',false)
      },
      changeTitle(){
          this.$emit('changeFileName', this.title)
      }  
    }
}
</script>

<style lang="less" scoped>
.KPDwCE .wPQwLCb{
        visibility: visible;
}

/*新加重名名的 背景色*/
.arcrG7oq {
    background: #F0F8FD;
}
</style>

