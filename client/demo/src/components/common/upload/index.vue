<template>
  <div v-if="show" class="dialog dialog-web-uploader   dialog-blue h5-uploader" id="web-uploader"
   style="width: 633px; top: auto; bottom: 0px; left: auto; right: 30px; display: block; visibility: visible; z-index: 42;position:fixed">
  
  <div class="dialog-header"  v-show="toggleUploadFlag" >
    <h3 @click="toggleUploder">
      <span class="dialog-header-title">
        <em class="select-text" v-if="files && files.length >0">正在上传({{uplodedNumber}}/{{files.length}})</em>
         <em class="select-text" v-if="files.length == 0">上传完成</em>
        </span>
       
    </h3>
    <div class="dialog-control">
      <span class="dialog-icon dialog-close icon icon-close"  @click="hide">
        <span class="sicon">×</span></span>
      <span class="dialog-icon dialog-min icon icon-minimize" @click="toggleUploder">
        <span class="sicon">-</span></span>
    </div>
  </div>

  <div class="dialog-min-header" v-show="!toggleUploadFlag"  style="display:block">
    <div class="header-progress" style="width: 46%; display: block;"></div>
    <h3 @click="toggleUploder">
      <span class="dialog-header-title">
         <em class="select-text"  v-if="files && files.length >0">正在上传({{uplodedNumber}}/{{files.length}})</em>
         <em class="select-text" v-if="files.length == 0">上传完成</em>
        </span>
    </h3>
    <div class="dialog-control">
      <span class="dialog-icon dialog-close icon icon-close" @click="hide">
        <span class="sicon">×</span></span>
      <span class="dialog-icon dialog-back icon icon-maximizing" @click="toggleUploder">
        <span class="sicon">□</span></span>
    </div>


    <!-- 这里的tips可关闭 -->
    <!-- <div class="tips has-error" style="display: block;">
      <div class="resident-caution" @click="toggleUploder">
        <span class="caution-title" style="width: 4px; text-indent: -9999px;">警告</span>
        <span class="caution-text">严禁利用百度网盘上传、传播暴力恐怖、色情违法及侵犯他人合法权益的违法信息，一经发现将严格按照相关法律法规处理。</span>
        <em class="arrow-outer"></em>
        <em class="arrow-inner"></em>
      </div>
      <div class="text">有3个文件上传成功</div>
      <em class="close">×</em></div> -->
    <div class="tips has-error" style="display: block;" v-if="successFlag == true">
        <div class="resident-caution" @click="toggleUploder">
          <span class="caution-title" style="width: 4px; text-indent: -9999px;">警告</span>
          <span class="caution-text">严禁利用百度网盘上传、传播暴力恐怖、色情违法及侵犯他人合法权益的违法信息，一经发现将严格按照相关法律法规处理。</span>
          <em class="arrow-outer"></em>
          <em class="arrow-inner"></em>
        </div>
    
        <div class="text">有32个文件上传成功</div>
        <em class="close" @click="successFlag = !successFlag">×</em>
       </div>
   
  </div>

  <div class="dialog-body" style="display: block;" v-show="toggleUploadFlag">
    <div class="uploader-list-wrapper">
      <div class="uploader-list-header">
        <div class="file-name">文件(夹)名</div>
        <div class="file-size">大小</div>
        <div class="file-path">上传目录</div>
        <div class="file-status">状态</div>
        <div class="file-operate">操作</div></div>

       <div class="tips has-error" style="display: block;" v-if="successFlag == true">
        <div class="resident-caution">
          <span class="caution-title" style="width: 4px; text-indent: -9999px;">警告</span>
          <span class="caution-text">严禁利用百度网盘上传、传播暴力恐怖、色情违法及侵犯他人合法权益的违法信息，一经发现将严格按照相关法律法规处理。</span>
          <em class="arrow-outer"></em>
          <em class="arrow-inner"></em>
        </div>
    
        <div class="text">有3个文件上传成功</div>
        <em class="close" @click="successFlag == false">×</em>
       </div>
       
        
      <div class="uploader-list">
        <ul class="container" id="uploaderList">

            <li class="file-list status-waiting" v-for="(file,index) in files">
              <div class="process"></div>
              <div class="info">
                <div class="file-name" title="1523938751785-2004-8992.png">
                  <div class="file-icon fileicon-small-pic"></div>
                  <span class="name-text">{{file.name}}</span></div>
                <div class="file-size">{{size(file.size)}}</div>
                <div class="file-path">
                  <a title="新建文件夹(9)" class="server_path" 
                  href="#/all?path=%2F360%E4%BA%91%E7%9B%98%2F%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9(9)%2F">新建文件夹(9)</a></div>
                <div class="file-status">
                  <span class="waiting">排队中…</span>
                  <span class="prepare">准备上传…</span>
                  <span class="uploading">
                    <em class="precent">0%</em>
                    <em class="speed">(0b/s)</em></span>
                  <span class="error">
                    <em></em>
                    <i>服务器错误</i>
                    <b>
                    </b>
                  </span>
                  <span class="caution">
                    <em></em>
                    <i>服务器错误</i>
                    <b>
                    </b>
                  </span>
                  <span class="pause">
                    <em></em>
                    <i>已暂停</i>
                  </span>
                  <span class="cancel">
                    <em></em>
                    <i>已取消</i>
                  </span>
                  <span class="success">
                    <em></em>
                    <i>
                    </i>
                  </span>
                </div>
                <div class="file-operate">
                  <em class="operate-pause"></em>
                  <em class="operate-continue"></em>
                  <em class="operate-retry"></em>
                  <em class="operate-remove"></em>
                  <a class="error-link" href="javascript:void(0);">点我解决</a>
                </div>
              </div>
            </li>

          
        </ul>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import {formatFileNameType, formatFileSize} from '../../../utils/common'

export default {
  name:"upload",
  data(){
    return {
     uplodedNumber:0,//成功个数
     files: [],
     toggleUploadFlag:true, //默认展开上传列表
     show:true, //上传显示
     successFlag:true//折叠上传tips
    }
  },
  methods: {
       size(fileSize){
           return formatFileSize(fileSize)
       },
      uploadFile: function (file) {
        var item = {
          name: file.name,
          type:file.type,
          size:file.size,
          speed:'300kb/s',
          uploadPercentage: 0
        };
        this.files.push(item);
        //ajax 批量上传
        // var fd = new FormData();
        // fd.append('myFile', file);
        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', 'upload.php', true);
        // xhr.upload.addEventListener('progress', function (e) {
        //   item.uploadPercentage = Math.round((e.loaded * 100) / e.total);
        // }, false);
        // xhr.send(fd);
      },
      onDrag: function (e) {
        e.stopPropagation();
        e.preventDefault();
      },
      onDrop: function (e) {
        e.stopPropagation();
        e.preventDefault();
        var dt = e.dataTransfer;
        for (var i = 0; i !== dt.files.length; i++) {
          this.uploadFile(dt.files[i]);
        }
      },
      toggleUploder(){
         console.log(4)
         this.toggleUploadFlag = !this.toggleUploadFlag
      },
      hide(){
          this.show = !this.show
      }
    },
    mounted: function () {
      var dropbox = document.querySelector('.h5-uploader');
      dropbox.addEventListener('dragenter', this.onDrag, false);
      dropbox.addEventListener('dragover', this.onDrag, false);
      dropbox.addEventListener('drop', this.onDrop, false);
    }
}
</script>
