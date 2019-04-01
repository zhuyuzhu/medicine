<template>
  <div class="home">
    <div class="logo-search">
      <Logo/>
      <SearchInput class="search-input" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import SearchInput from "@/components/SearchInput";
import Logo from "@/components/Logo";

export default {
  // name: 'home',
  components: {
    SearchInput,
    Logo
  }
};
</script>

<style lang="scss">
.home {
  position: relative;
  margin-left: 100px;
  .logo-search {
    // border: 1px solid black;
    .search-input {
      position: absolute;
      top: 25px;
      left: 310px;
    }
  }
}
</style>
