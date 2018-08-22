<template>
    <div class="layout-main-box">
      <div class="DxdbeCb g-clearfix">
        <div class="jkX58n">

           <!-- 切换横竖屏幕  -->
          <div class="exXnMQ bndX5PY">
            <a v-if="fileItemStylePortrait == false" @click="changeFileItemStyle" class="kcyG6q9" href="javascript:void(0)">
              <span class="icon icon-list"></span>
            </a>
            <a v-else class="hqpXWJZ" @click="changeFileItemStyle" href="javascript:void(0)">
              <span class="icon icon-grid"></span>
            </a>
          </div>

          <div class="EzLavy">
            <div class="xxyXvlq" >
              <span class="icon icon-order"></span>
            </div>
            <div class="sDwvAgb" style="display:block">
              <span data-key="name" class="vAFAFF">
                <em class="icon icon-sort-select"></em>文件名</span>
              <span data-key="size" class="vAFAFF">
                <em class="icon icon-sort-select"></em>大小</span>
              <span data-key="time" class="vAFAFF ugcOHtb">
                <em class="icon icon-sort-select"></em>修改日期</span>
            </div>
          </div>

          <div class="OFaPaO">
            <div class="zznb188" node-type="dmlqG3oz">
              <form node-type="ieG2Zn" class="zlwGMOy xspk9j5" action="javascript: void(0)" method="get">
                <input node-type="mrpaG7OE cdhubK69" data-key="SEARCH_QUERY" autocomplete="off" class="gijubDx0" name="q" value="" spellchecking="off" type="text">
                <span node-type="vxbqye" class="ivqqkwlj icon icon-search-del" style="display: none;"></span>
                <span node-type="cdhubK69" data-key="SEARCH_BUTTON" class="gHHsaL">
                  <span class="icon icon-search"></span>
                </span>
                <span node-type="blkxn5" class="tclkdyB" style="display: block;">搜索您的文件</span></form>
            </div>
          </div>
          <div class="lsqGV3A" style="white-space: nowrap; position: relative;">
            <div class="button-box-mark" style="display:inline-block;*display:inline;*zoom:1;width:1px;height:1px;line-height:0;"></div>
            <div class="tcuLAu" style="position: absolute; top: 0px; line-height: normal; padding-top: 11px; padding-left: 0px; width: auto;">
              <div style="display:none;width:100%;height:100%;z-index:30;position:absolute;top:0;left:0;"></div>
              <span class="g-dropdown-button" style="display: inline-block;">
                <a class="g-button g-button-blue blue-upload upload-wrapper" data-button-id="b31" data-button-index="1" href="javascript:;" title="上传">
                  <span class="g-button-right">
                    <em class="icon icon-upload" title="上传"></em>
                    <span class="text" style="width: 40px;">上传</span></span>
                  <form class="h5-uploader-form" action="javascript:void(0);">
                    <input title="点击选择文件" id="h5Input0" multiple="" accept="*/*" type="file" name="html5uploader" style="position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;cursor:pointer;"></form>
                </a>
                <span class="menu" style="width: 84px;">
                  <a data-menu-id="b-menu0" class="g-button-menu  upload-wrapper" href="javascript:;">上传文件
                    <form class="h5-uploader-form" action="javascript:void(0);">
                      <input title="点击选择文件" id="h5Input1" multiple="" accept="*/*" type="file" name="html5uploader" style="position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;cursor:pointer;"></form></a>
                  <a data-menu-id="b-menu1" class="g-button-menu  upload-wrapper" href="javascript:;">上传文件夹
                    <form class="h5-uploader-form" action="javascript:void(0);">
                      <input title="点击选择文件夹" id="h5Input2" multiple="" webkitdirectory="" accept="*/*" type="file" name="html5uploader" style="position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;cursor:pointer;"></form></a>
                </span>
              </span>
              <a @click="addNewFile" class="g-button"  href="javascript:;">
                <span class="g-button-right">
                  <em class="icon icon-newfolder"></em>
                  <span class="text" style="width: auto;">新建文件夹</span></span>
              </a>
              <a class="g-button" data-button-id="b35" data-button-index="3" href="javascript:;" title="离线下载" style="display: inline-block;">
                <span class="g-button-right">
                  <em class="icon icon-download" title="离线下载"></em>
                  <span class="text" style="width: auto;">离线下载</span></span>
              </a>
              <span class="g-dropdown-button last-button" style="display: inline-block;">
                <a class="g-button" data-button-id="b37" data-button-index="4" href="javascript:;" title="我的设备">
                  <span class="g-button-right">
                    <em class="icon icon-device" title="我的设备"></em>
                    <span class="text" style="width: auto;">我的设备</span></span>
                </a>
                <span class="menu" style="width: 96px;">
                  <a data-menu-id="b-menu0" class="g-button-menu " href="javascript:;">推送任务列表</a>
                  <a data-menu-id="b-menu1" class="g-button-menu " href="javascript:;">添加设备</a></span>
              </span>
              <span class="g-dropdown-button tools-more" style="display: none;">
                <a class="g-button" data-button-id="b39" data-button-index="" href="javascript:;" title="更多">
                  <span class="g-button-right">
                    <em class="icon icon-more" title="更多"></em>
                    <span class="text" style="width: auto;">更多</span></span>
                </a>
                <span class="menu" style="width: 70px;">
                  <a style="display:none;" data-menu-id="b-menu0" class="g-button-menu g-menu-hasIcon" href="javascript:;">
                    <em class="icon icon-upload"></em>上传</a>
                  <a style="display:none;" data-menu-id="b-menu1" class="g-button-menu g-menu-hasIcon" href="javascript:;">
                    <em class="icon icon-newfolder"></em>新建文件夹</a>
                  <a style="display:none;" data-menu-id="b-menu2" class="g-button-menu g-menu-hasIcon" href="javascript:;">
                    <em class="icon icon-download"></em>离线下载</a>
                  <a style="display:none;" data-menu-id="b-menu3" class="g-button-menu g-menu-hasIcon" href="javascript:;">
                    <em class="icon icon-device"></em>我的设备</a>
                </span>
              </span>
            </div>
            <div class="button-box-mark" style="display:inline-block;*display:inline;*zoom:1;width:1px;height:1px;line-height:0;"></div>
            <div class="QDDOQB" style="position: absolute; top: 0px; line-height: normal; padding-top: 11px; display: block; visibility: hidden; width: 943px; padding-left: 433px;">
              <div style="display:none;width:100%;height:100%;z-index:30;position:absolute;top:0;left:0;"></div>
              <a class="g-button" data-button-id="b41" data-button-index="1" href="javascript:;" title="分享" style="display: inline-block;">
                <span class="g-button-right">
                  <em class="icon icon-share" title="分享"></em>
                  <span class="text" style="width: auto;">分享</span></span>
              </a>
              <a class="g-button g-button-hastips" data-button-id="b43" data-button-index="1" href="javascript:;" title="邀人一起管理此文件夹" style="display: none;">
                <span class="g-button-right">
                  <em class="icon icon-sharedir" title=""></em>
                  <span class="text" style="width: auto;">共享</span></span>
                <span class="g-button-tips">邀人一起管理此文件夹</span></a>
              <a class="g-button" data-button-id="b45" data-button-index="1" href="javascript:;" title="取消共享" style="display: none;">
                <span class="g-button-right">
                  <em class="icon icon-sharedir" title="取消共享"></em>
                  <span class="text" style="width: auto;">取消共享</span></span>
              </a>
              <a class="g-button" data-button-id="b47" data-button-index="1" href="javascript:;" title="退出共享" style="display: none;">
                <span class="g-button-right">
                  <em class="icon icon-sharedir" title="退出共享"></em>
                  <span class="text" style="width: auto;">退出共享</span></span>
              </a>
              <a class="g-button" data-button-id="b49" data-button-index="2" href="javascript:;" title="音乐播放" style="display: none;">
                <span class="g-button-right">
                  <em class="icon icon-play" title="音乐播放"></em>
                  <span class="text" style="width: auto;">音乐播放</span></span>
              </a>
              <a class="g-button" data-button-id="b51" data-button-index="3" href="javascript:;" title="下载" style="display: inline-block;">
                <span class="g-button-right">
                  <em class="icon icon-download" title="下载"></em>
                  <span class="text" style="width: auto;">下载</span></span>
              </a>
              <a class="g-button g-disabled" data-button-id="b53" data-button-index="5" href="javascript:;" title="删除" style="display: inline-block;">
                <span class="g-button-right">
                  <em class="icon icon-delete" title="删除"></em>
                  <span class="text" style="width: auto;">删除</span></span>
              </a>
              <a class="g-button" data-button-id="b55" data-button-index="8" href="javascript:;" title="云冲印" style="display: none;">
                <span class="g-button-right">
                  <em class="icon icon-print" title="云冲印"></em>
                  <span class="text" style="width: auto;">云冲印</span></span>
              </a>
              <a class="g-button" data-button-id="b57" data-button-index="9" href="javascript:;" title="照片电影" style="display: none;">
                <span class="g-button-right">
                  <em class="icon icon-director" title="照片电影"></em>
                  <span class="text" style="width: auto;">照片电影</span></span>
              </a>
              <a class="g-button" data-button-id="b59" data-button-index="9" href="javascript:;" title="历史版本" style="display: none;">
                <span class="g-button-right">
                  <em class="icon icon-history" title="历史版本"></em>
                  <span class="text" style="width: auto;">历史版本</span></span>
              </a>
              <a class="g-button" data-button-id="b61" data-button-index="13" href="javascript:;" title="美化" style="display: none;">
                <span class="g-button-right">
                  <em class="icon icon-beauty" title="美化"></em>
                  <span class="text" style="width: auto;">美化</span></span>
              </a>
              <a class="g-button g-disabled" data-button-id="b63" data-button-index="101" href="javascript:;" title="重命名" style="display: inline-block;">
                <span class="g-button-right">
                  <span class="text" style="width: auto;">重命名</span></span>
              </a>
              <a class="g-button" data-button-id="b65" data-button-index="102" href="javascript:;" title="复制到" style="display: inline-block;">
                <span class="g-button-right">
                  <span class="text" style="width: auto;">复制到</span></span>
              </a>
              <a class="g-button" data-button-id="b67" data-button-index="103" href="javascript:;" title="移动到" style="display: inline-block;">
                <span class="g-button-right">
                  <span class="text" style="width: auto;">移动到</span></span>
              </a>
              <a class="g-button" data-button-id="b69" data-button-index="103" href="javascript:;" title="详细信息" style="display: none;">
                <span class="g-button-right">
                  <em class="icon icon-share" title="详细信息"></em>
                  <span class="text" style="width: auto;">详细信息</span></span>
              </a>
              <span class="g-dropdown-button last-button" style="display: inline-block;">
                <a class="g-button" data-button-id="b71" data-button-index="104" href="javascript:;" title="推送到云设备">
                  <span class="g-button-right">
                    <span class="text" style="width: auto;">推送到云设备</span></span>
                </a>
                <span class="menu" style="width: 102px;"></span>
              </span>
              <span class="g-dropdown-button tools-more">
                <a class="g-button" data-button-id="b73" data-button-index="" href="javascript:;" title="更多">
                  <span class="g-button-right">
                    <em class="icon icon-more" title="更多"></em>
                    <span class="text" style="width: auto;">更多</span></span>
                </a>
                <span class="menu" style="width: 70px;">
                  <a style="display:none;" data-menu-id="b-menu0" class="g-button-menu g-menu-hasIcon" href="javascript:;">
                    <em class="icon icon-share"></em>分享</a>
                  <a style="display:none;" data-menu-id="b-menu1" class="g-button-menu g-menu-hasIcon g-disabled" href="javascript:;">
                    <em class="icon icon-sharedir"></em>共享</a>
                  <a style="display:none;" data-menu-id="b-menu2" class="g-button-menu g-menu-hasIcon g-disabled" href="javascript:;">
                    <em class="icon icon-sharedir"></em>取消共享</a>
                  <a style="display:none;" data-menu-id="b-menu3" class="g-button-menu g-menu-hasIcon g-disabled" href="javascript:;">
                    <em class="icon icon-sharedir"></em>退出共享</a>
                  <a style="display:none;" data-menu-id="b-menu4" class="g-button-menu g-menu-hasIcon g-disabled" href="javascript:;">
                    <em class="icon icon-play"></em>音乐播放</a>
                  <a style="display:none;" data-menu-id="b-menu5" class="g-button-menu g-menu-hasIcon" href="javascript:;">
                    <em class="icon icon-download"></em>下载</a>
                  <a style="display:none;" data-menu-id="b-menu6" class="g-button-menu g-menu-hasIcon g-disabled" href="javascript:;">
                    <em class="icon icon-delete"></em>删除</a>
                  <a style="display:none;" data-menu-id="b-menu7" class="g-button-menu g-menu-hasIcon g-disabled" href="javascript:;">
                    <em class="icon icon-print"></em>云冲印</a>
                  <a style="display:none;" data-menu-id="b-menu8" class="g-button-menu g-menu-hasIcon g-disabled" href="javascript:;">
                    <em class="icon icon-director"></em>照片电影</a>
                  <a style="display:none;" data-menu-id="b-menu9" class="g-button-menu g-menu-hasIcon g-disabled" href="javascript:;">
                    <em class="icon icon-history"></em>历史版本</a>
                  <a style="display:none;" data-menu-id="b-menu10" class="g-button-menu g-menu-hasIcon g-disabled" href="javascript:;">
                    <em class="icon icon-beauty"></em>美化</a>
                  <a style="display:none;" data-menu-id="b-menu11" class="g-button-menu  g-disabled" href="javascript:;">重命名</a>
                  <a style="display:none;" data-menu-id="b-menu12" class="g-button-menu" href="javascript:;">复制到</a>
                  <a style="display:none;" data-menu-id="b-menu13" class="g-button-menu" href="javascript:;">移动到</a>
                  <a style="display:none;" data-menu-id="b-menu14" class="g-button-menu g-menu-hasIcon g-disabled" href="javascript:;">
                    <em class="icon icon-share"></em>详细信息</a>
                  <span style="display:none;" data-menu-id="b-menu15" class="g-button-menu g-menu-hasIcon">
                    <span class="g-dropdown-button g-dropdown-button-second" menulevel="2">
                      <a class="g-button" data-button-id="b75" data-button-index="104" href="javascript:;" title="推送到云设备">
                        <span class="g-button-right">
                          <span class="text" style="width: auto;">推送到云设备</span></span>
                      </a>
                      <span class="menu"></span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div class="jqjpG2jl"></div>
        <div class="sfGMoa"></div>
        <div node-type="EQBfLM" class="EQBfLM g-clearfix">
          <a href="/disk/timeline" class="AbMfvg">时光轴</a>
          <a href="javascript:void(0);" class="AbMfvg selected">最近上传</a></div>
      </div>
      <div class="3hh3BUu9">
        <!--[if IE]>
          <iframe id="historyIFrameEmulator" style="display: none"></iframe>
        <![endif]-->
        <div node-type="KPDwCE" class="KPDwCE" style="height: 800px;">
          <div node-type="JDeHdxb" class="JDeHdxb">
            <span class="EgMMec">全部文件</span>
            <span class="FcucHsb">已加载101个</span>
            <ul class="FuIxtL" node-type="FuIxtL">
              <li>
                <a data-deep="-1" href="javascript:;">返回上一级</a>
                <span class="EKIHPEb">|</span></li>
              <li node-type="tbAudfb"></li>
            </ul>
          </div>
          <div class="QxJxtg">
            <div class="xGLMIab">
              <ul class="QAfdwP tvPMvPb" node-type="tvPMvPb">
                <li data-key="name" class="fufHyA yfHIsP" style="width:60%;">
                  <div node-type="fydGNC" class="Qxyfvg fydGNC">
                    <span class="zbyDdwb"></span>
                    <span class="MIMvNNb">全选</span>
                    <span class="icon NbKJexb icon-checksmall"></span>
                  </div>
                  <span class="text">文件名</span>
                  <span class="xEuDywb"></span>
                  <span class="icon aHEytd icon-up"></span>
                  <span class="icon sFxCFbb icon-downtitle"></span>
                </li>
                <li data-key="size" class="fufHyA" style="width:16%;">
                  <span class="text">大小</span>
                  <span class="xEuDywb"></span>
                  <span class="icon aHEytd icon-up"></span>
                  <span class="icon sFxCFbb icon-downtitle"></span>
                </li>
                <li data-key="time" class="fufHyA gObdAzb MCGAxG" style="width:23%;">
                  <span class="text">修改日期</span>
                  <span class="xEuDywb"></span>
                  <span class="icon aHEytd icon-up"></span>
                  <span class="icon sFxCFbb icon-downtitle"></span>
                </li>
              </ul>
              <ul class="vwCPvP tvPMvPb" node-type="tvPMvPb" style="display: none;">
                <li class="fufHyA yfHIsP">
                  <div node-type="fydGNC" class="Qxyfvg fydGNC">
                    <span class="zbyDdwb"></span>
                    <span class="MIMvNNb">全选</span>
                    <span class="icon NbKJexb icon-checksmall"></span>
                  </div>
                </li>
              </ul>
              <div class="FcQMwt global-clearfix">
                <span class="MdLxwM">已选中0个文件/文件夹</span>
                <div class="KKtwaH"></div>
              </div>
            </div>
          </div>
          <!-- 竖屏 -->
          <div class="zJMtAEb" style="display: block;" >
            <div node-type="NHcGw" class="NHcGw" style="overflow-y: auto; height: 700px;">
              <div class="vdAfKMb" style="height: auto;">
                <dd class="g-clearfix AuPKyz open-enable">
                  <span node-type="EOGexf" class="EOGexf">
                    <span class="icon NbKJexb"></span></span>
                  <div class="qmstXYmX dir-small"></div>
                  <div class="file-name" style="width:60%">
                    <div class="text">
                      <a href="javascript:void(0);" class="ipXEev" title="mac-office套件破解">mac-office套件破解</a></div>
                    <div class="operate">
                      <div class="button-box-mark" style="display:inline-block;*display:inline;*zoom:1;width:1px;height:1px;line-height:0;"></div>
                      <div class="x-button-box" style="position: absolute; top: 0px; line-height: normal; visibility: visible; width: 0px; padding-left: 0px; display: block;">
                        <div style="display:none;width:100%;height:100%;z-index:30;position:absolute;top:0;left:0;"></div>
                        <a class="g-button" data-button-id="b9" data-button-index="1" href="javascript:;" title="分享" style="display: inline-block;">
                          <span class="g-button-right">
                            <em class="icon icon-share" title="分享"></em>
                            <span class="text" style="width: auto;">分享</span></span>
                        </a>
                        <a class="g-button" data-button-id="b11" data-button-index="2" href="javascript:;" title="下载" style="display: inline-block;">
                          <span class="g-button-right">
                            <em class="icon icon-download" title="下载"></em>
                            <span class="text" style="width: auto;">下载</span></span>
                        </a>
                        <a class="g-button" data-button-id="b13" data-button-index="4" href="javascript:;" title="移动到" style="display: none;">
                          <span class="g-button-right">
                            <span class="text" style="width: auto;">移动到</span></span>
                        </a>
                        <a class="g-button" data-button-id="b15" data-button-index="5" href="javascript:;" title="复制到" style="display: none;">
                          <span class="g-button-right">
                            <span class="text" style="width: auto;">复制到</span></span>
                        </a>
                        <a class="g-button" data-button-id="b17" data-button-index="6" href="javascript:;" title="重命名" style="display: none;">
                          <span class="g-button-right">
                            <span class="text" style="width: auto;">重命名</span></span>
                        </a>
                        <a class="g-button" data-button-id="b19" data-button-index="7" href="javascript:;" title="删除" style="display: none;">
                          <span class="g-button-right">
                            <span class="text" style="width: auto;">删除</span></span>
                        </a>
                        <a class="g-button" data-button-id="b21" data-button-index="7" href="javascript:;" title="设置共享" style="display: none;">
                          <span class="g-button-right">
                            <em class="icon icon-sharedir" title="设置共享"></em>
                            <span class="text" style="width: auto;">设置共享</span></span>
                        </a>
                        <a class="g-button" data-button-id="b23" data-button-index="7" href="javascript:;" title="取消共享" style="display: none;">
                          <span class="g-button-right">
                            <span class="text" style="width: auto;">取消共享</span></span>
                        </a>
                        <a class="g-button" data-button-id="b25" data-button-index="7" href="javascript:;" title="退出共享" style="display: none;">
                          <span class="g-button-right">
                            <span class="text" style="width: auto;">退出共享</span></span>
                        </a>
                        <a class="g-button" data-button-id="b27" data-button-index="8" href="javascript:;" title="详细信息" style="display: none;">
                          <span class="g-button-right">
                            <span class="text" style="width: auto;">详细信息</span></span>
                          <i class="button-red-light-icon"></i>
                        </a>
                        <span class="g-dropdown-button tools-more" style="display: inline-block;">
                          <a class="g-button" data-button-id="b29" data-button-index="" href="javascript:;" title="更多">
                            <span class="g-button-right">
                              <em class="icon icon-more" title="更多"></em>
                              <span class="text" style="width: auto;">更多</span></span>
                            <i class="button-red-light-icon tools-more-red-light-icon"></i>
                          </a>
                          <span class="menu" style="width: 72px;">
                            <a style="display:none;" data-menu-id="b-menu0" class="g-button-menu g-menu-hasIcon" href="javascript:;">
                              <em class="icon icon-share"></em>分享</a>
                            <a style="display:none;" data-menu-id="b-menu1" class="g-button-menu g-menu-hasIcon" href="javascript:;">
                              <em class="icon icon-download"></em>下载</a>
                            <a style="display: block;" data-menu-id="b-menu2" class="g-button-menu" href="javascript:;">移动到</a>
                            <a style="display: block;" data-menu-id="b-menu3" class="g-button-menu" href="javascript:;">复制到</a>
                            <a style="display: block;" data-menu-id="b-menu4" class="g-button-menu" href="javascript:;">重命名</a>
                            <a style="display: block;" data-menu-id="b-menu5" class="g-button-menu" href="javascript:;">删除</a>
                            <a style="display: block;" data-menu-id="b-menu6" class="g-button-menu g-menu-hasIcon" href="javascript:;">
                              <em class="icon icon-sharedir"></em>设置共享</a>
                            <a style="display:none;" data-menu-id="b-menu7" class="g-button-menu  g-disabled" href="javascript:;">取消共享</a>
                            <a style="display:none;" data-menu-id="b-menu8" class="g-button-menu  g-disabled" href="javascript:;">退出共享</a>
                            <a style="display:none;" data-menu-id="b-menu9" class="g-button-menu  g-disabled" href="javascript:;">详细信息
                              <i class="button-red-light-icon"></i></a>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="bkkqGm0o" style="width:16%">-</div>
                  <div class="bebpyV" style="width:23%">2017-08-14 18:23</div>
                  <div class="scmGrE5" style="width:0%">
                    <span class="pxXozr" node-type="fzsbPj4"></span>
                  </div>
                </dd>
                <dd class="g-clearfix AuPKyz open-enable" _position="99" _cmd_installed="1" _installed="1">
                  <span node-type="EOGexf" class="EOGexf">
                    <span class="icon NbKJexb"></span></span>
                  <div class="qmstXYmX fileicon-small-pdf"></div>
                  <div class="file-name" style="width:60%">
                    <div class="text">
                      <a href="javascript:void(0);" class="ipXEev" title="编写高质量代码：Web前端开发修炼之道1.pdf">编写高质量代码：Web前端开发修炼之道1.pdf</a></div>
                    <div class="operate"></div>
                  </div>
                  <div class="bkkqGm0o" style="width:16%">4.5M</div>
                  <div class="bebpyV" style="width:23%">2014-10-14 17:13</div>
                  <div class="scmGrE5" style="width:0%">
                    <span class="pxXozr" node-type="fzsbPj4"></span>
                  </div>
                </dd>
                <dd class="g-clearfix AuPKyz open-enable" _position="100" _cmd_installed="1" _installed="1">
                  <span node-type="EOGexf" class="EOGexf">
                    <span class="icon NbKJexb"></span></span>
                  <div class="qmstXYmX fileicon-small-pdf"></div>
                  <div class="file-name" style="width:60%">
                    <div class="text">
                      <a href="javascript:void(0);" class="ipXEev" title="JavaScript模式.Stoyan Stefanov.扫描版.pdf">JavaScript模式.Stoyan Stefanov.扫描版.pdf</a></div>
                    <div class="operate"></div>
                  </div>
                  <div class="bkkqGm0o" style="width:16%">16M</div>
                  <div class="bebpyV" style="width:23%">2014-10-14 17:13</div>
                  <div class="scmGrE5" style="width:0%">
                    <span class="pxXozr" node-type="fzsbPj4"></span>
                  </div>
                </dd>
              </div>
            </div>
          </div>
          <!-- 横屏 -->
          <div class="fyQgAEb" style="display: none;" >
            <div class="BNfIyPb" style="height: 307px; overflow-y: auto;">
              <div class="JKvHJMb" style="height:auto">
                <dd class="g-clearfix">
                  <div class="cEefyz open-enable" style="display: block">
                    <div class="qmstXYmX dir-large" title="">
                      <img class="wobg5k" style="visibility: hidden;">
                      <i class="icon-livp" style="display: none;">
                        <i>
                        </i>
                      </i>
                    </div>
                    <div class="file-name">
                      <a node-type="xoX8rl" class="ipXEev" href="javascript:void(0);" title="hacker">hacker</a></div>
                    <span node-type="EOGexf" class="EOGexf">
                      <span class="icon usXvNX"></span>
                      <span class="icon checkgridsmall"></span></span>
                  </div>
                  
                  <div class="cEefyz open-enable" style="display: block">
                    <div class="qmstXYmX dir-large" title="">
                      <img class="wobg5k" style="visibility: hidden;">
                      <i class="icon-livp" style="display: none;">
                        <i>
                        </i>
                      </i>
                    </div>
                    <div class="file-name">
                      <a node-type="xoX8rl" class="ipXEev" href="javascript:void(0);" title="JavaScript视频教程">JavaScript视频教程</a></div>
                    <span node-type="EOGexf" class="EOGexf">
                      <span class="icon usXvNX"></span>
                      <span class="icon checkgridsmall"></span></span>
                  </div>
           
    
                  <div class="cEefyz open-enable" style="display: block">
                    <div class="qmstXYmX dir-large" title="">
                      <img class="wobg5k" style="visibility: hidden;">
                      <i class="icon-livp" style="display: none;">
                        <i>
                        </i>
                      </i>
                    </div>
                    <div class="file-name">
                      <a node-type="xoX8rl" class="ipXEev" href="javascript:void(0);" title="电脑备份">电脑备份</a></div>
                    <span node-type="EOGexf" class="EOGexf">
                      <span class="icon usXvNX"></span>
                      <span class="icon checkgridsmall"></span></span>
                  </div>

                  <div class="cEefyz open-enable" style="display: block">
                    <div class="qmstXYmX fileicon-sys-l-web" title="">
                        <img class="wobg5k" style="visibility: hidden;">
                        <i class="icon-livp" style="display: none;">
                        <i>
                        </i>
                        </i>
                    </div>
                    <div class="file-name">
                        <a node-type="xoX8rl" class="ipXEev" href="javascript:void(0);" title="看不到书签栏？.html">看不到书签栏？.html</a></div>
                    <span node-type="EOGexf" class="EOGexf">
                        <span class="icon usXvNX"></span>
                        <span class="icon checkgridsmall"></span></span>
                  </div>
                </dd>
              </div>
            </div>
          </div>
          <!-- loading 动画 -->
          <Loading  />

          <!-- 新建文件夹和修改文件夹的弹出层输入框 只能重命名和新建文件类型  -->

          <File-Input v-if="fileInputFlag"  :fileNameTitle="fileNameTitle" />
        </div>
      </div>
    </div>

</template>

<script>

import Loading from '../common/loading'
import FileInput from '../common/fileinput'

import { mapGetters } from 'vuex'

export default {
    name: 'all',
    data(){
      return {
        fileItemStyle:"portrait", // portrait 竖屏  | horizontal  横屏
        fileItemStylePortrait:true, //默认竖屏
        fileSortName:"name",//name,size,time
        fileSortDesc:0,
        fileNameTitle:"22",
        page:1,
        pageSize:10,
      }
    },
    components: {
     Loading,
     FileInput
    },
    mounted(){
        
    },
   computed:{
      ...mapGetters(['fileInputFlag']),
    },
    methods:{
       changeFileItemStyle(){
         this.fileItemStylePortrait = !this.fileItemStylePortrait
       },
       addNewFile(){
          this.$store.commit('updateFileInputFlag',true)
       },
       renameFileName(){
       
       }
    }
}
</script>

<style lang="less" scoped>
// @import "../../assets/less/disk.header.less";
// @import "../../assets/less/home-all.less";
// @import "../../assets/less/context-all.less";
// @import "../../assets/less/cover.less";
// @import "../../assets/less/all.less";
// @import "../../assets/less/inline.less";
.xGLMIab .fufHyA {
    line-height: 36px
}
</style>
