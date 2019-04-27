<template>
  <div class="demand">
    <div class="header">
      <Logo class="logo"/>
      <span class="welcome">请描述您的需求~~~</span>
    </div>
    <div class="body">
      <div class="content">
        <input placeholder="请输入您所要药品/仪器的名称" type="text">
        <textarea placeholder="描述您的需求详情" ></textarea>
        <div class="submit">
          <button>提交需求</button>
          <button>保存草稿</button>
          <button>返回</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../Logo";

export default {
  components: {
    Logo
  }
};
</script>
<style lang='scss' scoped>
.demand {
  background-color: #bef5a5;
  min-width: 1100px;
  .header {
    background: #fff;
    padding-left: 100px;
    .welcome {
      color: #ff334c;
      font-size: 20px;
    }
    span:nth-of-type(2) {
      font-size: 14px;
      margin-left: 400px;
    }
  }
  .body {
    width: 100%;
    height: 650px;
    border: 1px solid #aaa;

    .content {
      position: relative;
      width: 800px;
      height: 550px;
      border: 1px solid #aaa;
      margin: 40px auto;
      background-color: #fff;
      input:first-of-type {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 40px;
        line-height: 40px;
        width: 100%;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 500;
        background-color: #efefef;
        color: #4f4f4f;
        padding-left: 10px;
        border: 1px solid transparent;
       border-bottom: 1px solid #aaa;
      }
      textarea:first-of-type {
        position: absolute;
        top: 40px;
        left: 0px;
        box-sizing: border-box;
        width: 100%;
        height: 81%;
        border: 1px solid transparent;
        border-bottom: 1px solid #aaa;
        font-size: 16px;
        color: #4f4f4f;
        font-weight: 400;
        line-height: 26px;
        margin: 0 0 16px;
        overflow-x: auto;
        padding: 10px;
        outline: none
      }
      .submit{
        position: absolute;
        bottom: 10px;
        left: 50%;
        margin-left: -216px;
        button {
          width: 90px;
          height: 38px;
          box-sizing: border-box;
          border: 1px solid #C92027;
          color: #C92027;
          outline: none;
          margin-left: 40px;
          cursor: pointer;
          font-weight: 400;
          font-size: 16px;
          border-radius: 10%;
        }
        button:hover {
          background-color: #C92027;
          color: #fff;
        }
      }
    }
  }
}
</style>
