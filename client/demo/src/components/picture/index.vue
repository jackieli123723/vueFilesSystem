<template>
  <div class="module-timelineList module-type" style="height: 100%;">
     
     <!-- 顶部导航 嵌套跳转 不能用a 否则导致 页面reload-->
      <div class="module-topToolBar">

          <div class="module-timeline-tabs">
            <span class="buttons activeStyle">
         
              <router-link :to="'/picture/timeline'" class="router-link-active">时光轴</router-link>
            </span>  
            <span class="buttons classify-button">
  
              <router-link :to="'/picture/classify'">智能分类</router-link>
            </span>  
            <span class="buttons">
            
              <router-link :to="'/picture/recentupload'">最近上传</router-link>
              </span>
          </div>

          <div class="module-search-timeline" style="right: 25px;">
            <div node-type="form-box" class="form-box">
              <div class="search-form clearfix">
                <input type="text" placeholder="通过人物，事物，地点搜索你的图片" class="search-query">
                <!---->
                <span class="search-button">
                  <span class="icon icon-search"></span>
                </span>
              </div>
            </div>
          </div>
    </div>
<!-- 
       瀑布流视图切换 -->
       <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'pictures',
}
</script>

<style lang="less" scoped>
@import "../../assets/less/disk.header.less";
@import "../../assets/less/home-all.less";

</style>
