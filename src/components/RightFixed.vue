<template>
  <div class="right-fixed">
    <div class="top">
      <img src="../assets/logo.jpg" alt="">
      <router-link tag="span" to="/home">网上药店</router-link>
    </div>
    <div class="bottom">
      <span class="iconfont">&#xe61a;</span>
      <span>购物车</span>
      <div class="count">0</div>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>
<style lang='scss' scoped>
  .right-fixed {
    width: 30px;
    height: 100%;
    position: fixed;
    top:0;
    bottom: 0;
    right: 0px;
    background-color: #999;
    font-size: 16px;
    text-align: center;
    color: #fff;
    z-index: 10000;
    .top {
      position: absolute;
      top: 100px;
      width: 100%;
      height: 130px;
      background-color: #47B848;
      border-top-right-radius: 50% 10%;
      border-top-left-radius: 50% 10%;
      cursor: pointer;
      img {
        width: 100%;
        border-radius: 50%;
      }
      span {
        display: inline-block;
        width: 100%;
        
      }
    }
    .bottom {
      position: absolute;
      bottom: 200px;
      width: 100%;
      height: 130px;
      cursor: pointer;
       background-color: #47B848;
       padding: 10px 0;
      span:nth-of-type(1) {
        font-size: 20px;
      }
     
      .count {
        position: absolute;
        bottom: 10px;
        width:24px;
        height: 24px;
        background-color: rgb(216, 59, 177);
        left: 3px;
        line-height: 24px;
        border-radius: 30%;
      }
    }
    .bottom:hover {
      color: blue;
    }
    .top:hover {
      color: blue;
    }
  }
</style>
