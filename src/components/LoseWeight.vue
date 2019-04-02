<template>
  <div>
    <Navigation/>
    <h1>This is a LoseWeight page!</h1>
     <Navigator class="navigator" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Navigator from "@/components/Navigator";
export default {
  components: {
    Navigation,
    Navigator
  }
};
</script>
<style lang='scss' scoped>
</style>
