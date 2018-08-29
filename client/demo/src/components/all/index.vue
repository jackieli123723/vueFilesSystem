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
  
            <span class="FcucHsb">获取更多数据...</span>
            <!-- <span class="FcucHsb">已加载{{fileDataList.length}}个</span> -->
           
           <ul class="FuIxtL" node-type="FuIxtL" style="display: none;">
              <li>
                <a data-deep="-1" href="javascript:;">返回上一级</a>
                <span class="EKIHPEb">|</span></li>
              <li node-type="tbAudfb">
                <span title="全部文件/360云盘">...</span>
                <span class="KLxwHFb">&gt;</span>
                <a href="javascript:;" title="全部文件/360云盘" data-deep="1">360云盘</a>
                <span class="KLxwHFb">&gt;</span>
                <a href="javascript:;" title="全部文件/360云盘/test6667" data-deep="2">test6667</a>
                <span class="KLxwHFb">&gt;</span>
                <a href="javascript:;" title="全部文件/360云盘/test6667/新建文件夹" data-deep="3">新建文件夹</a>
                <span class="KLxwHFb">&gt;</span>
                <span title="全部文件/360云盘/test6667/新建文件夹/新建文件夹">新建文件夹</span></li>
            </ul>
          </div>

          <div class="QxJxtg cazEfA">
            <div class="xGLMIab">

              <ul class="QAfdwP tvPMvPb" type="竖屏全选" style="display: block;" >
                <!-- fufHyA yfHIsP EzubGg
                fufHyA yfHIsP JFaAINb -->
                <li data-key="name" class="fufHyA yfHIsP JFaAINb" style="width:60%;">
                  <div class="Qxyfvg fydGNC ">
                    <span class="zbyDdwb" @click="fileCheckAll"></span>
                    <span class="MIMvNNb">全选</span>
                    <span class="icon NbKJexb icon-checksmall"  @click="fileCheckAll" v-if="fileCheckAllFlag" style="display:block"></span>
                  </div>
                  <span class="text">文件名</span>
                  <span class="xEuDywb"></span>
                  <span class="icon aHEytd icon-up"></span>
                  <span class="icon sFxCFbb icon-downtitle"></span>
                </li>

                <li data-key="size" class="fufHyA MCGAxG" style="width:16%;">
                  <span class="text">大小</span>
                  <span class="xEuDywb"></span>
                  <span class="icon aHEytd icon-up"></span>
                  <span class="icon sFxCFbb icon-downtitle"></span>
                </li>
                <!-- fufHyA gObdAzb JFaAINb -->
                <li data-key="time" class="fufHyA gObdAzb MCGAxG" style="width:23%;">
                  <span class="text">修改日期</span>
                  <span class="xEuDywb"></span>
                  <span class="icon aHEytd icon-up"></span>
                  <span class="icon sFxCFbb icon-downtitle"></span>
                </li>
              </ul>

              <ul class="vwCPvP tvPMvPb" type="横屏全选" style="display: block;">
                <!-- fufHyA yfHIsP -->
                <li class="fufHyA yfHIsP EzubGg">
                  <div style="width:100px" class="Qxyfvg fydGNC">
                    <span class="zbyDdwb" style=" background-position: 0px 0px;" @click="fileCheckAll"></span>
                    <span class="MIMvNNb">全选</span>
                    <span class="icon NbKJexb icon-checksmall"  @click="fileCheckAll" v-if="fileCheckAllFlag" style="display:block"></span>
                  </div>
                </li>
              </ul>
               
        
               <!-- 默认是none -->
              <div class="FcQMwt global-clearfix">
                <span class="MdLxwM">已选中1110个文件/文件夹</span>
                <div class="KKtwaH"></div>
              </div>
            </div>
          </div>
          <!-- 竖屏 -->
          <div class="zJMtAEb" type="竖屏" style="margin-top:110px;" :class="{'active':fileItemStylePortrait == true}"  >
            <div class="NHcGw" style="overflow-y: auto; height: 700px;">
              <div class="vdAfKMb" style="height: auto;">
                <!-- ntX8zG hxyXEoG 伪类做的 fileItemHover ntX8zG 打钩--> 
                <dd class="g-clearfix AuPKyz"
                  :class="{' hxyXEoG':filePortraitHoverItemIndex == index,'ntX8zG':file.checked == true}"  
                    @mouseover="fileHoverItem('portrait',index)"  
                    @mouseleave="fileHoverItem('portrait',-1)" v-for="(file,index) in fileDataList" :key=index >
                  <span  class="EOGexf" @click="setFileItemChecked(file,index)">
                    <span class="icon NbKJexb"></span>
                  </span>
                  <div class="qmstXYmX" :class="formatFileName(file.server_filename,'small')"></div>
                  <div class="file-name" style="width:60%">
                    <div class="text">
                      <a href="javascript:void(0);" class="ipXEev">{{file.server_filename}}</a></div>
                  </div>
                  <div class="bkkqGm0o"  v-if="file.isdir == 1" style="width:16%">-</div>
                  <div class="bkkqGm0o"  v-if="file.isdir == 0" style="width:16%">{{size(file.size)}}</div>
                  <div class="bebpyV" style="width:23%">{{time(file.server_mtime)}}</div>
                </dd>

                <!-- <dd class="g-clearfix AuPKyz open-enable">
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
                </dd> -->

              </div>
            </div>
          </div>
          <!-- 横屏 -->
          <div class="fyQgAEb" type="横屏" style="margin-top:150px;" :class="{'active':fileItemStylePortrait == false}" >
            <div class="BNfIyPb" style="height: 307px; overflow-y: auto;">
              <div class="JKvHJMb" style="height:auto">
                <dd class="g-clearfix">
                  <!-- cEefyz open-enable ntX8zG  -->
                  <div class="cEefyz open-enable ntX8zG" style="display: block" v-for="(file,index) in fileDataList" :key=index>
                    <div class="qmstXYmX"  :class="formatFileName(file.server_filename,'large')">
                    </div>
                    <div class="file-name">
                      <a  class="ipXEev" href="javascript:void(0);" >{{file.server_filename}}</a></div>
                    <span  class="EOGexf">
                      <span class="icon usXvNX"></span>
                      <span class="icon checkgridsmall"></span></span>
                  </div>
                </dd>
              </div>
            </div>
          </div>
          <!-- loading 动画  必须隐藏 否则hover效果失效 -->
          <!-- <Loading  /> -->
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
import {formatFileNameType,formatDate, formatFileSize} from '../../utils/common'

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
        fileCheckAllFlag:false,
        fileCheckItemArr:[],
        arrItemCheckArr:[],
        filePortraitHoverItemIndex:-1,
        fileHorizontalHoverItemIndex:-1,
        fileDataList:[
           {
            "server_mtime": 1413277988000,
            "category": 4,
            "unlist": 0,
            "fs_id": 269288858274638,
            "isdir": 1,
            "oper_id": 0,
            "server_ctime": 1377494892000,
            "local_mtime": 1377494892000,
            "size": 6135798,
            "share": 0,
            "md5": "8fae8413ce327111a9a1bd3bb9500973",
            "path": "/hacker",
            "local_ctime": 1377494892000,
            "server_filename": "hacker",
            "id":1
          },
           {
            "server_mtime": 1413277988000,
            "category": 4,
            "unlist": 0,
            "fs_id": 269288858274638,
            "isdir": 1,
            "oper_id": 0,
            "server_ctime": 1377494892000,
            "local_mtime": 1377494892000,
            "size": 6135798,
            "share": 0,
            "md5": "8fae8413ce327111a9a1bd3bb9500973",
            "path": "/demo",
            "local_ctime": 1377494892000,
            "server_filename": "demo",
             "id":2
          },
          {
            "server_mtime": 1413277988000,
            "category": 4,
            "unlist": 0,
            "fs_id": 269288858274638,
            "isdir": 0,
            "oper_id": 0,
            "server_ctime": 1377494892000,
            "local_mtime": 1377494892000,
            "size": 6135798,
            "share": 0,
            "md5": "8fae8413ce327111a9a1bd3bb9500973",
            "path": "/使用HTML、CSS和JavaScript开发Android程序.pdf",
            "local_ctime": 1377494892000,
            "server_filename": "使用HTML、CSS和JavaScript开发Android程序.pdf",
            "id":3
          },
          {
            "server_mtime": 1413277988000,
            "category": 4,
            "unlist": 0,
            "fs_id": 269288858274638,
            "isdir": 0,
            "oper_id": 0,
            "server_ctime": 1377494892000,
            "local_mtime": 1377494892000,
            "size": 1494727507,
            "share": 0,
            "md5": "8fae8413ce327111a9a1bd3bb9500973",
            "path": "/【银吧公众号：YHDYLM】2016.HD720P.mp4",
            "local_ctime": 1377494892000,
            "server_filename": "【银吧公众号：YHDYLM】2016.HD720P.mp4",
            "id":4
          }
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
       },
       formatFileName(name,size){
             return formatFileNameType(name,size)
       },
       time(time){
            return formatDate(time)
       },
       size(fileSize){
           return formatFileSize(fileSize)
       },
       setFileItemChecked(file,index){
            if(file.hasOwnProperty("checked")){
                file.checked = ! file.checked;
            } else{
                this.$set(file,"checked",true);
            }
            this.fileDataList.forEach((value,index)=>{
                if(value.hasOwnProperty("checked")){
                    if(value.checked){
                        this.arrItemCheckArr.push(1);
                    }else{
                        this.arrItemCheckArr.push(-1);
                    }
                }else{
                    this.arrItemCheckArr.push(-1);
                }
            });
            if(this.arrItemCheckArr.join("").indexOf("-1")!=-1){
                this.fileCheckAllFlag = false;
                // this.arrItemCheckArr = []
            }else{
                this.fileCheckAllFlag = true;
            }
        },
       fileCheckAll(){
         this.fileCheckAllFlag = !this.fileCheckAllFlag
         this.fileDataList.forEach((value,index)=>{
                if(value.hasOwnProperty("checked")){
                    value.checked = this.fileCheckAllFlag;
                }else{
                    this.$set(value,"checked",this.fileCheckAllFlag);
                }
            });
       },
       fileHoverItem(direction,index){
        if(direction == 'portrait'){
           this.filePortraitHoverItemIndex = index
        }

        if(direction == 'horizontal'){
          this.fileHorizontalHoverItemIndex = index
        }

       },
       fileCheckedItem(id){
         this.fileCheckItemArr.push(id)
       },
       fileCheckIcon(id){
        return this.fileCheckItemArr.includes(id)
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

.xGLMIab .MCGAxG .xEuDywb{
  background-position: -990px -990px
}



.NHcGw .AuPKyz:hover{
  background: #f6faff;
  border-bottom: 1px solid #daebfe;
}

.NHcGw .AuPKyz:hover:before {
    content: "";
    border-top: 1px solid #daebfe;
    position: absolute;
    top: -1px;
    display: block;
    width: 100%;
    z-index: 1;
    visibility: visible;
}

.NHcGw .AuPKyz:hover:first-child:before, .NHcGw .ntX8zG:first-child:before {
    top: 0;
}
</style>
