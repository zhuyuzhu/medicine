<template>
  <div>
    <Navigation/>
    <div class="logo-search">
      <Logo/>
      <SearchInput class="search-input"/>
      <img src="../assets/zheng.jpg" class="img-zheng">
    </div>
     <Navigator :show="false"  class="navigator" />
     
     <RightFixed />
 
     <Footer/>
  </div>

</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Navigator from "@/components/Navigator";
import RightFixed from '@/components/RightFixed';

import SearchInput from "@/components/SearchInput";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export default {
  components: {
    Navigation,
    Navigator,
    RightFixed,
    SearchInput,
    Logo,
    Footer
  }
}
</script>
<style lang='scss' scoped>

</style>
