<template>
  <div class="nav">
    <div class="nav-left nav-common">
      <span class="left-com">欢迎来到网上药店！</span>
      <span class="left-com signIn" @click="changeShow" ref="lognin">登录</span>
      <router-link to="/message/sign-up" target="_blank" class="left-com signUp">注册</router-link>
      <span class="left-com">客服热线：400-600-6688</span>
    </div>
    <div class="nav-right nav-common">
      <router-link to="/about">
        <span class="iconfont">&#xe614;</span>
        <span>&nbsp;我的需求</span>
      </router-link>
      <router-link to="/">
        <span class="iconfont">&#xe604;</span>
        <span>&nbsp;我的订单</span>
      </router-link>
      <router-link to="/">
        <span class="iconfont">&#xe68a;</span>
        <span>&nbsp;个人中心</span>
      </router-link>
    </div>
    <SignIn v-if="show" @message="changeShow" :faShow="true"/>
  </div>
</template>

<script>
import SignIn from "./message/SignIn";

export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    SignIn
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: inline-block;
  line-height: 40px;
  background-color: #f5f5f5;
  width: 100%;
  min-width: 1100px;

  .nav-common {
    width: 500px;
    font-size: 12px;
    color: #515151;
    display: inline-block;
  }
  .nav-left {
    margin-left: 100px;
    float: left;
    .left-com {
      margin-left: 20px;
    }
    .signIn {
      color: #515151;
      cursor: pointer;
    }
    .signUp {
      color: red;
    }
  }
  .nav-right {
    float: right;
    a {
      margin-left: 40px;
    }
  }
}
</style>
