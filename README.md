# nuxt-blog
西门互联nuxt版本博客 https://textnuxt.lilidong.cn


node开发一个仿百度网盘的文件管理系统
## vue-cli3.0+webpack4+
## node+mongodb+redis+jwt+koa+邮件找回密码+第三方登录（qq 微信 微博 github） 邮件找回密码
## docker pm2 自动部署




文件类型统计 
文件类型上传
登陆注册功能
每个用户用自己的名字来命名上传的文件目录
日志监控
数据采集分析
数据监控采集

统计每个文件的类型，大小，时间
实现 文本在线编辑 查看 修改保存  js html css
图片 在线查看 删除 放大 缩小 下一页上一页码
视频在线播放
pdf word execl ppt 在线查看

文件的icon 有新建 copy 移动 复制 等等

用fs 的文件模块操作文件 然后发送请求

multer 上传 各种文件类型 然后 存入 Filetype 


文件的权限管理 admin是超级管理员 可以随意删除 
注册用户的权限只能管自己的操作文件
Node 7.6默认支持Async/Await - InfoQ
迎接async await 新时代- 早起搬砖morning.work
接口 要用 async await 



user modle

token
theme
level

email
username
password
avatr


需要验证码
需要有个邮箱 找回密码

可以 qq 微博 github 登陆

category
:
1
fs_id
:
293589069589859
isdir
:
0
local_ctime
:
1456799051
local_mtime
:
1456799051
md5
:
"21131e2f4f30965dfecd29b37d139175"
object_key
:
"E-pSt6rID4vmoI3eDlMXISZ1kjI38i52MI52elqoI7s"
path
:
"/bilinyou/imooc/最前沿技术/__MACOSX/AnimatedTextFillsAll/img/._bokeh2.mp4"
server_ctime
:
1456799051
server_filename
:
"._bokeh2.mp4"
server_mtime
:
1456799051
size
:
448




https://github.com/crazy350/oppo-sx-admin 锁屏幕
锁屏功能 重新输入密码 
重新进入到上次路由
3次失败 提示 重新登陆 或者找回密码
vp-lock-screen.vue
<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="vp-lock-screen vp-panel">
      <div class="company">
        <img src="../../assets/img/logo.png" height="18" alt="">
        <span>Vue</span>Platform
      </div>
      <div class="user">
        <img src="../../assets/img/user-petty.jpg" height="100" alt="">
        <p class="name">Alex Pettyfer</p>
      </div>
      <el-input size="small" v-model="password" placeholder="请输入密码" type="password" :style="{ width: 300 + 'px' }"/>
      <el-button size="small" type="primary">登陆</el-button>
    </div>
  </el-card>
</template>
<script>
  export default {
    name: 'vp-lock-screen',
    data: function () {
      return {
        password: ''
      }
    }
  }
</script>

<template>
  <div @click="lockScreen" class="lock-screen-btn-con">
    <Tooltip content="锁屏" placement="bottom">
      <Icon type="md-lock" :size="22"></Icon>
    </Tooltip>
  </div>
</template>
<script>
  import Cookies from 'js-cookie'
  const setLockBackSize = () => {
      let x = document.body.clientWidth;
      let y = document.body.clientHeight;
      let r = Math.sqrt(x * x + y * y);
      return parseInt(r);
  }
  export default {
      name: 'lockScreen',
      props: {
          value: {
              type: Boolean,
              default: false
          }
      },
      methods: {
          lockScreen () {
              let lockScreenBack = document.getElementById('lock_screen_back');
              lockScreenBack.style.transition = 'all 3s'
              lockScreenBack.style.zIndex = 10000
              lockScreenBack.style.boxShadow = '0 0 0 ' + this.lockScreenSize + 'px #667aa6 inset'
              this.showUnlock = true
              Cookies.set('last_page_name', this.$route.name); // 本地存储锁屏之前打开的页面以便解锁后打开
              setTimeout(() => {
                  lockScreenBack.style.transition = 'all 0s'
                  this.$router.push({
                      name: 'locking'
                  })
              }, 800);
              Cookies.set('locking', '1')
          }
      },
      mounted () {
          let lockScreenBack
          if (!document.getElementById('lock_screen_back')) {
              let lockdiv = document.createElement('div')
              lockdiv.setAttribute('id', 'lock_screen_back')
              lockdiv.setAttribute('class', 'lock-screen-back')
              document.body.appendChild(lockdiv)
              lockScreenBack = document.getElementById('lock_screen_back')
              window.addEventListener('resize', () => {
                  let size = setLockBackSize()
                  this.lockScreenSize = size
                  lockScreenBack.style.transition = 'all 0s'
                  lockScreenBack.style.width = lockScreenBack.style.height = size + 'px'
              })
          } else {
              lockScreenBack = document.getElementById('lock_screen_back')
          }
          let size = setLockBackSize()
          this.lockScreenSize = size
          lockScreenBack.style.transition = 'all 3s'
          lockScreenBack.style.width = lockScreenBack.style.height = size + 'px'
      }
  }


web
