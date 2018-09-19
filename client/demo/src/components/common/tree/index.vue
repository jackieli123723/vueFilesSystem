<template>
    <div>

        <div class="dialog dialog-fileTreeDialog   dialog-gray"   v-drag  id="fileTreeDialog" 
        style="width: 520px; top: 166.5px; bottom: auto; left: 700px; right: auto; display: block; visibility: visible; z-index: 52;">
  <div class="dialog-header dialog-drag">
    <h3>
      <span class="dialog-header-title">
        <em class="select-text">复制到</em></span>
    </h3>
    <div class="dialog-control">
      <span class="dialog-icon dialog-close icon icon-close">
        <span class="sicon">×</span></span>
    </div>
  </div>
  <div class="dialog-body">
    <div class="file-tree-container">
      <ul class="treeview treeview-content ">
        <li>
          <div class="treeview-node  treeview-node-on treeview-root _minus" data-padding-left="0" style="padding-left:0px">
            <span class="treeview-node-handler">
              <em class="b-in-blk plus icon-operate minus"></em>
              <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
              <span class="treeview-txt" data-file-path="/">全部文件</span></span>
          </div>
          <ul class="treeview treeview-root-content treeview-content " data-padding-left="15">
            <li>
              <div class="treeview-node" data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/2012最新HTML5+CSS3视频教程">2012最新HTML5+CSS3视频教程</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/2013传智播客网页平面UI设计基础班">2013传智播客网页平面UI设计基础班</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node" data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/360云盘">360云盘</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty" data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/android">android</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node" data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/apps">我的应用数据</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/bilinyou">bilinyou</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/daqisoft大旗软件工作">daqisoft大旗软件工作</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/dreamweaver">dreamweaver</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/EasyUI入门视频教程">EasyUI入门视频教程</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/gulp">gulp</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/hacker">hacker</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/host">host</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/html5">html5</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/HTML5开发框架PhoneGap实战(jQuery Mobile开发、API解析、3个经典项目实战)">HTML5开发框架PhoneGap实战(jQuery Mobile开发、API解析、3个经典项目实战)</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/HTML5入门视频教程【秀野堂】">HTML5入门视频教程【秀野堂】</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/HTML5实例教程">HTML5实例教程</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/HTML5网页设计【苏鹏】">HTML5网页设计【苏鹏】</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/HTML5游戏开发视频和源码开发手册">HTML5游戏开发视频和源码开发手册</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/ios">ios</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/JavaScript视频教程">JavaScript视频教程</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/jQuery入门">jQuery入门</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/mac-office套件破解">mac-office套件破解</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/Man.vs.Wild.S01-S07.MiXED">Man.vs.Wild.S01-S07.MiXED</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/php">php</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/php高级源码">php高级源码</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/ruanjian">ruanjian</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/u盘">u盘</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/vue">vue</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/webgl">webgl</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/web前端自动构建">web前端自动构建</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/WeX5_V3.3正式版">WeX5_V3.3正式版</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/[Chrome]">[Chrome]</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/百度云收藏">百度云收藏</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/插件">插件</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/电脑备份">电脑备份</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/电脑网页">电脑网页</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/翻墙软件工具">翻墙软件工具</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/贵州企迅网络科技">贵州企迅网络科技</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/海底世界">海底世界</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/来自PC的备份文件">来自PC的备份文件</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/来自：iPhone">来自：iPhone</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/来自：MI 3C">来自：MI 3C</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/来自：百度相册">来自：百度相册</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/来自百度手机浏览器">来自百度手机浏览器</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/龙渊">龙渊</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/论文">论文</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/梦想合伙人">梦想合伙人</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/爬虫">爬虫</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/首辰工作打包备份">首辰工作打包备份</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/首辰官网备份">首辰官网备份</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/网页">网页</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/网页虚的背景图片">网页虚的背景图片</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/网页抓取工具软件">网页抓取工具软件</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/微信表情">微信表情</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node treenode-empty    " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/微信应用号官方IDE">微信应用号官方IDE</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/我的资源">我的资源</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/虚拟机">虚拟机</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/移动端开发">移动端开发</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
            <li>
              <div class="treeview-node     " data-padding-left="15" style="padding-left:15px">
                <span class="treeview-node-handler">
                  <em class="b-in-blk plus icon-operate "></em>
                  <dfn class="b-in-blk treeview-ic treeview-dir"></dfn>
                  <span class="treeview-txt" data-file-path="/优美的后台管理">优美的后台管理</span></span>
              </div>
              <ul class="treeview  treeview-content treeview-collapse" data-padding-left="30px"></ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div class="dialog-footer g-clearfix">
    <a class="g-button g-button-large" data-button-id="b77" data-button-index="" href="javascript:;" title="取消" style="float: right; padding-left: 50px;">
      <span class="g-button-right" style="padding-right: 50px;">
        <span class="text" style="width: auto;">取消</span></span>
    </a>
    <a class="g-button g-button-blue-large" data-button-id="b79" data-button-index="" href="javascript:;" title="确定" style="float: right; padding-left: 50px;">
      <span class="g-button-right" style="padding-right: 50px;">
        <span class="text" style="width: auto;">确定</span></span>
    </a>
    <a class="g-button g-button-large" data-button-id="b81" data-button-index="" href="javascript:;" title="新建文件夹" style="float: left;">
      <span class="g-button-right">
        <em class="icon icon-newfolder" title="新建文件夹"></em>
        <span class="text" style="width: auto;">新建文件夹</span></span>
    </a>
  </div>
</div>

<div class="module-canvas" style="position: fixed; left: 0px; top: 0px; z-index: 50; background: rgb(0, 0, 0); opacity: 0.5; width: 100%; height: 100%; display: block;"></div>

     </div>   
</template>

<script>

import drag from '../../../directives/drag/drag'

export default {
    name:"tree",
    directives: {
      drag
    },
}
</script>

<style>

</style>

