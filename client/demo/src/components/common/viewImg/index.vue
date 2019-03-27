<template>
    <div class="dialog dialog-dialog1   dialog-gray imgDialog" id="dialog1">
	<div class="dialog-body">
		<div class="img-dialog module-picPreview" id="imgs-dialog">
			<div node-type="dlg-hd" class="dlg-hd">
				<a title="关闭" hidefocus="true" id="_disk_id_1" class="dlg-img-ic dlg-img-close icon icon-picpre-close">
				</a>
			</div>
			<div node-type="dlg-two-dimension" class="dlg-two-dimension">
				<a title="手机安装入口" class="dlg-phone-ic icon icon-picpre-phone" node-type="downloadText">
				</a>
			</div>
			<div node-type="dlg-livephoto-control" class="dlg-livephoto-control" style="display: none;">
				<div node-type="livp-icon" class="livp-icon start-loading">
				</div>
				<div node-type="livp-play-tip" class="livp-play-tip" style="display: none;">
					<p class="livp-tip-text">
					</p>
					<div class="tip-triangle">
					</div>
				</div>
			</div>
			<div class="dlg-bd" node-type="dlg-bd" style="width: 1920px; height: 515px;">
				<div class="module-showPic clearfix" style="width: 1800px; height: 495px;">
					<div node-type="img-wrap" class="img-wrap">
						<div node-type="livp-video" class="livp-video" style="display: none; visibility: visible; transform: rotate(0deg);">
						</div>
						<img src="https://thumbnail10.baidupcs.com/thumbnail/e0eae40e5337e4c6355a150861e1ac70?fid=2282772228-250528-1073886182674987&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-JEZWp8FSDXF2QcJsod0D%2fY32UvQ%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c1920_u1080&amp;quality=90&amp;vuk=2282772228&amp;ft=image&amp;autopolicy=1"
						node-type="viewpic-image" id="viewpic-image" style="transform: rotate(0deg); top: 0px; left: 460px; width: 880px; height: 495px; visibility: visible;">
						<img src="#" node-type="viewpic-image-substitute" id="viewpic-image-substitute"
						style="visibility: hidden;">
					</div>
					<div node-type="img-nav" class="img-nav">
						<div node-type="img-nav-left" class="img-nav-left" hidefocus="true" style="display: none;">
							<span node-type="pre-arrow" class="pre-arrow">
								<em class="pre-arrow-content icon icon-picpre-before">
								</em>
							</span>
						</div>
						<div node-type="img-nav-right" class="img-nav-right" hidefocus="true"
						style="display: none;">
							<span node-type="next-arrow" class="next-arrow">
								<em class="next-arrow-content icon icon-picpre-next">
								</em>
							</span>
						</div>
					</div>
					<div class="img-loading" node-type="img-loading">
						<div class="loading-container" style="display: none;">
							<svg class="spinner" width="26px" height="26px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
								<circle class="path" fill="none" stroke-width="6" stroke-linecap="round"
								cx="33" cy="33" r="30" style="stroke:#4288ed">
								</circle>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div class="module-thumbnailPic">
				<div class="operate-area" node-type="operate-area">
					<div class="operate-container" node-type="operate-container">
						<div node-type="print-pic" class="print-pic icon icon-picpre-cloudprint">
							<em class="print-pic-title">
								云冲印
							</em>
						</div>
						<div class="img-control" node-type="img-control">
							<em node-type="large-pic" class="control control-left icon icon-picpre-enlarge"
							title="放大">
							</em>
							<em node-type="control-left" class="control control-left icon icon-picpre-rotate"
							title="左旋转">
							</em>
							<em node-type="control-share" class="control control-share icon icon-my-share"
							title="分享给好友">
							</em>
							<em node-type="control-download" class="control control-download icon icon-picpre-download"
							title="下载图片">
							</em>
							<em node-type="control-edit" class="control control-edit icon icon-picpre-beautify"
							title="美化图片">
							</em>
							<em node-type="control-delete" class="control control-delete icon icon-picpre-delete"
							title="删除图片">
							</em>
							<em node-type="control-reappear" class="control control-reappear icon icon-picpre-detail"
							title="图片详情">
							</em>
						</div>
						<div node-type="show-thumb" class="show-thumb show">
							<em class="show-thumb-title" node-type="show-thumb-title">
								收起缩略图
							</em>
							<em class="icon show-thumb-icon icon-picpre-pulldown" node-type="show-thumb-icon">
							</em>
						</div>
					</div>
				</div>
				<div class="thumb-wrap" node-type="thumb-wrap" style="width: 1030px; display: block;">
					<ol node-type="thumb-list" class="thumb-list">
						<li node-type="thumb-item" class="thumb-item">
							<img node-type="slider-item" class="slider-item" data-index="0" src="https://thumbnail10.baidupcs.com/thumbnail/11eb0235c4d28520ffd756c4b4053aaf?fid=2282772228-250528-1122532426776666&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jbfTQnrbN7O%2bdOiI9lttqd65TzQ%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c256_u256&amp;quality=90&amp;vuk=2282772228&amp;ft=image">
						</li>
						<li node-type="thumb-item" class="thumb-item">
							<img node-type="slider-item" class="slider-item" data-index="1" src="https://thumbnail10.baidupcs.com/thumbnail/1136b76ec70b7ed2119edc75f95d3a34?fid=2282772228-250528-949247354845038&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-9Xd8btnRVwzuH0RJFjvWNDQ0VJE%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c256_u256&amp;quality=90&amp;vuk=2282772228&amp;ft=image">
						</li>
						<li node-type="thumb-item" class="thumb-item">
							<img node-type="slider-item" class="slider-item" data-index="2" src="https://thumbnail10.baidupcs.com/thumbnail/4b31d51d6d74994c12ff085d5b826894?fid=2282772228-250528-304887689372311&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-UJAry0h65uZj1kunzymsTRUw1Ew%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c256_u256&amp;quality=90&amp;vuk=2282772228&amp;ft=image">
						</li>
						<li node-type="thumb-item" class="thumb-item">
							<img node-type="slider-item" class="slider-item" data-index="3" src="https://thumbnail10.baidupcs.com/thumbnail/6db33627a78dd8bf41e0aeae4fefbaf9?fid=2282772228-250528-719971595900898&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-TO8IAke8ZwukYmomLLOr6JWWBxA%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c256_u256&amp;quality=90&amp;vuk=2282772228&amp;ft=image">
						</li>
						<li node-type="thumb-item" class="thumb-item">
							<img node-type="slider-item" class="slider-item" data-index="4" src="https://thumbnail10.baidupcs.com/thumbnail/015abac791888eb1c15469f8ad4a91f6?fid=2282772228-250528-1105396461791062&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-OeiAUoP7N6x%2fpFKvSDlBHXD2urk%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c256_u256&amp;quality=90&amp;vuk=2282772228&amp;ft=image">
						</li>
						<li node-type="thumb-item" class="thumb-item current">
							<img node-type="slider-item" class="slider-item" data-index="5" src="https://thumbnail10.baidupcs.com/thumbnail/e0eae40e5337e4c6355a150861e1ac70?fid=2282772228-250528-1073886182674987&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-JEZWp8FSDXF2QcJsod0D%2fY32UvQ%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c256_u256&amp;quality=90&amp;vuk=2282772228&amp;ft=image">
						</li>
						<li node-type="thumb-item" class="thumb-item">
							<img node-type="slider-item" class="slider-item" data-index="6" src="https://thumbnail10.baidupcs.com/thumbnail/3ec534778b29a7a5a4a96a98a0758132?fid=2282772228-250528-1080168574312803&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-iJvWuZLD%2f6y%2f1FdoJAd9%2bhWIVxU%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c256_u256&amp;quality=90&amp;vuk=2282772228&amp;ft=image">
						</li>
						<li node-type="thumb-item" class="thumb-item">
							<img node-type="slider-item" class="slider-item" data-index="7" src="https://thumbnail10.baidupcs.com/thumbnail/2618a3968829335ecc1ed38ee0c15501?fid=2282772228-250528-71387804246295&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-zMt405PShcjGamy%2fzrzMOJpUiPs%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c256_u256&amp;quality=90&amp;vuk=2282772228&amp;ft=image">
						</li>
						<li node-type="thumb-item" class="thumb-item">
							<img node-type="slider-item" class="slider-item" data-index="8" src="https://thumbnail10.baidupcs.com/thumbnail/871f0008e7e299f43671ef02898a83da?fid=2282772228-250528-831820925989224&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jDHTkUrHIulM%2bEBNQ9QT3Wck3rw%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c256_u256&amp;quality=90&amp;vuk=2282772228&amp;ft=image">
						</li>
						<li node-type="thumb-item" class="thumb-item">
							<img node-type="slider-item" class="slider-item" data-index="9" src="https://thumbnail10.baidupcs.com/thumbnail/e16f830e5ea96f9d301896b37680ebf5?fid=2282772228-250528-616555351994544&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-WAVqSI%2bFRHbYSybyvvlilNVoMHE%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c256_u256&amp;quality=90&amp;vuk=2282772228&amp;ft=image">
						</li>
						<li node-type="thumb-item" class="thumb-item">
							<img node-type="slider-item" class="slider-item" data-index="10" src="https://thumbnail10.baidupcs.com/thumbnail/d365d1335a8eff850dcdbff59e60f59d?fid=2282772228-250528-317459094855182&amp;rt=pr&amp;sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-TiAVxlg8SFnPu6BlymTwxbrlgdg%3d&amp;expires=8h&amp;chkbd=0&amp;chkv=0&amp;dp-logid=5791259039342580417&amp;dp-callid=0&amp;time=1536307200&amp;size=c256_u256&amp;quality=90&amp;vuk=2282772228&amp;ft=image">
						</li>
					</ol>
				</div>
			</div>
			<div class="dlg-aside" node-type="dlg-aside">
				<div node-type="module" class="module-picPreviewAside" id="picPreviewAside">
					<div class="box" node-type="box">
						<div class="file-info" node-type="file-info">
							<div class="title" node-type="title">
								照片详情
							</div>
							<div>
								<div>
									<div node-type="sculpture-top" class="detail-top" style="display: none;">
										人脸
									</div>
									<div node-type="sculpture-box" class="sculpture-box" style="display: none;">
										<div node-type="human-sculpture" class="sculpture-item">
											<a class="sculpture-area" target="_blank">
												<img class="sculpture-img" src="" style="display: none;">
											</a>
										</div>
										<div node-type="human-sculpture" class="sculpture-item">
											<a class="sculpture-area" target="_blank">
												<img class="sculpture-img" src="" style="display: none;">
											</a>
										</div>
										<div node-type="human-sculpture" class="sculpture-item">
											<a class="sculpture-area" target="_blank">
												<img class="sculpture-img" src="" style="display: none;">
											</a>
										</div>
										<div node-type="human-sculpture" class="sculpture-item">
											<a class="sculpture-area" target="_blank">
												<img class="sculpture-img" src="" style="display: none;">
											</a>
										</div>
										<div node-type="human-sculpture" class="sculpture-item">
											<a class="sculpture-area" target="_blank">
												<img class="sculpture-img" src="" style="display: none;">
											</a>
										</div>
										<div node-type="human-sculpture" class="sculpture-item">
											<a class="sculpture-area" target="_blank">
												<img class="sculpture-img" src="" style="display: none;">
											</a>
										</div>
									</div>
									<div node-type="category-top" class="detail-top" style="display: block;">
										分类
									</div>
									<div node-type="category-box" class="category-box" style="display: block;">
										<div class="category-detail" style="display: inline-block; width: 46px;">
											<a class="category-detail-info" target="_blank" href="/disk/timeline#/classifyList/1/23">
												卡通
											</a>
										</div>
										<div class="category-detail" style="display: none;">
											<a class="category-detail-info" target="_blank">
											</a>
										</div>
										<div class="category-detail" style="display: none;">
											<a class="category-detail-info" target="_blank">
											</a>
										</div>
									</div>
								</div>
								<div class="filename-box">
									<div class="detail-left">
										文件名
									</div>
									<div class="detail-right">
										<div node-type="filename" class="filename-info" title="single-1530525682430.png">
											single-1530525682430.png
										</div>
									</div>
								</div>
								<div node-type="directory-box">
									<div class="detail-left-directory">
										所属文件夹
									</div>
									<div class="detail-right">
										<a node-type="directory" class="directory-info" target="_blank" title="360云盘"
										href="/disk/home#/all?path=%2F360%E4%BA%91%E7%9B%98%2F">
											360云盘
										</a>
									</div>
								</div>
								<div>
									<div class="detail-left">
										地点
									</div>
									<div class="detail-right">
										<a node-type="address" class="address-info" target="_blank" style="text-decoration: none;">
											未知
										</a>
									</div>
								</div>
								<div>
									<div class="detail-left">
										时间
									</div>
									<div class="detail-right">
										<div node-type="date-pre" class="date-pre">
											2018年9月3日
										</div>
										<div node-type="date-after" class="date-after" style="display: block;">
											周一，下午16:02
										</div>
									</div>
								</div>
								<div>
									<div class="detail-left">
										大小
									</div>
									<div class="detail-right">
										<div class="size-info" node-type="size" style="display: inline-block;">
											1920 x 1080
										</div>
										<div class="size-info" node-type="capacity">
											89KB
										</div>
									</div>
								</div>
								<div class="retract-hide icon icon-picpre-close" node-type="retract">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
    name:"viewimg"
}
</script>

<style lang="less" scoped>
#dialog1{
position: fixed;
width:100%;
height: 100%;
 top: 0px; 
 bottom: 0px; 
 left: 0px;
  right: 0px;
   display: block;
	visibility: visible; 
	z-index: 9999;
}
</style>
