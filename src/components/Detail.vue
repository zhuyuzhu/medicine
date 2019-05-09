<template>
  <div>
    <Navigation/>
    <div class="logo-search">
      <Logo/>
      <SearchInput class="search-input"/>
      <img src="../assets/zheng.jpg" class="img-zheng">
    </div>
    <Navigator class="navigator"/>
    <RightFixed/>
    <div class="detail">
      <div class="detail-cont">
        <div class="detail-cont-left">
          <img
            :src="medicine.meImage"
            alt
          >
          <div class="tip">
            温馨提示：图片均是对原图的真是拍摄，仅供参考，
            如遇新包装上市可能存在更新滞后，请以实物为准！
          </div>
        </div>
        <div class="detail-cont-right">
          <h3>{{medicine.meHead}}</h3>
          <p class="discript">
            {{medicine.meName}}
          </p>
          <div class="detail-disc">
            <p>
              通用名称：
              <span>{{medicine.meTitle}}</span>
            </p>
            <p>
              产品编号：
              <span>{{medicine.meNumber}}</span>
            </p>
            <p>
              批准文号：
              <span>国药准字Z44022533</span>
            </p>
            <p>
              原&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：
              <span style="color: blue;">
                <del>￥{{medicine.meOriginalPrice}}</del>
              </span>
            </p>
            <p>
              现&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：
              <span style="color: red;">￥{{medicine.meCurrentPrice}}</span>
            </p>
            <p>
              用药须知：
              <span>{{medicine.meNotice}}</span>
            </p>
            <p>
              产品规格：
              <span>{{medicine.meSpecification}}</span>
            </p>
            <p>
              描&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;述：
              <span>{{medicine.medescribe}}</span>
            </p>
            <p>
              功&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能：
              <span>{{medicine.meEfficacy}}</span>
            </p>
            <p>
              生产厂家：
              <span>{{medicine.meManufacturers}}</span>
            </p>
            <p>
              购买数量：
              <span>1</span>
            </p>
          </div>
          <div class="btn">
            <span>立即购买</span>
            <span>
              <em class="iconfont">&#xe61a;</em> 加入购物车
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import axios from "axios";

import Navigation from "@/components/Navigation.vue";
import Navigator from "@/components/Navigator";
import RightFixed from "@/components/RightFixed";

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
  },
  data() {
    return {
      medicine: {}
    };
  },
  created() {
    var that = this;
    console.log(that.$route.params.id);
    var id = that.$route.params.id;
    axios.post("detail.php",{
      medicineId: id
    }).then(ref => {
      console.log(ref.data.data[0]);
      that.medicine = ref.data.data[0];
       
    });
  }
};
</script>
<style lang='scss' scoped>
.detail {
  width: 100%;
  height: 600px;
  background-color: #f3f3f3;
  border: 1px solid transparent;
  .detail-cont {
    width: 1000px;
    height: 500px;
    background-color: #fff;
    margin: 50px auto;
    padding: 20px 10px;
    .detail-cont-left {
      float: left;
      border: 1px solid #ccc;
      width: 300px;
      height: 450px;
      img {
        margin: 64px 20px;
        width: 250px;
        height: 250px;
        // border: 1px solid black;
      }
      .tip {
        font-size: 14px;
        color: red;
        border-top: 1px solid #ccc;
        padding: 5px;
      }
    }
    .detail-cont-right {
      float: left;

      width: 600px;
      height: 500px;
      // border: 1px solid black;
      margin: 0px 30px;
      vertical-align: text-top;
      .discript {
        font-size: 12px;
        color: #333;
        line-height: 22px;
        padding-bottom: 10px;
        border-bottom: 1px dotted #aaa;
      }
      .detail-disc {
        p {
          font-size: 12px;
          color: #888;
          margin: 10px 0;
          span {
            color: #000;
            font-size: 14px;
          }
        }
      }
      .btn {
        width: 400px;
        height: 80px;
        margin-left: -20px;
        margin-top: -10px;
        span {
          display: inline-block;
          width: 120px;
          height: 40px;
          // border: 1px solid black;
          margin: 30px 20px;
          text-align: center;
          line-height: 40px;
          border-radius: 5px;
          background-color: #e23c3e;
          color: #fff;
        }
        span:last-of-type {
          background-color: #1273d1;
        }
        span:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
