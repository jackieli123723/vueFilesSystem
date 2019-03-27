<template>
<div id="module-picture" class="module-picture">
	<!---->
	<!---->
	<div class="module-recentUpload" style="height: 100%;">
		<div class="module-topToolBar">
			<div class="module-timeline-tabs">
				<span class="buttons">
					<a href="/picture/timeline" class="">
						时光轴
					</a>
				</span>
				<span class="buttons classify-button">
					<a href="/picture/classify" class="">
						智能分类
					</a>
				</span>
				<span class="buttons activeStyle">
					<a href="/picture/recentupload" class="router-link-active">
						最近上传
					</a>
				</span>
				<!---->
				<!---->
			</div>
			<div class="module-search-timeline" style="right: 68px;">
				<div node-type="form-box" class="form-box">
					<div class="search-form clearfix">
						<input type="text" placeholder="通过人物，事物，地点搜索你的图片" class="search-query">
						<!---->
						<span class="search-button">
							<span class="icon icon-search">
							</span>
						</span>
					</div>
				</div>
				<!---->
			</div>
			<div class="setting-box" style="right: 24px;">
				<span class="icon icon-setting">
				</span>
				<!---->
				<!---->
				<!---->
			</div>
		</div>
		<div class="module-list-init">
			<div class="module-list">
				<!---->
				<!---->
				<div class="module-list-header-container">
					<div class="module-list-header">
						<ul class="list-cols">
							<li data-key="checkall" class="first-col last-col col" style="width: 100%; cursor: default;">
								<div class="col-item check">
									<span class="check-icon">
									</span>
									<span class="icon timeline-checksmall icon-checksmall">
									</span>
								</div>
								<span class="text">
									全选
								</span>
								<!---->
								<span class="dataInfo">
									已加载200个
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="module-list-view">
					<div node-type="module-grid-container" class="g-clearfix  module-grid-container"
					listviewtype="1" listcontainer=".module-list-view" style="height: 3200px;">
						<div class="g-clearfix grid-view" style="height: auto;">
							<div class="recycle-group" style="position: absolute; left: 0px; top: 0px; width: 1600px; height: 1600px;">
								<div class="line-group" style="position: absolute; left: 0px; top: 0px; width: 1600px; height: 160px;">
									<dd data-index="0" data-fsid="492473070950001" class="g-clearfix grid-viewport-item content-item"
									style="position: absolute; left: 0px; top: 0px;">
										<div class="fileicon">
											<div class="img-container" style="background-image: url(http://img3.imgtn.bdimg.com/it/u=2046015016,2543570331&fm=26&gp=0.jpg); opacity: 1;">
											</div>
											<!---->
											<!---->
											<div class="hoverMask">
											</div>
											<div class="hoverBorder">
											</div>
											<div class="hoverCover">
											</div>
											<!---->
										</div>
										<span node-type="timeline-checkbox" class="timeline-checkbox">
											<!---->
											<span class="icon circle-icon">
												
											</span>
											<span class="icon checkgridsmall">
												
											</span>
										</span>
										<span class=" icon icon-imageEnlarge imageEnlargeShow">
										</span>
									</dd>
								</div>
							</div>
						</div>
					</div>
					<!---->
				</div>
				<!---->
				<!---->
			</div>
		</div>
	</div>
	<!---->
	<!---->
	<!---->
	<div class="guide-auto-box">
		<!---->
		<!---->
		<!---->
	</div>
</div>

</template>

<script>
export default {
    name: 'recentupload',
}
</script>

<style lang="less" scoped>
@import "../../assets/less/disk.header.less";
@import "../../assets/less/home-all.less";
@import "../../assets/less/picture.less";

</style>