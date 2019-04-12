<template>
  <div>
    <Navigation/>
    <h1>This is a HealthProtective page</h1>
     <Navigator class="navigator" />
     <RightFixed />
  </div>

</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Navigator from "@/components/Navigator";
import RightFixed from '@/components/RightFixed';

export default {
  components: {
    Navigation,
    Navigator,
    RightFixed
  }
}
</script>
<style lang='scss' scoped>

</style>
