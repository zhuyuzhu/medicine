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

}
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
