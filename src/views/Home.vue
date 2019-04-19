<template>
  <div class="home">
    <Navigation/>

    <div class="logo-search">
      <Logo/>
      <SearchInput class="search-input"/>
      <img src="../assets/zheng.jpg" class="img-zheng">
    </div>
    <Navigator :show="true" class="navigator"/>
    <SlideShow :imgList="imgList" />
    <RightFixed/>
    <HotSale/>
    <FamilyStock/>

    <Footer class="foot"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Navigation from "@/components/Navigation.vue";
import Navigator from "@/components/Navigator";
import SearchInput from "@/components/SearchInput";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import SlideShow from "@/components/SlideShow";
import RightFixed from "@/components/RightFixed";
import HotSale from "@/components/home/HotSale";
import FamilyStock from "@/components/home/FamilyStock";

export default {
  // name: 'home',
  components: {
    SearchInput,
    Logo,
    Navigation,
    Navigator,
    SlideShow,
    RightFixed,
    HotSale,
    FamilyStock,
    Footer
  },
  data () {
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
    }
  }
};
</script>

<style lang="scss">
.home {
  min-height: 1000px;
  .foot{
    margin-top: 2600px;
  }
}
</style>
