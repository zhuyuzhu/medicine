<template>
  <div class="account-password">
    <div class="header">
      <Logo class="logo"/>
      <span class="welcome">欢迎登录</span>
      <span>没有账号？ </span>
      <router-link tag="span" to="/message/sign-up" target="_self">立即注册</router-link>
    </div>
    <div class="content">
      <div class="con">
        <div class="account">
          <input type="text" placeholder="请输入手机号码" v-model.trim="phoneNum" @blur="inspectPhone">
          <span class="iconfont" @click="clearPhoneNum">&#xe611;</span>
        </div>
        <p>{{tipAccount ? '' : '请输入正确的手机号'}}</p>
        <div class="password">
          <input type="password" placeholder="请输入密码" v-model="password" @blur="inspectPassword">
        </div>
        <p>{{tipPassword ? '' : '请输入密码'}}</p>
        <div class="verification-code">
          <input
            type="text"
            placeholder="请输入验证码"
            v-model.trim="verificationCode"
            @blur="verifyCode"
          >
          <span @click="refreshCode">{{veriCode}}</span>
        </div>
        <p>{{tipVerifyCode ? '' : '请输入验证码，区分大小写'}}</p>
      </div>
      <div class="content-footer">
        <p>
          <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
          <span>&nbsp;七天内自动登录</span>
        </p>
        <router-link tag="div" to="/home" class="register" @click="lognUp">登&nbsp;录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../Logo";
import axios from "axios";

export default {
  components: {
    Logo
  },
  data() {
    return {
      phoneNum: "",
      tipAccount: true,
      verificationCode: "",
      veriCode: "",
      tipVerifyCode: true,
      password: "",
      tipPassword: true,
      toggle: "no",
      canLeave: false, //可以离开该页面吗？
      code: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "D",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  methods: {
    inspectPhone() {
      var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      this.tipAccount = reg.test(this.phoneNum);
    },
    clearPhoneNum() {
      this.phoneNum = "";
    },
    verifyCode() {
      var reg = /\s/g;
      var vericode = this.veriCode.replace(reg, ""); // vericode 是验证码veriCode的去空字符后的值
      var verificationcode = this.verificationCode.replace(reg, ""); //verificationcode是用户输入的验证码进行去空字符后的值
      this.tipVerifyCode = verificationcode == vericode;
    },
    refreshCode() {
      var firstNum = Math.floor(70 * Math.random());
      var secondNum = Math.floor(70 * Math.random());
      var thirdNum = Math.floor(70 * Math.random());
      var fourthNum = Math.floor(70 * Math.random());
      this.veriCode =
        this.code[firstNum] +
        " " +
        this.code[secondNum] +
        " " +
        this.code[thirdNum] +
        " " +
        this.code[fourthNum];
    },
    inspectPassword() {
      if (this.password == "") {
        this.tipPassword = false;
      }
    },
    lognUp() {
      console.log("触发点击事件");//有beforeRouterLeave函数，该事件无法触发
    }
  },
  created() {
    var firstNum = Math.floor(70 * Math.random());
    var secondNum = Math.floor(70 * Math.random());
    var thirdNum = Math.floor(70 * Math.random());
    var fourthNum = Math.floor(70 * Math.random());
    this.veriCode =
      this.code[firstNum] +
      " " +
      this.code[secondNum] +
      " " +
      this.code[thirdNum] +
      " " +
      this.code[fourthNum];
  },
  computed: {
    canLognIn() {
      //是否可以登录
      //flag1表示：三个输入框是否都输入了正确的内容 或者 都没有输入内容
      var flag1 = this.tipAccount && this.tipVerifyCode && this.tipPassword;
      //flag2表示：三个输入框是否有一个是空
      var flag2 =
        this.verificationCode == "" ||
        this.phoneNum == "" ||
        this.password == "";
      return flag1 && !flag2;
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("进入beforeRouterLeave函数内。。");
    if (to.path == "/home") {
      //如何离开该页面要去home页面
      if (this.canLognIn) {
        console.log("进行登录信息身份核实。。。");
        axios
          .post("../lognInByPassword.php", {
            account: this.phoneNum,
            passw: this.password
          })
          .then(ref => {
            const len = ref.data.data.length;
            console.log(len);
            if (len === 1) {
              console.log("身份核实成功，正在进行页面跳转。。。");
              console.log("页面跳转前，修改登录状态为：已登录。。。")
              this.$store.commit("lognin/changeLoggedOff", {
                loggedOn: true
              });
              this.$store.commit("lognin/changeUserNum", {
                username: this.phoneNum
              });
              next();
            }else {
              next(false);
            }
          });
      }else{
        next(false);
      }
    } else {
      next();
    }
  }
};
</script>
<style lang='scss' scoped>
.account-password {
  background-color: #f2f2f2;
  min-width: 1100px;
  p {
    color: #ea5514;
    font-size: 12px;
    line-height: 30px;
    height: 30px;
  }
  input {
    padding-left: 5px;
    width: 300px;
    height: 40px;
  }
  .header {
    background-color: #fff;
    padding-left: 100px;
    .welcome {
      color: #ff334c;
      font-size: 20px;
    }
    span:nth-of-type(2) {
      font-size: 14px;
      margin-left: 400px;
    }
    span:nth-of-type(3) {
      font-size: 14px;
      cursor: pointer;
      color: red;
    }
  }
  .content {
    .con {
      margin-left: 240px;
      margin-top: 90px;
    }
    margin: 60px auto 0;
    width: 800px;
    height: 500px;
    border: 1px solid transparent;
    background-color: #fff;
    .account {
      position: relative;
      width: 310px;
      span {
        position: absolute;
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
      width: 310px;
      span {
        position: absolute;
        top: 1px;
        right: 2px;
        cursor: pointer;
        width: 99px;
        height: 42px;
        background-image: url("../../assets/code.jpg");
        line-height: 40px;
        text-align: center;
        color: blue;
        font-size: 22px;
      }
    }
    .content-footer {
      width: 309px;
      height: 100px;
      margin-left: 240px;
      p {
        margin-top: 10px;
        input {
          width: 13px;
          height: 13px;
          cursor: pointer;
        }
        span {
          font-size: 12px;
          vertical-align: 2px;
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
