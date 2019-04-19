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
     <GroupContent/>
     <Footer/>
  </div>

</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Navigator from "@/components/Navigator";
import RightFixed from '@/components/RightFixed';
import GroupContent from '@/components/groupbuy/GroupContent';
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
    GroupContent,
    Footer
  }
}
</script>
<style lang='scss' scoped>

</style>
