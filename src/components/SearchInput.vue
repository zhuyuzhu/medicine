<template>
  <div class="wrapper">
    <div>
      <span class="iconposition iconfont">&#xe61b;</span>
      <input
        type="text"
        ref="searchInput"
        v-model.trim="searchValue"
        placeholder="请输入商品名称、品牌"
        @blur="blurHideList"
      >
      <span class="searchBox" @click="searchMedicine">搜&nbsp;&nbsp;索</span>
    </div>
    <div class="searchList" v-show="showList">
      <ul>
        <router-link tag="li" to="/about" v-for="item in searchResult" :key="item.id">{{item.name}}</router-link>
      </ul>
    </div>
    <div class="trending-search">
      <router-link
        to="/about"
        v-for="item in trendingSearchData"
        :key="item.id"
        class="trending-list"
      >{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { clearTimeout, setTimeout } from "timers";

export default {
  data() {
    return {
      searchValue: "", //用户输入的值
      allMedicine: [], //所有的药品
      searchResult: [], //根据用户输入值而加载的数据
      timer1: null, //定时器
      timer2: null,
      showList: false,
      trendingSearchData: [] //热搜药品
    };
  },
  methods: {
    searchMedicine() {
      console.log(this.searchResult);
    },
    blurHideList() {
      //input框离焦的时候执行
      clearTimeout(this.timer2);
      this.timer2 = setTimeout(() => {
        this.showList = false;
      }, 100);
    }
  },
  watch: {
    searchValue() {
      //监听用户输入的值
      if (this.timer1) {
        //取消定时器
        clearTimeout(this.timer1);
      }
      if (!this.searchValue) {
        this.searchResult = [];
        return;
      }
      this.timer1 = setTimeout(() => {
        //用户输入值进行检索
        const result = [];
        this.allMedicine.forEach(value => {
          if (
            value.spell.indexOf(this.searchValue) > -1 ||
            value.name.indexOf(this.searchValue) > -1
          ) {
            result.push(value);
          }
        });
        this.searchResult = result;
      }, 200);
    },
    searchResult() {
      //如果searchResult是空数组，即length是0，就改变showList为false，且不让函数向下执行
      if(this.searchResult.length == 0) {
        this.showList = false;
        return
      }
      //监听searchResult，当值发生变化的时候，让列表展示出来
      this.showList = true;
    }
  },
  created() {
    var self = this;
    axios.get("/api/search").then(ref => {
      console.log(ref);
      const medicineData = ref.data.data.medicine;
      const trendingSearch = ref.data.data.trendingSearch;
      self.allMedicine = medicineData;
      //下面对热搜的数据进行乱序，然后，取5组值
      trendingSearch.sort(() => {
        return 1 - 2 * Math.random();
      });
      self.trendingSearchData = trendingSearch.slice(0, 5);
      // console.log(self.trendingSearchData);
    });
  }
};
</script>
<style lang='scss' scoped>
.wrapper {
  position: relative;
  width: 500px;
  height: 40px;
  border: 2px solid #47b848;
  .iconposition {
    position: absolute;
    top: 5px;
    left: 10px;
    font-size: 20px;
  }
  input {
    width: 370px;
    padding: 10px;
    padding-left: 35px;
    border-color: transparent;
    outline: none; //取消input框的边框效果
  }
  .searchBox {
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    line-height: 42px;
    cursor: pointer;
    text-align: center;
    background-color: #47b848;
    color: #fff;
  }
  .searchList {
    position: absolute;
    top: 42px;
    left: -2px;
    width: 421px;
    // height: 100px;
    border: 1px solid #666;
    border-top-color: transparent;
    z-index: 9999;
    cursor: pointer;
    margin-bottom: 5px;
    background-color: #fff;
    ul li {
      padding-left: 5px;
      font-size: 14px;
    }
    ul li:hover {
      background-color: #47b848;
      color: #fff;
      opacity: 0.7;
    }
  }
  .trending-search {
    // border: 1px solid black;
    width: 420px;
    height: 25px;
    font-size: 12px;
    
    .trending-list {
      margin-left: 15px;
      line-height: 30px;
      color: #333;
    }
    .trending-list:hover {
      color: rgb(0, 98, 255);
    }
  }
}
</style>
