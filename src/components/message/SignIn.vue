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
      <Register @getChildValue="getChildValue"/>
      <div class="logn-in-footer">
        <p>
          <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
          <span>7天内自动登录</span>
        </p>
        <div @click="lognIn">登 录</div>
        <div class="free-logn-up">
          <span>免费注册</span>
          <span class="iconfont">&#xe600;</span>
        </div>
      </div>
    </div>
    <div class="shade" @click="chahao"></div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import Register from "./Register";

export default {
  components: {
    Register
  },
  data() {
    return {
      phoneNum: "", //用户输入的电话号码
      verificationCode: "", //用户输入的验证码
      activeCode: "", //用户输入的动态验证码
      tipPhoneNum: true, //请输入正确电话号码
      tipVerifyCode: true, //请输入验证码，区分大小写
      tipActiveCode: true, //动态验证码错误，请重新填写
      toggle: "no"
    };
  },
  methods: {
    //点击差号时，关闭登录框
    chahao() {
      this.$emit("message");
    },
    getChildValue(value) {
      this.phoneNum = value[0];
      this.verificationCode = value[1];
      this.activeCode = value[2];
      this.tipPhoneNum = value[3];
      this.tipVerifyCode = value[4];
      this.tipActiveCode = value[5];
    },
    //点击登录按钮
    lognIn() {
      if (this.canLognIn) {
        axios
          .get("lognInByCode.php", {
            params: {
              account: this.phoneNum
            }
          })
          .then(ref => {
            console.log(ref.data.code);
            const code = ref.data.code;
            if (code == 1) {
              // 传给mutations，修改store中的数据
              this.$store.commit("lognin/changeUserNum", {
                username: this.phoneNum
              });
              console.log("登录成功！");
              this.$emit("message");
              return;
            }else if(code == 0) {
              console.log("登录失败！");
            }
          });
      }
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
