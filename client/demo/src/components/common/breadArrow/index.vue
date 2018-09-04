<template>
  <ul class="FuIxtL" style="display: block;">
    <li>
        <a data-deep="-1" href="javascript:;">返回上一级{{nav}}</a>
        <span class="EKIHPEb">|</span></li>
    <li node-type="tbAudfb">
        <!-- <span title="全部文件/360云盘">...</span>

        <span class="KLxwHFb">&gt;</span>
        <a href="javascript:;" title="全部文件/360云盘" data-deep="1">360云盘</a>
        <span class="KLxwHFb">&gt;</span>
        <a href="javascript:;" title="全部文件/360云盘/test6667" data-deep="2">test6667</a>
        <span class="KLxwHFb">&gt;</span>
        <a href="javascript:;" title="全部文件/360云盘/test6667/新建文件夹" data-deep="3">新建文件夹</a>
        <span class="KLxwHFb">&gt;</span>
        
        <span title="全部文件/360云盘/test6667/新建文件夹/新建文件夹">新建文件夹</span> -->
        
        <span class="KLxwHFb" v-for="(item,index) in nav">
            &gt;
        </span>   
        
        <a href="javascript:;" :title="item" data-deep="1" v-for="(item,index) in nav">
          {{item}}
        </a> 

    </li>
    </ul>
</template>


<script>
export default {
    "name":"breadArrow",
    data(){
        return {
           
        }
    },
    computed:{
         nav(){
                function getQueryString(name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                    var r = window.location.search.substr(1).match(reg);
                    //if (r != null) return unescape(r[2]); return null;乱码
                    //js %2F  == /
                    //改造为中文斜线路径
                    if (r != null) return decodeURI(r[2]).replace(/%2F/g,'/'); return null; //中文
                }
               var path = getQueryString("path");
               return path.split('/').slice(1)
         }
    },
    mounted(){
    
    },
}
</script>


<style lang="less" scoped>

.FuIxtL a, .FuIxtL .EKIHPEb, .FuIxtL .KLxwHFb {
    color: #3b8cff;
}

</style>