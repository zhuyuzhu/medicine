<template>
  <div class="sign-up">
    <div class="header">
      <Logo class="logo"/>
      <span class="welcome">欢迎注册</span>
      <span>已有账号，</span>
      <router-link tag="span" to="/message/account-password" target="_self">立即登录</router-link>
    </div>
    <div class="content">
      <Register class="content-input" @getChildValue="getChildValue"/>
      <div class="content-footer">
        <p>
          <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
          <span>&nbsp;我已阅读并同意</span>
          <span>《网上药店用户注册协议》</span>
        </p>
        <div class="register" @click="lognUp">注&nbsp;册</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Register from "./Register";
import Logo from "../Logo";
export default {
  components: {
    Register,
    Logo
  },
  data() {
    return {
      phoneNum: "", //用户输入的电话号码
      verificationCode: "", //用户输入的验证码
      activeCode: "", //用户输入的动态验证码
      tipPhoneNum: true, //请输入正确电话号码
      tipVerifyCode: true, //请输入验证码，区分大小写
      tipActiveCode: true, //动态验证码错误，请重新填写
      toggle: "no",
      passw: "123456",
    };
  },
  methods: {
    getChildValue(value) {
      this.phoneNum = value[0];
      this.verificationCode = value[1];
      this.activeCode = value[2];
      this.tipPhoneNum = value[3];
      this.tipVerifyCode = value[4];
      this.tipActiveCode = value[5];
    },
    lognUp() {
      if (this.canLognIn) {
        console.log(this.phoneNum);
        console.log("正在进行注册...")
        axios
          .post("../lognUp.php", {
              account: this.phoneNum
            })
          .then(ref => {
            console.log(ref);
            const code = ref.data.code;
            console.log(code);
            if (code === 0) {
              console.log("该账号已被注册,请登录...");
              this.$store.commit("lognin/changeTipShow", {
                tipShow: false,
              });
              this.$store.commit("lognin/changeTip", {
                tip: true
              });
            }else if(code === 1){
              console.log("注册成功，页面正准备进入home页");
              this.$store.commit("lognin/changeUserNum", {
                username: this.phoneNum
              });
              this.$store.commit("lognin/changeLoggedOff", {
                loggedOn: true
              });
              window.open("http://localhost/home","_self");
            }
          });
      }
    }
  },
  computed: {
    canLognIn() {
      //是否可以登录
      //flag1表示：三个输入框是否都输入了正确的内容 或者 都没有输入内容
      var flag1 = this.tipPhoneNum && this.tipVerifyCode && this.tipActiveCode && this.toggle=="yes";
      //flag2表示：三个输入框是否有一个是空
      var flag2 =
        this.verificationCode == "" ||
        this.phoneNum == "" ||
        this.activeCode == "";
      return flag1 && !flag2;
    }
  }
};
</script>
<style lang='scss' scoped>
.sign-up {
  background-color: #f2f2f2;
  min-width: 1100px;
  .header {
    background-color: #fff;
    padding-left: 100px;
    .welcome {
      color: #ff334c;
      font-size: 20px;
    }
    span:nth-of-type(2){
      font-size: 14px;
      margin-left: 400px;
    }
    span:nth-of-type(3){
      font-size: 14px;
      cursor: pointer;
      color: red;
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
