<template>
  <div class="slide">
    <el-carousel :interval="2000" height="560px" arrow="always">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.img" alt>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: ['imgList'],
  data() {
    return {
      
    };
  }
};
</script>
<style lang='scss' scoped>
.slide {
  position: relative;
  z-index: 99;
  height: 560px;
  img {
    height: 560px !important;
    width: 100%;
    min-width: 1125px;
  }
  
}

</style>
