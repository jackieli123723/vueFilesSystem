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
          
          <!-- 筛选条件sort -->
          <div class="EzLavy">
            <div class="xxyXvlq" @click="toggleSort" >
              <span class="icon icon-order"></span>
            </div>
            <div class="sDwvAgb" style="display:block" v-if="fileSortFlag">
              <span :key=item.id  :data-key=item.id class="vAFAFF" :class="{'ugcOHtb':fileSortItemActiveIndex == index}"  @click="sortPost(index,item.id)" v-for="(item,index) in fileSortItem">
                <em class="icon icon-sort-select"></em>{{item.name}}</span>
            </div>
          </div>

          <!-- 搜索 -->
          <div class="OFaPaO">
            <div class="zznb188">
               <div  class="zlwGMOy xspk9j5">
                    <input autocomplete="off" class="gijubDx0" name="q" v-model='searchTitle' @input='emitChanged' spellchecking="off" type="text">
                    <span  class="ivqqkwlj icon icon-search-del" @click="clearTitle" v-if="searchClearFlag" style="display: block;"></span>
                    <span  class="gHHsaL" @click="search">
                       <span class="icon icon-search"></span>
                    </span>
                    <span  class="tclkdyB" v-if="searchTextFlag" style="display: block;">{{searchTitleAttr}}</span>
                </div>
            </div>
          </div>
             <!-- 文件相关操作 -->
          <div class="lsqGV3A">
            <!-- <div class="button-box-mark"></div> -->
            <div class="tcuLAu">
              <span class="g-dropdown-button button-open" >
                <a class="g-button g-button-blue blue-upload upload-wrapper"  href="javascript:;" title="上传">
                  <span class="g-button-right">
                    <em class="icon icon-upload"></em>
                    <span class="text" style="width: 40px;">上传</span></span>
                  <form class="h5-uploader-form" action="javascript:void(0);">
                    <input title="点击选择文件"  multiple="" accept="*/*" type="file" name="html5uploader" style="position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;cursor:pointer;">
                 </form>
                </a>
                <span class="menu" style="width: 84px;">
                  <a class="g-button-menu  upload-wrapper" href="javascript:;">上传文件
                    <form class="h5-uploader-form" action="javascript:void(0);">
                      <input title="点击选择文件" id="h5Input1" multiple="" accept="*/*" type="file" name="html5uploader" style="position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;cursor:pointer;"></form></a>
                  <a  class="g-button-menu  upload-wrapper" href="javascript:;">上传文件夹
                    <form class="h5-uploader-form" action="javascript:void(0);">
                      <input title="点击选择文件夹" id="h5Input2" multiple="" webkitdirectory="" accept="*/*" type="file" name="html5uploader" style="position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;cursor:pointer;"></form></a>
                </span>
              </span>

              <a @click="addNewFile" class="g-button"  href="javascript:;">
                <span class="g-button-right">
                  <em class="icon icon-newfolder"></em>
                  <span class="text" style="width: auto;">新建文件夹</span></span>
              </a>

              <a class="g-button"  href="javascript:;">
                <span class="g-button-right">
                  <em class="icon icon-download"></em>
                  <span class="text" style="width: auto;">打包下载</span></span>
              </a>

            </div>

           
            <div class="QDDOQB">
                <div class="button-box-mark" style="height:1px;"></div> 
              <a class="g-button"  href="javascript:;">
                <span class="g-button-right">
                  <em class="icon icon-share" ></em>
                  <span class="text" style="width: auto;">分享</span></span>
              </a>

             

              <a class="g-button" href="javascript:;">
                <span class="g-button-right">
                  <em class="icon icon-play" title="音乐播放"></em>
                  <span class="text" style="width: auto;">音乐播放</span></span>
              </a>

              <a class="g-button" href="javascript:;">
                <span class="g-button-right">
                  <em class="icon icon-download" title="下载"></em>
                  <span class="text" style="width: auto;">下载</span></span>
              </a>

              <a class="g-button g-disabled" href="javascript:;">
                <span class="g-button-right">
                  <em class="icon icon-delete" title="删除"></em>
                  <span class="text" style="width: auto;">删除</span></span>
              </a>

              <a class="g-button g-disabled">
                <span class="g-button-right">
                  <span class="text" style="width: auto;">重命名</span></span>
              </a>
              <a class="g-button"  href="javascript:;">
                <span class="g-button-right">
                  <span class="text" style="width: auto;">复制到</span></span>
              </a>
              <a class="g-button"  href="javascript:;">
                <span class="g-button-right">
                  <span class="text" style="width: auto;">移动到</span></span>
              </a>
              <a class="g-button"href="javascript:;" title="详细信息">
                <span class="g-button-right">
                  <em class="icon icon-share" title="详细信息"></em>
                  <span class="text" style="width: auto;">详细信息</span></span>
              </a>
            </div>

          </div>
        </div>

      </div>

      <div class="3hh3BUu9">
        <!--[if IE]>
          <iframe id="historyIFrameEmulator" style="display: none"></iframe>
        <![endif]-->
        <div class="KPDwCE" style="height: 800px;">

          <div class="JDeHdxb">
            <span class="EgMMec">全部文件</span>
            <span class="FcucHsb">已加载101个</span>
            <ul class="FuIxtL">
              <li>
                <a  href="javascript:;">返回上一级</a>
                <span class="EKIHPEb">|</span></li>
              <li></li>
            </ul>
          </div>

          <div class="QxJxtg">
            <div class="xGLMIab">

              <ul class="QAfdwP tvPMvPb" type="shu屏全选" >
                <li data-key="name" class="fufHyA yfHIsP" style="width:60%;">
                  <div node-type="fydGNC" class="Qxyfvg fydGNC ">
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
              <ul class="vwCPvP tvPMvPb" type="横屏全选" style="display: block;">
                <li class="fufHyA yfHIsP EzubGg">
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
          <div class="zJMtAEb" type="竖屏" :class="{'active':fileItemStylePortrait == true}"  >
            <div class="NHcGw" style="overflow-y: auto; height: 700px;">
              <div class="vdAfKMb" style="height: auto;">
                <dd class="g-clearfix AuPKyz open-enable ntX8zG hxyXEoG">
                  <span  class="EOGexf">
                    <span class="icon NbKJexb"></span></span>
                  <div class="qmstXYmX dir-small"></div>
                  <div class="file-name" style="width:60%">
                    <div class="text">
                      <a href="javascript:void(0);" class="ipXEev" title="mac-office套件破解">mac-office套件破解</a></div>
                    <div class="operate">
                      <div class="button-box-mark" style="display:inline-block;*display:inline;*zoom:1;width:1px;height:1px;line-height:0;"></div>
                      <div class="x-button-box" style="position: absolute; top: 0px; line-height: normal; visibility: visible; width: 0px; padding-left: 0px; display: block;">
                        <div style="display:block;width:100%;height:100%;z-index:30;position:absolute;top:0;left:0;"></div>
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
                <dd class="g-clearfix AuPKyz open-enable">
                  <span  class="EOGexf">
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
                <dd class="g-clearfix AuPKyz open-enable ntX8zG">
                  <span  class="EOGexf">
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
          <div class="fyQgAEb" type="横屏" :class="{'active':fileItemStylePortrait == false}" >
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
                    <span  class="EOGexf">
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
                    <span  class="EOGexf">
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
                    <span  class="EOGexf">
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
                    <span  class="EOGexf">
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
        searchTitle:"",  
        searchTitleAttr:"搜索您的文件",
        searchTextFlag:true,//兼容input 清除按钮
        searchClearFlag:false,
        fileItemStyle:"portrait", // portrait 竖屏  | horizontal  横屏
        fileItemStylePortrait:true, //默认竖屏 
        fileSortName:"name",//name,size,time
        fileSortDesc:0, //0-倒序 1-正序
        fileNameTitle:"22",
        fileSortItemActiveIndex:0,
        fileSortItemActiveOrder:"name", //name,size,time
        fileSortFlag:false,
        fileSortItem:[
           {
            "name":"文件名",
            "id":"name"    
           },
           {
            "name":"大小",
            "id":"size"    
           },
           {
            "name":"修改日期",
            "id":"time"    
           }
        ],
        fileDataList:[

        ],
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
       
       },
       toggleSort(){
          this.fileSortFlag = !this.fileSortFlag
       },
       sortPost(index,id){
          this.fileSortItemActiveIndex = index
          this.fileSortItemActiveOrder = id
          this.fileSortFlag = !this.fileSortFlag
       },
       search(){
         
       },
       clearTitle(){
         this.searchTextFlag = true
         this.searchClearFlag = false
         this.searchTitle = ''
       },
       emitChanged(){
           this.searchTextFlag = false
           this.searchClearFlag = true
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

.fyQgAEb,.zJMtAEb{
    display: none;
}
.zJMtAEb.active{
    display: block
}

.fyQgAEb.active{
    display: block
}

.DxdbeCb .lsqGV3A{
    // border:1px solid red;
    margin-right: 430px;
}

.QDDOQB{
    // border:1px solid red;
    position: absolute;
    top: 0px;
    line-height: normal;
    padding-top: 11px;
    display: block; 
    width: 943px; 
    left: 336px;
}

 .DxdbeCb .QDDOQB a {

    margin-top: 3px;
}

.g-dropdown-button.button-open .g-button{
    border-bottom-left-radius:4px;
    border-bottom-right-radius: 4px;
}
.g-dropdown-button.button-open > .menu {
    visibility: hidden;
    display: none;
}

.g-dropdown-button.button-open:hover > .menu {
    visibility: visible;
    display: block;
}
</style>
