<template>
  <div class="module-timelineList module-type" style="height: 100%;">
     
     <!-- 顶部导航 -->
      <div class="module-topToolBar">
          <div class="module-timeline-tabs">
            <span class="buttons activeStyle">
              <a href="/picture/timeline" class="router-link-active">时光轴</a></span>
            <span class="buttons classify-button">
              <a href="/picture/classify" class="">智能分类</a></span>
            <span class="buttons">
              <a href="/picture/recentupload" class="">最近上传</a></span>
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
