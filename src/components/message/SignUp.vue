<template>
  <div class="sign-up">
    <div class="header">
      <Logo class="logo"/>
      <span class="welcome">欢迎注册</span>
    </div>
    <div class="content">
      <Register class="content-input"/>
      <div class="content-footer">
        <p>
          <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
          <span>&nbsp;我已阅读并同意</span>
          <span>《网上药店用户注册协议》</span>
        </p>
        <div class="register">注&nbsp;册</div>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "./Register";
import Logo from "../Logo";
export default {
  components: {
    Register,
    Logo
  },
  data() {
    return {
      toggle: "no"
    };
  }
};
</script>
<style lang='scss' scoped>
.sign-up {
  background-color: #f2f2f2;
  .header {
    background-color: #fff;
    padding-left: 100px;
    .welcome {
      color: #ff334c;
      font-size: 20px;
    }
  }
  .content {
    margin: 60px auto 0;
    width: 800px;
    height: 500px;
    border: 1px solid transparent;
    background-color: #fff;
    .content-input {
      margin-top: 70px;
      margin-left: 210px;
    }
    .content-footer {
      width: 309px;
      height: 100px;
      margin-left: 240px;
      p {
        margin-top: 10px;
        input {
          cursor: pointer;
        }
        span {
          font-size: 12px;
          vertical-align: 2px;
        }
        span:last-of-type {
          color: #ff334c;
          cursor: pointer;
        }
      }
      .register {
        width: 309px;
        height: 40px;
        font-size: 20px;
        background-color: #ff334c;
        color: #fff;
        line-height: 40px;
        text-align: center;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
