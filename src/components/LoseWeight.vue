<template>
  <div>
    <Navigation/>
    <div class="logo-search">
      <Logo/>
      <SearchInput class="search-input"/>
      <img src="../assets/zheng.jpg" class="img-zheng">
    </div>
     <Navigator class="navigator" />
     <RightFixed />
     <WeightContent/>
     <Footer/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Navigator from "@/components/Navigator";
import RightFixed from '@/components/RightFixed';
import SearchInput from "@/components/SearchInput";
import Logo from "@/components/Logo";
import WeightContent from '@/components/loseweight/WeightContent';
import Footer from "@/components/Footer";

export default {
  components: {
    Navigation,
    Navigator,
    RightFixed,
    SearchInput,
    Logo,
    WeightContent,
    Footer
  }
};
</script>
<style lang='scss' scoped>
</style>
