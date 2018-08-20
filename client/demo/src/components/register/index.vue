<template>
  <div class="wrapper-login">
    
    <div class="auth-modal-overlay">
      <div class="auth-modal" id="authenticationModal">
        <aside class="auth-modal__branding">
          <div class="auth-modal__branding__logo"></div>
          <h1 class="auth-modal__branding__heading">
            文件管理系统
            </h1>
          <ul class="auth-modal__branding__points">
            <li>基于NODE全栈项目</li>
            <li>技术栈MkVN</li>
            <li>Jwt+Oauth2</li>
            <li><a href="https://textnuxt.lilidong.cn" target="_blank" style="color:#fff; text-decoration:none;">By West Gate Internet</a></li>
          </ul>
        </aside>
        <section class="auth-modal__content">
          <header class="auth-modal__content__header">
            <button class="auth-modal__content__type-link " @click="goLogin">登陆</button>
            <button class="auth-modal__content__type-link auth-modal__content__type-link--active" @click="goRegister">注册</button>
          </header>
          <div class="auth-modal__content__wrapper">
           <div class="auth-modal__content__form" >
              <input class="" id="js-auth-modal-signin-username" placeholder="用户名/邮箱" type="text" value="">
              <input class="" id="js-auth-modal-signin-password" placeholder="密码" type="password" value="">
              <button class="auth-modal__content__form__submit btn btn--blue" id="js-auth-modal-signin-submit" @click="goLogin">注册</button>
              <div class="auth-modal__content__form__error"></div>
            </div>
            <a class="auth-modal__content__forgot" href="/accounts/password/reset/">忘记密码?</a>
            <div class="auth-modal__content__or"></div>
            <div class="auth-modal__content__or-heading">快捷登陆方式</div>
            <div class="auth-modal__social-auth">
              <button class="auth-modal__social-auth__github"></button>
              <button class="auth-modal__social-auth__weibo"></button>
              <button class="auth-modal__social-auth__qq"></button>
              <button class="auth-modal__social-auth__wechat"></button>
            </div>
          </div>
        </section>
      </div>
    </div>


  </div>
</template>

<script>
export default {
    name: 'login',
    data(){
      return {

      }
    },
    methods:{
      goLogin(){
        this.$router.push('/login')
      },
      goRegister(){
        this.$router.push('/register')
      }
    }
}
</script>

<style lang="less" scoped>

@import "../../assets/less/login.less";


</style>
