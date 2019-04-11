<template>
<div class="nav">
  <AllMedicine :show="show" class="medicine" />
  <ul>
    <router-link  tag="li" v-for="item in navLists" :key="item.id" 
      :to="item.path">{{item.title}}</router-link>
  </ul>
 
</div>

</template>

<script>
import AllMedicine from './AllMedicine';
export default {
  props: ['show'],
  components: {
    AllMedicine,
  },
  data () {
    return {
      navLists: [
        {
          id: '001',
          title: '首页',
          path: '/home',
        },
        {
          id: '002',
          title: '企业团购',
          path: '/group-buy',
        },{
          id: '003',
          title: '男性健康',
          path: '/men-health',
        },{
          id: '004',
          title: '减肥瘦身',
          path: '/lose-weight',
        },{
          id: '005',
          title: '医疗器材',
          path: '/medical-equipment',
        },{
          id: '006',
          title: '滋补保健',
          path: '/health-protective',
        },

      ]
    }
  },
}
</script>
<style lang='scss' scoped>
  .nav {
    position: relative;
    width: 100%;
    min-width: 1000px;
    line-height: 40px;
    height: 40px;
    background-color: #47B848;
    .medicine {
      position: absolute;
      top: 0px;
      left: 100px;
    }
    ul {
      position: absolute;
      top: 0px;
      left: 300px;
      margin-left: 80px;
      display: inline-block;
      li {
        display: inline-block;
        margin-left: 40px;
        cursor: pointer;
        color: #fff;
      }
      li:hover {
        color: blue;
      }
      
    }
  }

</style>

