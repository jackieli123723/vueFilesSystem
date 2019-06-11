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
            <div class="xxyXvlq" @click="toggleSort">
              <span class="icon icon-order"></span>
            </div>
            <div class="sDwvAgb" style="display:block" v-show="fileSortFlag">
              <span :key=item.id  :data-key=item.id class="vAFAFF" :class="{'ugcOHtb':fileSortItemActiveIndex == index}"   @mouseenter="showMouse(true)"   @mouseleave="showMouse(false)" @click="sortPost(index,item.id)" v-for="(item,index) in fileSortItem">
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

              <a class="g-button"  href="javascript:;" @click="addNewFile('新建文件夹')" >
                <span class="g-button-right">
                  <em class="icon icon-newfolder"></em>
                  <span class="text" style="width: auto;">新建文件夹</span></span>
              </a>

              <a class="g-button"  href="javascript:;" @click="gzipDownloadFile">
                <span class="g-button-right">
                  <em class="icon icon-download"></em>
                  <span class="text" style="width: auto;">打包下载</span></span>
              </a>

            </div>

           
            <div class="QDDOQB">
                <div class="button-box-mark" style="height:1px;"></div> 
              <a class="g-button"  href="javascript:;" @click="shareFile">
                <span class="g-button-right">
                  <em class="icon icon-share" ></em>
                  <span class="text" style="width: auto;">分享</span></span>
              </a>

             

              <a class="g-button" href="javascript:;" @click="play">
                <span class="g-button-right">
                  <em class="icon icon-play" title="音乐播放"></em>
                  <span class="text" style="width: auto;">音乐播放</span></span>
              </a>

              <a class="g-button" href="javascript:;" @click="downloadFile">
                <span class="g-button-right">
                  <em class="icon icon-download" title="下载"></em>
                  <span class="text" style="width: auto;">下载</span></span>
              </a>

              <a class="g-button" href="javascript:;" @click="deleteFile()">
                <span class="g-button-right">
                  <em class="icon icon-delete" title="删除"></em>
                  <span class="text" style="width: auto;">删除</span></span>
              </a>
              
              <!-- 只有勾选一个的时候才是点击的否则是不能点击的 -->
            
              <a class="g-button " :class="{'g-disabled':fileCheckedGroups && fileCheckedGroups.length > 1 }" @click="renameFile">
                <span class="g-button-right">
                  <span class="text" style="width: auto;">重命名</span></span>
              </a>

              <a class="g-button"  href="javascript:;" @click="copyFile">
                <span class="g-button-right">
                  <span class="text" style="width: auto;">复制到</span></span>
              </a>
              <a class="g-button"  href="javascript:;" @click="moveFile">
                <span class="g-button-right">
                  <span class="text" style="width: auto;">移动到</span></span>
              </a>
              <a class="g-button"href="javascript:;" title="详细信息" @click="detailFile">
                <span class="g-button-right">
                  <em class="icon icon-share" title="详细信息"></em>
                  <span class="text" style="width: auto;">详细信息</span></span>
              </a>
            </div>

          </div>
        </div>

      </div>

      <div class="3hh3BUu9">
        <!-- 这里增加js鼠标拖拽选中事件 
          @mousedown="mousedown"
          @mouseup="mouseup"
          @mousemove="mousemove"

             @mousedown.stop="mousedown"
          @mouseup.stop="mouseup"
          @mousemove.stop="mousemove"
        -->
        <div class="KPDwCE" ref="insideDomRef" style="height: 800px;border:1px solid green;"
        
        >
        <!-- 拖拽的虚拟框选中元素 -->
        <div 
          v-if="isDragSelecting"
          :style="selectionStyle"
          class="selection-area">
        </div>

          <div class="JDeHdxb">
            <!-- 根目录显示全部文件 -->
            <span class="EgMMec" v-if="fileDataList && fileDataList.length > 0">全部文件</span>
            <span class="FcucHsb" v-if="fileDataList && fileDataList.length > 0">获取更多数据...</span>
            <!-- <span class="FcucHsb">已加载{{fileDataList.length}}个</span> -->
           
           <!-- 根目录子集显示这个面包屑 -->

           <BreadArrow />

          </div>

          <div class="QxJxtg cazEfA">
            <div class="xGLMIab" v-if="fileDataList && fileDataList.length > 0">

              <ul class="QAfdwP tvPMvPb" type="竖屏全选" v-if="fileItemStylePortrait == true" style="display: block;"    >
                <!-- fufHyA yfHIsP EzubGg
                fufHyA yfHIsP JFaAINb 
                name
              fufHyA yfHIsP JFaAINb 上
              fufHyA yfHIsP MCGAxG  下
              
              size
              fufHyA JFaAINb 上
              fufHyA MCGAxG 下
              
              time
              
              fufHyA gObdAzb JFaAINb 上
	            fufHyA gObdAzb MCGAxG 下
                -->
                <li data-key="name" class="fufHyA yfHIsP" :class="{'JFaAINb':fileSortDesc == 0 && fileSortName =='name','MCGAxG':fileSortDesc == 1  && fileSortName =='name'}"  style="width:60%;" @click="sort('name')">
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

                <li data-key="size" class="fufHyA" :class="{'JFaAINb':fileSortDesc == 0 && fileSortName =='size','MCGAxG':fileSortDesc == 1  && fileSortName =='size'}" style="width:16%;" @click="sort('size')">
                  <span class="text">大小</span>
                  <span class="xEuDywb"></span>
                  <span class="icon aHEytd icon-up"></span>
                  <span class="icon sFxCFbb icon-downtitle"></span>
                </li>
                <!-- fufHyA gObdAzb JFaAINb -->
                <li data-key="time" class="fufHyA gObdAzb " :class="{'JFaAINb':fileSortDesc == 0 && fileSortName =='time','MCGAxG':fileSortDesc == 1  && fileSortName =='time'}" style="width:23%;" @click="sort('time')">
                  <span class="text">修改日期</span>
                  <span class="xEuDywb"></span>
                  <span class="icon aHEytd icon-up"></span>
                  <span class="icon sFxCFbb icon-downtitle"></span>
                </li>
              </ul>

              <ul class="vwCPvP tvPMvPb" type="横屏全选" v-if="fileItemStylePortrait == false"  style="display: block;">
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
              <div class="FcQMwt global-clearfix" v-if="fileCheckedGroups && fileCheckedGroups.length > 0">
                <span class="MdLxwM">已选中{{fileCheckedGroups.length}}个文件/文件夹</span>
                <div class="KKtwaH"></div>
              </div>
            </div>
          </div>
          <!-- 竖屏 -->
          <div class="zJMtAEb" type="竖屏" style="margin-top:-15px;" :class="{'active':fileItemStylePortrait == true}"  >
            <div class="NHcGw" style="overflow-y: auto; height: 700px;">
              <div class="vdAfKMb" style="height: auto;">
                <!-- ntX8zG hxyXEoG 伪类做的 fileItemHover ntX8zG 打钩--> 
                <dd class="g-clearfix AuPKyz open-enable"
                  :class="{' hxyXEoG':filePortraitHoverItemIndex == index,'ntX8zG':file.checked == true}"  
                    @mouseover="fileHoverItem('portrait',index)"  
                    @mouseleave="fileHoverItem('portrait',-1)" v-for="(file,index) in fileDataList" :key=index
                    :ref="'itemFile'+index"
                     >
                  <span  class="EOGexf" @click="setFileItemChecked(file,index,$event)">
                    <span class="icon NbKJexb"></span>
                  </span>
                  
                
                  <div class="qmstXYmX"  :class="formatFileName(file.server_filename,'small')"></div>
                  <div class="file-name" style="width:60%">
                    <div class="text">
                      <!-- <a href="javascript:void(0);" class="ipXEev">{{file.server_filename}}</a> -->
                           <router-link  class="ipXEev" :to="{ path: 'all', query: { path: file.path }}" >
                          {{file.server_filename}}
                           </router-link>
                    </div>
                      
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
          <div class="fyQgAEb" type="横屏" style="margin-top:-15px;" :class="{'active':fileItemStylePortrait == false}" >
            <div class="BNfIyPb" style="height: 307px; overflow-y: auto;">
              <div class="JKvHJMb" style="height:auto">
                <dd class="g-clearfix">
                  <!-- cEefyz hxyXEoG ntX8zG ||  ntX8zG 打钩-->
                  <div class="cEefyz  " 
                   :class="{' hxyXEoG':fileHorizontalHoverItemIndex == index,'ntX8zG':file.checked == true}"  
                    @mouseover="fileHoverItem('horizontal',index)" 
                     @mouseleave="fileHoverItem('horizontal',-1)"
                     v-for="(file,index) in fileDataList" :key=index>
                    

                     <!-- 为图片是可以预览 -->
                    <div class="qmstXYmX" v-if="file.thumbs">
                      <img class="wobg5k"
                       :src="file.thumbs.icon"
                      style="visibility: visible; left: -45px; top: 1px;">
                    
                    </div> 

                  <div class="qmstXYmX" v-else :class="formatFileName(file.server_filename,'large')"></div>
                    <div class="file-name">
                      <!-- <a  class="ipXEev" href="javascript:void(0);" >{{file.server_filename}}</a> -->

                      <router-link  class="ipXEev" v-if="file.isdir" :to="{ path: 'all', query: { path: file.path }}" >
                          {{file.server_filename}}
                      </router-link>

                    </div>
                    <span  class="EOGexf" @click="setFileItemChecked(file,index,$event)">
                      <span class="icon usXvNX"></span>
                      <span class="icon checkgridsmall"></span>
                    </span>
                  </div>
                </dd>
              </div>
            </div>
          </div>
          <!-- loading 动画  必须隐藏 否则hover效果失效 -->
          <Loading v-if="loadingFlag"  />
          <!-- 新建文件夹和修改文件夹的弹出层输入框 只能重命名和新建文件类型 
          
           :fileNameTitle="fileNameTitle"
           -->
          <File-Input 
           v-if="fileInputFlag" 
          :fileNameTitle="fileNameTitle"
          :fileInputStyle="fileInputStyle"
           :fileInputHorizontal="!fileItemStylePortrait"
           @changeFileName="changeFileName"
           @changeFileNameSure="changeFileNameSure"
            />
           <!-- 弹出框 -->
          <Show-Tip 
             v-if="delConfirmFlag"
             :delHeadTitle="delHeadTitle"
             :delTitle="delTitle"
             :delType="2"
             @delItem="hiddenShowTip"
          ></Show-Tip>

          
          
          <!-- 顶部弹出 弱提示-->
         <Toast 
          v-show="toastShowFlag"
          :toastType="toastType"
          :toastText="toastText"
          />
          
          <!-- 上传组件 -->
          <Upload
             v-if="!treeFlag"  
          />

          <!-- 没有数据 -->
           
          <NoData v-if="fileDataList && fileDataList.length == 0" />

          <!-- 弹出层vue tree -->
          <Tree v-if="treeFlag"/> 

          <!-- 邮件菜单 -->
         <RightMenu
              :target="contextMenuTarget" 
              :show="contextMenuVisible" 
              @update:show="(show) => contextMenuVisible = show">
          
        
         </RightMenu>  

         <!-- 横屏弹出图片框 -->

         <!-- <ViewImg /> -->

        </div>
      </div>
    </div>

