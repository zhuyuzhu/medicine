<template>
  <div>
    <Navigation/>
    <h1>This is the page of GroupBuy</h1>
     <Navigator :show="false"  class="navigator" />
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
