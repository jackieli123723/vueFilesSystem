<template>
  <ul class="FuIxtL" style="display: block;">
    <li>
        <a data-deep="-1" href="javascript:;" @click="back">返回上一级</a>
        <span class="EKIHPEb">|</span></li>
            <li>
                <span title="全部文件/360云盘" v-if="nav && nav.length >= 4">...</span>
                <!-- <a href="javascript:;" title="全部文件" v-else >全部文件</a> -->
      
                    <router-link to='/all' v-else >
                              全部文件
                    </router-link>

                <div style="display:inline-block" v-for="(item,index) in nav" >
                    <span class="KLxwHFb">&gt;</span>
                    <!-- 最后一个不能点击 -->
                    <span :data-deep=index v-if="nav.length == index+1">{{item}}</span>
                    <!-- 中间遍历的锚点 -->
                    <a href="javascript:;" :data-deep=index v-else @click="deepStep(filterNav,index)">{{item}}</a>
                </div> 

                <!-- <span class="KLxwHFb">&gt;</span>
                <a href="javascript:;" title="全部文件/360云盘/test6667" data-deep="2">test6667</a>
                <span class="KLxwHFb">&gt;</span>
                <a href="javascript:;" title="全部文件/360云盘/test6667/新建文件夹" data-deep="3">新建文件夹</a>
                <span class="KLxwHFb">&gt;</span>
                
                <span title="全部文件/360云盘/test6667/新建文件夹/新建文件夹">新建文件夹</span> -->
                
                <!-- <span class="KLxwHFb" v-for="(item,index) in nav">
                    &gt;
                </span>   

                <a href="javascript:;" :title="item" data-deep="1" v-for="(item,index) in nav">
                {{item}}
                </a>  -->

            </li>
    </ul>
</template>


<script>

  function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    //if (r != null) return unescape(r[2]); return null;乱码
    //js %2F  == /
    //改造为中文斜线路径
    if (r != null) return decodeURI(r[2]).replace(/%2F/g,'/'); return null; //中文
}

export default {
    "name":"breadArrow",
    data(){
        return {
          deepIndex:0
        }
    },
    computed:{
        //默认的路由分割
         nav(){
               let path = getQueryString("path");
               console.log(path)
               return path.length ? path.split('/').slice(1) : []
         },
         //算法实现面包屑分割数组
         filterNav(filterNav){
             if(this.nav.length >=4){
                return this.nav.slice(this.nav.length-5,this.nav.length) //取值后面4个
             }else{
               return this.nav
             }
         },
         //动态计算改变的路径
         changePath(){
             return '/'+this.filterNav.slice(this.deepIndex).join('/')
         }
    },
    mounted(){
    
    },
    methods:{
        //生成每个面包屑箭头
        deepStep(filterNav,index){
           this.deepIndex = index 
           console.log('当前click',index)
            this.$router.push({
                path: '/all',
                query: {
                    path: this.changePath
                }
            })

        },
        back(){
            this.$router.go(-1)
        },
        hashchange(){
            function onHashChange(){
                console.log('dddd')
            }
            window.addEventListener('hashchange', onHashChange)
            
        }
    },
     watch:{
      '$route':'hashchange'
     }
}
</script>


<style lang="less" scoped>

// .FuIxtL a, .FuIxtL .EKIHPEb, .FuIxtL .KLxwHFb {
//     color: #3b8cff;
// }

</style>