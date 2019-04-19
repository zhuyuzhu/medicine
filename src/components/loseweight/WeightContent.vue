<template>
  <div class="weight-content">
    <div class="content-one">
      <img src="https://www.jianke.com/zhuanti/sej/images/head01.jpg" alt>
      <img src="https://www.jianke.com/zhuanti/sej/images/head02.jpg" alt>
      <img src="https://www.jianke.com/zhuanti/sej/images/head03.jpg" alt>
    </div>
    <div class="content-two">
      <img src="https://www.jianke.com/zhuanti/sej/images/title01.png" alt="">
      <div>
        <video src=""></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang='scss' scoped>
.weight-content {
  width: 100%;

  background: url("https://www.jianke.com/zhuanti/sej/images/head_bg.jpg")
    no-repeat center top;
  .content-one {
    width: 1030px;
    margin: 0px auto;
    img {
      margin-top: -4px;
    }
  }
  .content-two {
    width: 100%;
    height: 700px;
    background: #FDECF2;
    text-align: center;
  }
}
</style>
