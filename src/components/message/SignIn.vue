<template>
  <div>
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
          <input type="text" placeholder="请输入手机号码" v-model="phoneNum" @blur="inspectPhone">
          <span class="iconfont" @click="clearPhoneNum">&#xe611;</span>
        </div>
        <p>{{tipPhoneNum ? '' : '请输入正确的手机号'}}</p>
        <div class="verification-code">
          <input type="text" placeholder="请输入验证码" v-model="verificationCode" @blur="verifyCode">
          <span @click="refreshCode">{{veriCode}}</span>
        </div>
        <p>{{tipVerifyCode ? '' : '请输入验证码，区分大小写'}}</p>
        <div class="active-code">
          <input type="text" placeholder="请输入动态验证码" v-model="activeCode" @blur="mockActiveCode">
          <div>获取验证码</div>
        </div>
        <p>{{tipActiveCode ? '' : "验证码错误，请重新填写"}}</p>
      </div>
      <div class="logn-in-footer">
        <p>
          <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
          <span>7天内自动登录</span>
        </p>
        <div @click="lognIn">登 录</div>
        <div class="free-logn-up">
          <span>{{userName}}</span>
          <span class="iconfont">&#xe600;</span>
        </div>
      </div>
    </div>
    <div class="shade" @click="chahao"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      phoneNum: "", //用户输入的电话号码
      verificationCode: "", //用户输入的验证码
      activeCode: "", //用户输入的动态验证码
      veriCode: "", //随机产生的验证码
      toggle: "no",
      cancel: false,
      tipPhoneNum: true, //请输入正确电话号码
      tipVerifyCode: true, //请输入验证码，区分大小写
      tipActiveCode: true, //动态验证码错误，请重新填写
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
    //点击差号时，关闭登录框
    chahao() {
      this.$emit("message", this.cancel);
    },
    //正则表达式检查用户输入的电话号码
    inspectPhone() {
      //var reg = /^1[^0|^1|^2][\d]{9}$/;//以1开头且11位数字
      var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      this.tipPhoneNum = reg.test(this.phoneNum);
    },
    //点击差号时，清除用户输入的电话号码
    clearPhoneNum() {
      this.phoneNum = "";
    },
    //刷新验证码
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
    // 用户输入的验证码进行验证
    verifyCode() {
      var reg = /\s/g;
      var vericode = this.veriCode.replace(reg, ""); // vericode 是验证码veriCode的去空字符后的值
      var verificationcode = this.verificationCode.replace(reg, ""); //verificationcode是用户输入的验证码进行去空字符后的值
      this.tipVerifyCode = verificationcode == vericode;
    },
    //模拟动态验证码，要求：四位数字
    mockActiveCode() {
      var reg = /^\d{4}$/;
      this.tipActiveCode = reg.test(this.activeCode);
    },
    //点击登录按钮
    lognIn() {
      if (this.canLognIn) {
        // 传给mutations，修改store中的数据
        this.$store.commit("lognin/changeUserNum", { username: this.phoneNum });
        console.log("登录成功！");
        this.$emit("message", this.cancel);
        return;
      }
      console.log("登录失败！");
    }
  },
  computed: {
    //从store中获取数据
    ...mapState({
      userName: state => state.lognin.userName
    }),
    canLognIn() {
      //是否可以登录
      //flag1表示：三个输入框是否都输入了正确的内容 或者 都没有输入内容
      var flag1 = this.tipPhoneNum && this.tipVerifyCode && this.tipActiveCode;
      //flag2表示：三个输入框是否有一个是空
      var flag2 =
        this.verificationCode == "" ||
        this.phoneNum == "" ||
        this.activeCode == "";
      return flag1 && !flag2;
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
        font-size: 24px;
      }
    }
    .active-code {
      position: relative;
      div {
        position: absolute;
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
.shade {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(36, 36, 36, 0.5);
  z-index: 999;
}
</style>
