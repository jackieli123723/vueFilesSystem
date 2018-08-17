<template>
<div class="frame-aside" id="layoutAside">
    <div class="P6eoH5ns" node-type="P6eoH5ns">
        <div node-type="ckzbgKQ" class="module-aside DtJtsC">
            <div class="KHbQCub"></div>
            <ul class="fOHAbxb">
                <li node-type="whmwGMEa" data-key="list" class="lvhwXz5w bHzsaPb">
                    <a node-type="drXy5m" path="/" class="suaXvAq kuskajv" hidefocus="true" href="javascript:void(0);">
<span class="text">
<span node-type="ukfmGmJr" class="icon icon-disk"></span>
<span node-type="vjzgXZDQ">全部文件</span>
</span>
</a>
                </li>
                <li node-type="whmwGMEa" data-key="pic" class="lvhwXz5w">
                    <a node-type="drXy5m" class="kuskajv" hidefocus="true" href="/disk/timeline">
<span class="text">
<span node-type="vjzgXZDQ">图片</span>
</span>
</a>
                </li>
                <li node-type="whmwGMEa" data-key="doc" class="lvhwXz5w">
                    <a node-type="drXy5m" cat="4" class="kuskajv" hidefocus="true" href="javascript:void(0);">
<span class="text">
<span node-type="vjzgXZDQ">文档</span>
</span>
</a>
                </li>
                <li node-type="whmwGMEa" data-key="video" class="lvhwXz5w">
                    <a node-type="drXy5m" cat="1" class="kuskajv" hidefocus="true" href="javascript:void(0);">
<span class="text">
<span node-type="vjzgXZDQ">视频</span>
</span>
</a>
                </li>
                <li node-type="whmwGMEa" data-key="mbt" class="lvhwXz5w">
                    <a node-type="drXy5m" cat="7" class="kuskajv" hidefocus="true" href="javascript:void(0);">
<span class="text">
<span node-type="vjzgXZDQ">种子</span>
</span>
</a>
                </li>
                <li node-type="whmwGMEa" data-key="music" class="lvhwXz5w">
                    <a node-type="drXy5m" cat="2" class="kuskajv" hidefocus="true" href="javascript:void(0);">
<span class="text">
<span node-type="vjzgXZDQ">音乐</span>
</span>
</a>
                </li>
                <li node-type="whmwGMEa" data-key="other" class="lvhwXz5w">
                    <a node-type="drXy5m" cat="6" class="kuskajv" hidefocus="true" href="javascript:void(0);">
<span class="text">
<span node-type="vjzgXZDQ">其它</span>
</span>
</a>
                </li>
            </ul>
     
 
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'layoutAside',
}
</script>

<style lang="less" scoped>
@import "../../assets/less/disk.header.less";
@import "../../assets/less/home-all.less";
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