</template>

<script>

import Loading from '../common/loading'
import FileInput from '../common/fileinput'
import ShowTip from '../common/showTip'
import Toast from '../common/toast'
import Upload from '../common/upload'
import BreadArrow from '../common/breadArrow'
import NoData from '../common/nodata'
import Tree from '../common/tree'
import RightMenu from '../common/rightMenu'
import ViewImg from '../common/viewImg'

import { mapGetters } from 'vuex'
import {formatFileNameType,formatDate, formatFileSize} from '../../utils/common'



export default {
    name: 'all',
    components: {
     Loading,
     FileInput,
     ShowTip,
     Toast,
     Upload,
     BreadArrow,
     NoData,
     Tree,
     RightMenu,
     ViewImg
    },
    data(){
      return {
      
         contextMenuTarget: document.body,
        //contextMenuTarget: this.$refs.insideDomRef,
        contextMenuVisible: false,
        toastType:'failure',
        toastText:'正在创建文件夹,请稍后...',
        delConfirmFlag:false,
        delHeadTitle:"确认删除",
        delTitle:"确认要把所选文件放入回收站吗？",
        loadingFlag:false,
        toastShowFlag:false,
        treeFlag:false,
        searchTitle:"",  
        searchTitleAttr:"搜索您的文件",
        searchTextFlag:true,//兼容input 清除按钮
        searchClearFlag:false,
        fileItemStyle:"portrait", // portrait 竖屏  | horizontal  横屏
        fileItemStylePortrait:true, //默认竖屏 
        fileSortName:"name",//name,size,time
        fileSortDesc:0, //0-升序 1-降序
        fileNameTitle:"新建文件夹",//怎么v-modle
        fileInputOffsetX:20,
        fileInputOffsetY:73, //这里每个叠加45就是定位位置 73 +（1-1）*45
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
        filePortraitHoverItemIndex:-1,//竖屏hover
        fileHorizontalHoverItemIndex:-1,//横屏hover
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
            "path": "/360云盘",
            "local_ctime": 1377494892000,
            "server_filename": "360云盘",
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
            "path": "/360云盘/single-1530525346632.png",
            "local_ctime": 1377494892000,
            "server_filename": "vue.png",
            "thumbs": {
              "icon": "https://thumbnail0.baidupcs.com/thumbnail/11eb0235c4d28520ffd756c4b4053aaf?fid=2282772228-250528-1122532426776666&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jbfTQnrbN7O%2bdOiI9lttqd65TzQ%3d&expires=8h&chkbd=0&chkv=0&dp-logid=5791270659668216815&dp-callid=0&time=1536307200&size=c60_u60&quality=100&vuk=2282772228&ft=image",
              "url3": "https://thumbnail0.baidupcs.com/thumbnail/11eb0235c4d28520ffd756c4b4053aaf?fid=2282772228-250528-1122532426776666&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jbfTQnrbN7O%2bdOiI9lttqd65TzQ%3d&expires=8h&chkbd=0&chkv=0&dp-logid=5791270659668216815&dp-callid=0&time=1536307200&size=c850_u580&quality=100&vuk=2282772228&ft=image",
              "url2": "https://thumbnail0.baidupcs.com/thumbnail/11eb0235c4d28520ffd756c4b4053aaf?fid=2282772228-250528-1122532426776666&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jbfTQnrbN7O%2bdOiI9lttqd65TzQ%3d&expires=8h&chkbd=0&chkv=0&dp-logid=5791270659668216815&dp-callid=0&time=1536307200&size=c360_u270&quality=100&vuk=2282772228&ft=image",
              "url1": "https://thumbnail0.baidupcs.com/thumbnail/11eb0235c4d28520ffd756c4b4053aaf?fid=2282772228-250528-1122532426776666&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jbfTQnrbN7O%2bdOiI9lttqd65TzQ%3d&expires=8h&chkbd=0&chkv=0&dp-logid=5791270659668216815&dp-callid=0&time=1536307200&size=c140_u90&quality=100&vuk=2282772228&ft=image"
              },
            "id":4
          }
        ],
        // fileDataList:[],
        page:1,
        pageSize:10,
        isDragSelecting: false,
         x1: 0,
         y1: 0,
         x2: 0,
         y2: 0
      }
    },
    mounted(){
      console.log(this.$refs.insideDomRef)
      
     // this.$store.commit('updateFileInputFlag',true)
        //   var currentPath = this.$route.path;
        //   function getQueryString(name) {
        //     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        //     var r = window.location.search.substr(1).match(reg);
        //     //if (r != null) return unescape(r[2]); return null;乱码
        //     //js %2F  == /
        //     //改造为中文斜线路径
        //     if (r != null) return decodeURI(r[2]).replace(/%2F/g,'/'); return null; //中文
        //   }
          
        // var path = getQueryString("path");
        
        
        // console.log(currentPath)
        // console.log(path);
    },
   computed:{
      ...mapGetters(['fileInputFlag']),
      //计算选中数组
      fileCheckedGroups(){
          let checkedGroups = [];
          this.fileDataList.forEach(function(item) {
              if (item.checked) {
                  checkedGroups.push(item.path);
              }
          });
          return checkedGroups;
      },
      //是否全部选中
      isCheckedAll(){
        let i = 0;
        let lens = this.fileDataList.length
        this.fileDataList.forEach(function(item) {
            if (item.checked) {
                i++;
            }
        });
        return  i == lens  ? true : false 
      },
      //分割文件路由生成面包屑
      getFilePath(){
        var currentPath = this.$route.path;
        console.log(currentPath)
      },
      //input 弹出框
      fileInputStyle(){
        return {
          left:this.fileInputOffsetX,
          top:this.fileInputOffsetY
        }
      },
      //拖拽选中样式的区域
      selectionStyle() {
         var x3 = Math.min(this.x1, this.x2);
         var x4 = Math.max(this.x1, this.x2);
         var y3 = Math.min(this.y1, this.y2);
         var y4 = Math.max(this.y1, this.y2);
         
         return {
            left: x3 + 'px',
            top: y3 + 'px',
            width: x4 - x3 + 'px',
            height: y4 - y3 + 'px',
         } 
      } 
    },
    methods:{
     showMouse (bool) {
      this.fileSortFlag = bool
    },
      mousedown(event) {
         event.preventDefault();//阻止默认事件，取消文字选
         this.isDragSelecting = true;
         this.x1 = event.clientX;
         this.y1 = event.clientY;
      },
      mouseup(event) {
         this.isDragSelecting = false;
      },
      mousemove(event) {
         if( this.isDragSelecting == true){
          console.log(this.y2)
          this.x2 = event.clientX-195;
          this.y2 = event.clientY-124;
         }
      },
      //input emit 文件名
      changeFileName(title){
        console.log('change',title) 
        this.fileNameTitle = title        
      },
      changeFileNameSure(title){
        console.log('input-sure',title) 
        this.fileNameTitle = title 
        this.toastType = 'loading'
        this.toastText = '正在创建文件夹,请稍后...'
        this.toastShowFlag = true 
        var self = this 
        var timer = null;
        var timeOut = timeOut || 2000;
        clearTimeout(timer);
        
        setTimeout(function(){
              self.toastType ="success"
              self.toastText= "创建文件夹成功"
        },1000)

        timer = setTimeout(function() {
            self.toastShowFlag = false
        }, timeOut);
      },
      hiddenShowTip(){
       this.delConfirmFlag = false
       let fileList = this.fileCheckedGroups
       //批量或者删除文件

       console.log('弹出框确认删除fileList回调',fileList)
      },
      addNewFile(name){
          // this.fileNameTitle =  name
          this.fileCheckAllFlag = false
          this.fileCheckedGroups = []
          this.$store.commit('updateFileInputFlag',true)
          this.fileDataList.unshift({
            "isdir": 1,
            "server_filename":this.fileNameTitle,
            "path":'/'+new Date()
          })
          
       },
       gzipDownloadFile(){
 
        },
        shareFile(){
         console.log('share')
        },
        play(){
        
        },
        downloadFile(){
        
        },
        //删除文件列表[]
        deleteFile(){
          if(this.fileCheckedGroups.length == 0){
            return
          }
          this.delConfirmFlag = !this.delConfirmFlag
        },
        renameFile(){
         
          this.$store.commit('updateFileInputFlag',true)
          //this.addNewFile(this.fileNameTitle)
        },
        copyFile(){
        
        },
        moveFile(){
        
        },
        detailFile(){
        
        },
       changeFileItemStyle(){
         this.fileItemStylePortrait = !this.fileItemStylePortrait
       },
       toggleSort(){
          this.fileSortFlag = !this.fileSortFlag
       },
       sortPost(index,id){
          this.fileSortItemActiveIndex = index
          this.fileSortItemActiveOrder = id
          this.fileSortFlag = !this.fileSortFlag

           this.loadingFlag = true
           let self = this
           setTimeout(function(){
             self.loadingFlag = false
           },1000)
       },
       sort(name){
           
           if(this.fileSortDesc == 1){
              this.fileSortDesc = 0
           }else{
             this.fileSortDesc = 1
           }
           this.fileSortName = name
           this.loadingFlag = true
           let self = this
           setTimeout(function(){
             self.loadingFlag = false
           },1000)
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
       setFileItemChecked(file,index,event){
            this.fileNameTitle = file.server_filename
            // console.log(event.offsetLeft) 

            // console.log('父节点',this.$refs.itemFile1[0].offsetTop)

            // this.fileInputOffsetX = event.offsetX
            // this.fileInputOffsetY = event.offsetY

            // this.fileInputOffsetX = event.clientX
            // this.fileInputOffsetY = event.clientY

           
            this.fileInputOffsetY = 73+(index+1-1)*45

            if(file.hasOwnProperty("checked")){
                  file.checked = !file.checked;
            } else{
                this.$set(file,"checked",true);
            }
            //判断是否全选
             this.fileCheckAllFlag = this.isCheckedAll
        },
       fileCheckAll(){
         this.fileCheckAllFlag = !this.isCheckedAll
         this.fileDataList.forEach((value,index)=>{
                if(value.hasOwnProperty("checked")){
                    value.checked = this.fileCheckAllFlag;
                }else{
                    this.$set(value,"checked",this.fileCheckAllFlag);
                }
          });
          //调用选中
       },
       fileHoverItem(direction,index){
        if(direction == 'portrait'){
           this.filePortraitHoverItemIndex = index
        }

        if(direction == 'horizontal'){
          this.fileHorizontalHoverItemIndex = index
        }
       },
  
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


/*竖屏hover*/
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

.NHcGw .ntX8zG:first-child:before {
   border-top:0px solid transparent;
   
}

/*横屏hover*/

.BNfIyPb .cEefyz:hover {
    // background-color: #f1f5fa;
    // border: 1px solid #90c3fd;
    // border-radius: 5px;
}

.xGLMIab ul .fufHyA:hover{
   background: #f6faff;

} 

.KPDwCE .JDeHdxb{
  padding-left:15px;
}

/*竖屏hover*/
.NHcGw .AuPKyz .file-name a:hover, .NHcGw .AuPKyz .file-name a:hover, .NHcGw .AuPKyz .file-name a:active {
    color:#3b8cff;
    cursor: pointer;
    text-decoration: none;
}


/*横屏hover*/
.BNfIyPb .cEefyz .file-name a:hover, .BNfIyPb .cEefyz .file-name a:active {
     color:#3b8cff;
    cursor: pointer;
    text-decoration: none;
}

.selection-area {
    position: absolute;
    background-color: rgb(139, 191, 249);
    border: 1px solid rgb(19, 98, 180);
    opacity: 0.5;
    z-index: 99999;
}


</style>
