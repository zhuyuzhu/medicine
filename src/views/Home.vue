<template>
  <div class="home">
    <Navigation />
    <div class="logo-search">
      <Logo/>
      <SearchInput class="search-input"/>
      <img src="../assets/zheng.jpg" class="img-zheng">
    </div>
    <Navigator :show="true" class="navigator"/>
    <SlideShow />
    <RightFixed />
  </div>
</template>

<script>
// @ is an alias to /src

import Navigation from "@/components/Navigation.vue";
import Navigator from "@/components/Navigator";
import SearchInput from "@/components/SearchInput";
import Logo from "@/components/Logo";
import SlideShow from '@/components/SlideShow';
import RightFixed from '@/components/RightFixed';

export default {
  // name: 'home',
  components: {
    SearchInput,
    Logo,
    Navigation,
    Navigator,
    SlideShow,
    RightFixed
  }
};
</script>

<style lang="scss">
.home {
  min-height: 1000px;
  .logo-search {
    // border: 1px solid black;
    position: relative;
    margin-left: 100px;
    .search-input {
      position: absolute;
      top: 25px;
      left: 310px;
    }
    .img-zheng {
      position: absolute;
      top: 20px;
      left: 950px;
      width: 200px;
      height: 60px;
    }
  }
}
</style>
