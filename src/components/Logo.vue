<template>
  <router-link to="/home" class="logo">
    <img src="../assets/logo.jpg" class="logo-img">
    <img src="../assets/logotext.jpg" class="logo-text">
  </router-link>

</template>

<script>
export default {
  
}
</script>
<style lang='scss' scoped>
  .logo {
    display: inline-block;
    width: 310px;
    height: 90px;
    // border: 1px solid black;
    // vertical-align: -20px;
    margin-top: 20px;
    .logo-img {
      width: 60px;
      margin-top: 15px;
    }
    .logo-text {
      margin-left: 20px;
      width: 170px;
      height: 58px;
    }
  }
</style>
