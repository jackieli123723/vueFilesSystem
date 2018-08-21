<template>
<div class="frame-aside" id="layoutAside">
    <div class="P6eoH5ns">
        <div  class="module-aside DtJtsC">
              <div class="KHbQCub"></div>
               <ul class="fOHAbxb">
                        <!-- <router-link to="/all" >all</router-link>
                         <router-link to="/picture/timeline" >picturetimeline</router-link>
                           <router-link to="/document" >document</router-link>
                             <router-link to="/bt" >bt</router-link>
                               <router-link to="/video" >video</router-link>
                                 <router-link to="/music" >music</router-link>
                                   <router-link to="/other" >other</router-link>
                                    <router-link to="/share" >share</router-link>
                                     <router-link to="/recycled" >recycled</router-link> -->
                        <li v-for="(nav,index) in navLinks"  class="lvhwXz5w" :class="{'bHzsaPb':navLinkActived == index}"  :key='index'>
                           <router-link :to=nav class="suaXvAq kuskajv"  >
                               <span class="text">
                                    <span class="icon" :class=nav.icon></span>
                                    <span>{{nav.name}}</span>
                              </span>
                           </router-link>
                       </li>
                </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'layoutAside',
    data() {
        return {
            navLinkActived:0,
            navLinks:[
              {
                'name':'全部文件',
                'icon':'icon-disk',
                'path':'/all'
              },
                {
                'name':'图片',
                'path':'/picture/timeline'
              },
                {
                'name':'文档',
                'path':'/document'
              },
                {
                'name':'视频',
                'path':'/video'
              },
                {
                'name':'种子',
                'path':'/bt'
              },
                {
                'name':'音乐',
                'path':'/music'
              },
                {
                'name':'其他',
                'path':'/other'
              },
                {
                'name':'我的分享',
                'icon':'icon-my-share',
                'path':'/share'
              },
              {
                'name':'回收站',
                'icon':'icon-delete',
                'path':'/recycled'
              }
            ]
        }
    },
    conmputed:{
       
    },
    methods:{
      
    }
}
</script>

<style lang="less" scoped>



/*扩容*/
.QGOvsxb .quota-over-tips {
    position: absolute;
    width: 172px;
    height: 113px;
    left: 54%;
    margin-left: -92px;
    top: -108px;
    bottom: 15px;
    border-radius: 4px;
    color: #3887ff;
    display: none;
    background: url(/box-static/interface-widget-1/quota/img/background_acedb69.png) no-repeat;
    text-align: center
}

.QGOvsxb .quota-over-tips .quota-over-tips-close {
    padding: 2px 9px 0 0;
    float: right;
    height: 16px;
    width: 9px;
    cursor: pointer;
    font-size: 18px;
    display: block;
    color: #3887ff;
    line-height: 18px
}

.aside-absolute-container .quota-over-tips .quota-over-tips-close:hover {
    cursor: pointer;
    color: #478de4
}

.aside-absolute-container .quota-over-tips .quota-over-bg {
    position: absolute;
    display: block;
    width: 14px;
    height: 9px;
    top: 56px;
    left: 50%;
    margin-left: -5.5px
}

.aside-absolute-container .quota-over-tips div {
    padding: 22px 7px 10px 9px;
    text-align: left;
    font-size: 12px;
    color: #3b8cff
}

.aside-absolute-container .quota-over-tips .has-vip {
    padding: 19px 10px
}

.aside-absolute-container .QGOvsxb .hidden {
    visibility: hidden
}

.aside-absolute-container .QGOvsxb .remainingSpaceUi {
    height: 8px;
    width: 155px;
    background: #42aee7;
    background: rgba(0, 0, 0, .1);
    line-height: 0;
    _font-size: 0;
    border-radius: 10px;
    overflow: hidden;
    top: 0;
    left: 0
}

.aside-absolute-container .QGOvsxb .remainingSpaceUi_span {
    height: 8px;
    width: 0;
    line-height: 0;
    _font-size: 0;
    background: #3482da;
    display: block;
    border-radius: 10px;
    transition-property: width;
    transition-delay: .3s;
    transition-timing-function: linear
}

.aside-absolute-container .QGOvsxb .DIeHPCb,
.aside-absolute-container .QGOvsxb .remaining-space {
    position: relative;
    top: 7px;
    float: left
}

.aside-absolute-container .QGOvsxb .DIeHPCb span {
    font-size: 12px;
    position: relative;
    top: 0;
    left: 0
}

.aside-absolute-container .QGOvsxb .bar {
    position: relative
}

.aside-absolute-container .QGOvsxb .GELdyA {
    text-align: right;
    margin-top: 4px;
    float: right
}

.aside-absolute-container .QGOvsxb .GELdyA a {
    display: inline-block;
    padding: 0 8px;
    height: 22px;
    border-radius: 15px;
    line-height: 22px;
    background-color: #71c9f1;
    text-align: center;
    color: #fff
}

.aside-absolute-container .QGOvsxb .GELdyA a:hover {
    color: #c9eeff;
    text-decoration: none
}

.aside-absolute-container .QGOvsxb .quota-over-btn {
    display: inline-block;
    _zoom: 1;
    *display: inline;
    background: #f8645c;
    border-radius: 10px;
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
    color: #fff
}
</style>
