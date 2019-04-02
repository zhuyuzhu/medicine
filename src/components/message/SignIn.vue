<template>
  <div class="sign-in">
    <div class="logn-in-header">
      <span>登 录</span>
      <span class="iconfont" @click="chahao">&#xe6ac;</span>
    </div>
    <div class="logn-in-select">
      <div class="message">短信登录</div>
      <div class="member">账号密码登录</div>
    </div>
    <div class="logn-in-content">
      <div class="phone">
        <input type="text" placeholder="请输入手机号码" v-model="phoneNum">
        <span class="iconfont">&#xe611;</span>
      </div>
      <p>请输入正确是手机号</p>
      <div class="verification-code">
        <input type="text" placeholder="请输入验证码" v-model="verificationCode">
        <span>e3f6</span>
      </div>
      <p>请输入验证码</p>
      <div class="active-code">
        <input type="text" placeholder="请输入动态验证码" v-model="activeCode">
        <div>获取验证码</div>
      </div>
      <p>验证码错误，请重新填写</p>
    </div>
    <div class="logn-in-footer">
      <p>
        <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
        <span>7天内自动登录</span>
      </p>
      <div>登 录</div>
      <div class="free-logn-up">
        <span>免费注册</span>
        <span class="iconfont">&#xe600;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNum: "",
      verificationCode: "",
      activeCode: "",
      toggle: "no",
      cancel: false,
    };
  },
  methods: {
    chahao (e) {
      this.$emit('message', this.cancel)
    }
  }
};
</script>
<style lang='scss' scoped>
.sign-in {
  left: 50%;
  top: 50%;
  position: absolute;
  margin-left: -185px;
  margin-top: -240px;
  background: rgb(250, 248, 248);
  z-index: 2000;
  width: 370px;
  height: 460px;
  border: 10px solid rgba(70, 240, 18, 0.2);
  color: #fff;
  p {
    color: #ea5514;
    font-size: 12px;
    line-height: 30px;
  }
  .logn-in-select {
    width: 100%;
    height: 40px;
    font-size: 18px;
    margin-top: 30px;
    div {
      display: inline-block;
      line-height: 40px;
      color: #333;
      cursor: pointer;
    }
    div:first-of-type {
      margin-left: 30px;
    }
    div:last-of-type {
      margin-left: 130px;
    }
  }
  .logn-in-header {
    width: 100%;
    height: 40px;
    background-color: #47b848;
    span {
      font-size: 18px;
      line-height: 40px;
    }
    span:first-of-type {
      margin-left: 15px;
    
    }
    span:last-of-type {
      display: inline-block;
      margin-left: 285px;
      // width: 0px;
      font-size: 20px;
      height: 40px;
      // border: 1px solid black;
      cursor: pointer;
    }
  }
  .logn-in-content {
    
    padding-left: 30px;
    padding-top: 20px;
    div {
      width: 310px;
      height: 40px;
    }
    p {
      height: 30px;
    }
    input {
      padding-left: 5px;
      width: 300px;
      height: 40px;
    }
    .phone {
      position: relative;
      span {
        position:absolute;
        top: 2px;
        right: 2px;
        cursor: pointer;
        line-height: 40px;
        width: 30px;
        color: #666;
        background-color: #fff;
        text-align: center;
      }
    }
    .verification-code {
       position: relative;
      span {
        position:absolute;
        top: 1px;
        right: 2px;
        cursor: pointer;
        width: 99px;
        height: 42px;
        background-color: #949090;
        line-height: 40px;
        text-align: center;
      }
    }
    .active-code {
       position: relative;
      div {
        position:absolute;
        top: 1px;
        right: 2px;
        width: 99px;
        height: 42px;
        vertical-align: 10px;
        background-color: #949090;
        cursor: pointer;
        line-height: 40px;
        text-align: center;
      }
    }
  }
  .logn-in-footer {
    width: 100%;
    height: 60px;
    padding-left: 30px;
    p {
      margin-top: 10px;
      input {
        cursor: pointer;
      }
      span {
        margin-left: 5px;
        vertical-align: 2px;
      }
    }

    div:first-of-type {
      cursor: pointer;
      width: 300px;
      // margin-top: 5px;
      margin-bottom: 8px;
      background-color: #47b848;
      text-align: center;
      line-height: 40px;
   
      font-size: 20px;
    }
    div:last-of-type {
      width: 80px;
      height: 20px;
      // border: 1px solid black;
      line-height: 20px;
      cursor: pointer;
      span:first-of-type {
        font-size: 14px;
        color: #ff334c;
      }
      span:last-of-type {
        padding-left: 5px;
        color: #ea5514;
      }
    }
  }
}
</style>
