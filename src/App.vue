<template>
  <div id="app">
    <Navigation/>  
    <router-view/>
    <Navigator class="navigator" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Navigator from "@/components/Navigator";

export default {
  // name: "home",
  components: {
    Navigation,
    Navigator
  }
};
</script>

<style lang="scss">
  #app {
    
    .navigator {
      margin-top: 40px;
    }
  }
  
</style>
