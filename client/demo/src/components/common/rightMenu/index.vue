<template>
  <div :style="style" style="display: block;" v-show="show" class="context-menu"
    @mousedown.stop
    @contextmenu.prevent
  >
    <ul class="list" v-if="type==1">
        <li class="has-more arrowicon">查看(V)
            <ul class="list">
                <li>
                <em class="icon icon-menu-point"></em>
                <em class="icon-hover icon-menu-point-hover"></em>列表</li>
                <li id="i05039648455443053" data-group="0">缩略图</li>
            </ul>
        </li>
        <li  class="has-more arrowicon">排序方式(O)
        <ul class="list">
            <li>名称</li>
            <li>大小</li>
            <li>修改日期</li></ul>
        </li>
        <li >刷新(E)</li>
        <li class="separate" ></li>
        <li >重新加载页面(R)</li>
        <li >
        <em class="icon icon-menu-createfolder"></em>
        <em class="icon-hover icon-menu-createfolder"></em>新建文件夹</li>
        <li class="separate" ></li>
    
    </ul>

    <ul class="list" v-if="type==2">
        <li>打开(O)</li>
        <li>下载</li>
        <li class="separate" style="display: block;"></li>
        <li>分享(S)</li>
        <li class="separate" style="display: block;"></li>
        <li>复制到</li>
        <li>移动到</li>
        <li class="separate"></li>
        <li>重命名</li>
        <li>删除</li>
    </ul>
    <!-- <slot></slot> -->
  </div>
</template>
<script>
export default {
  name: 'rightMenu',
  data () {
    return {
      triggerShowFn: () => {},
      triggerHideFn: () => {},
      x: null,
      y: null,
      style: {},
      binded: false,
      fileItemStyle:"portrait", // portrait 竖屏  | horizontal  横屏
      fileItemStylePortrait:true, //默认竖屏 
      fileSortName:"name",//name,size,time
      type:2
    }
  },
  props: {
    target: null,
    show: Boolean
  },
  mounted () {
    this.bindEvents()
  },
  watch: {
    show (show) {
      if (show) {
        this.bindHideEvents()
      } else {
        this.unbindHideEvents()
      }
    },
    target (target) {
      this.bindEvents()
    }
  },
  methods: {
    // 初始化事件
    bindEvents () {
      this.$nextTick(() => {
        if (!this.target || this.binded) return 
        this.triggerShowFn = this.contextMenuHandler.bind(this)
        this.target.addEventListener('contextmenu', this.triggerShowFn)
        this.binded = true
      })
    },
    // 取消绑定事件
    unbindEvents () {
      if (!this.target) return
      this.target.removeEventListener('contextmenu', this.triggerShowFn)
    },
    // 绑定隐藏菜单事件
    bindHideEvents () {
      this.triggerHideFn = this.clickDocumentHandler.bind(this)
      document.addEventListener('mousedown', this.triggerHideFn)
      document.addEventListener('mousewheel', this.triggerHideFn)
    },
    // 取消绑定隐藏菜单事件
    unbindHideEvents () {
      document.removeEventListener('mousedown', this.triggerHideFn)
      document.removeEventListener('mousewheel', this.triggerHideFn)
    },
    // 鼠标按压事件处理器
    clickDocumentHandler (e) {
      this.$emit('update:show', false)
    },
    // 右键事件事件处理
    contextMenuHandler (e) {
      this.x = e.clientX
      this.y = e.clientY
      this.layout()
      this.$emit('update:show', true)
      e.preventDefault()
    },
    // 布局
    layout () {
      this.style = {
        left: this.x + 'px',
        top: this.y + 'px'
      }
    },
    //对外的事件
    look(){

    },
    //排序
    sort(){

    },
    //刷新
    fresh(){

    },
    //重载
    reloadInit(){

    },
    //添加文件夹
    addNewFile(){

    }
  }
}
</script>

<style lang="less" scoped>
.context-menu {
	position:fixed;
	font-size:13px;
	color:#000;
	top:0;
	left:0;
    user-select:none;
  
    z-index: 999;
}
.context-menu .arrowicon {
    background:url(../../../assets/rightarrow.png) right center no-repeat;
}
.context-menu .arrowicon.list-hover,.context-menu .arrowicon.open {	
  background:url(../../../assets/rightarrow.png);
}
.context-menu ul,.context-menu li {
	list-style:none;
	padding:0;
	margin:0;
	font-size:13px;
	color:#5b667b
}
.context-menu .list {
	min-height:23px;
	padding:2px 0;
	position:absolute;
	background-color:#FFF;
	color:#000
}
.context-menu .list {
	border:1px solid #dde0e4;
	border-radius:5px;
	box-shadow:0 0 8px #ccc
}
.context-menu .list li {
	display:list-item;
	cursor:default;
	width:65px;
	height:23px;
	line-height:23px;
	white-space:nowrap;
	position:relative;
	z-index:1;
	padding:0 27px 0 20px
}
.context-menu .list .disable,.context-menu .list .disable:hover {
	color:#c5cbd8!important;
	background:#FFF;
	opacity:.8;
	filter:alpha(opacity=80);
	-ms-filter:"alpha(Opacity=80)";
	filter:alpha(Opacity=80)
}
.context-menu .list li .icon,.context-menu .list li .icon-hover {
	position:absolute;
	display:block;
	width:16px;
	height:16px;
	top:3px;
	left:2px
}
.context-menu .list li .icon-hover {
	display:none
}
.context-menu .list li.list-hover,.context-menu .list .has-more.open {
	background-color:#4281F4;
	color:#FFF!important
}
.context-menu .list li.list-hover>.icon {
	display:none
}
.context-menu .list li.list-hover>.icon-hover {
	display:block
}
.context-menu .list .has-more {
	z-index:2
}
.context-menu .list .has-more .list {
	display:none;
	top:-3px;
	left:98%;
	z-index:2;
	border-radius:0;
	box-shadow:0 0 0
}
.context-menu .list .separate,.context-menu .list .separate.list-hover {
	padding:0;
	margin:5px 0;
	height:1px;
	line-height:0;
	font-size:0!important;
	background-color:#e9e9e9;
	cursor:default
}
.context-menu .list .arrow-down {
	height:16px;
	background-position:center -38px
}
.context-menu .list li:hover {
	background-color:#4281F4;
	color:#FFF!important
}
.context-menu .list li.separate:hover {
	background-color:#e9e9e9
}
.context-menu .list .arrow-up {
	height:16px;
	background-position:center 4px
}

</style>
