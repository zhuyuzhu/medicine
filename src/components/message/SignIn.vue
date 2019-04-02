<template>
  <div class="sign-in">
    <div class="logn-in-header">
      <span>登录</span>
      <span class="iconfont">&#xe614;</span>
    </div>
    <div class="logn-in-select">
      <div class="message">短信登录</div>
      <div class="member">账号密码登录</div>
    </div>
    <div class="logn-in-content">
      <div class="phone">
        <input type="text" placeholder="请输入手机号码" v-model.number="phoneNum">
        <span class="iconfont">&#xe614;</span>
      </div>
      <p>请输入正确是手机号</p>
      <div class="verification-code">
        <input type="text" placeholder="请输入验证码" v-model="verificationCode">
        <span>e3f6</span>
      </div>
      <p>请输入验证码</p>
      <div class="active-code">
        <input type="text" placeholder="请输入动态验证码" v-model.number="activeCode">
        <div>获取验证码</div>
      </div>
      <p>验证码错误，请重新填写</p>
    </div>
    <div class="logn-in-footer">
      <p>
        <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
      <span>7天内自动登录</span>
      </p>
      <div>登录</div>
      <div class="free-logn-up">
        <span>免费注册</span>
        <span class="iconfont">&#xe614;</span>
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
      toggle: 'no',
    };
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
  background: rgba(242, 242, 242, 0.3);
  z-index: 2000;
  width: 370px;
  height: 460px;
  border: 10px solid black;
  p {
    color: #ea5514;
    font-size: 12px;
    line-height: 24px;
  }
  .logn-in-select {
    width: 100%;
    height: 40px;
    // border: 1px solid black;
     margin-top: 30px;
    div {
      display: inline-block;
      line-height: 40px;
      // border: 1px solid black;
      // padding: 0 10px;
      cursor: pointer;
     
    }
    div:first-of-type {
      margin-left: 30px;
    }
    div:last-of-type {
      margin-left: 140px;
    }
  }
  .logn-in-header {
    width: 100%;
    height: 40px;
    background-color: #47b848;
    span {
      line-height: 40px;
    }
    span:first-of-type {
      margin-left: 10px;
      color: #fff;
    }
    span:last-of-type {
      display: inline-block;
      margin-left: 300px;
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
      width: 300px;
      height: 40px;
      border: 1px solid black;
    }
    p {
      height: 24px;
    }
    input {
      padding-left: 5px;
      width: 190px;
      height: 40px;
    }
    .phone {
      span {
        margin-left: 75px;
        cursor: pointer;
      }
    }
    .verification-code {
      span {
        display: inline-block;
        vertical-align: 10px;
        cursor: pointer;
        width: 99px;
        height: 40px;
        // border: 1px solid black;
      }
    }
    .active-code {
      div {
        display: inline-block;
        cursor: pointer;
        width: 99px;
        height: 40px;
        vertical-align: 10px;
        // border: 1px solid black;
      }
    }
  }
  .logn-in-footer {
    width: 100%;
    height: 60px;
    padding-left: 30px;
    input {
      cursor: pointer;
    }
    div:first-of-type {
      width: 300px;
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: #47b848;
      text-align: center;
      line-height: 40px;
    }
    div:last-of-type {
      width: 100px;
      height: 20px;
      // border: 1px solid black;
      line-height: 20px;
      span:first-of-type {
        font-size: 14px;
        color: #ff334c;
      }
      span:last-of-type {
        padding-left: 10px;
      }
    }
  }
}
</style>
