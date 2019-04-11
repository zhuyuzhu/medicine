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
  data() {
    return {
      imgList: [
        {
          url: "#",
          img:
            "https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/4/2/1554188562789_4.jpg"
        },
        {
          url: "#",
          img:
            "https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/3/21/1553132342605_25.jpg"
        },
        {
          url: "#",
          img:
            "https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2018/8/27/1535354843654_21.jpg"
        },
        {
          url: "#",
          img:
            "https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/4/3/1554272754643_48.jpg"
        },
        {
          url: "#",
          img:
            "https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/3/21/1553149296581_55.jpg"
        }
      ]
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
