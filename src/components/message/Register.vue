<template>
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
</template>

<script>
export default {
  data() {
    return {
      phoneNum: "", //用户输入的电话号码
      verificationCode: "", //用户输入的验证码
      activeCode: "", //用户输入的动态验证码
      veriCode: "", //随机产生的验证码
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
    //正则表达式检查用户输入的电话号码
    inspectPhone() {
      //var reg = /^1[^0|^1|^2][\d]{9}$/;//以1开头且11位数字
      var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      this.tipPhoneNum = reg.test(this.phoneNum);
      //将父组件所需的值，从子组件传过去
      this.$emit("getChildValue", [
        this.phoneNum,
        this.verificationCode,
        this.activeCode,
        this.tipPhoneNum,
        this.tipVerifyCode,
        this.tipActiveCode
      ]);
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
      //将父组件所需的值，从子组件传过去
      this.$emit("getChildValue", [
        this.phoneNum,
        this.verificationCode,
        this.activeCode,
        this.tipPhoneNum,
        this.tipVerifyCode,
        this.tipActiveCode
      ]);
    },
    //模拟动态验证码，要求：四位数字
    mockActiveCode() {
      var reg = /^\d{4}$/;
      this.tipActiveCode = reg.test(this.activeCode);
      //将父组件所需的值，从子组件传过去
      this.$emit("getChildValue", [
        this.phoneNum,
        this.verificationCode,
        this.activeCode,
        this.tipPhoneNum,
        this.tipVerifyCode,
        this.tipActiveCode
      ]);
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
.logn-in-content {
  padding-left: 30px;
  padding-top: 20px;
  div {
    width: 310px;
    height: 40px;
  }
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
</style>
