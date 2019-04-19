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
    <div class="slide">
      <el-carousel height="330px" arrow="nerver">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.img" alt>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="scene">
      <h3>场景分析</h3>
      <div>
        <img src="../assets/qicai/1.jpg" alt>
        <img src="../assets/qicai/2.jpg" alt>
        <img src="../assets/qicai/3.jpg" alt>
        <img src="../assets/qicai/4.jpg" alt>
      </div>
    </div>

    <div class="prodect">
      <h3>精选产品</h3>
      <ul>
        <li v-for="(item, index) in prodectList" :key="index">
          <img :src="item.img" alt>
          <div>{{item.name}}</div>
        </li>
      </ul>
    </div>

    <Equipment :equipmentList="equipmentList"/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Navigator from "@/components/Navigator";
import RightFixed from "@/components/RightFixed";
import SearchInput from "@/components/SearchInput";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import Equipment from "@/components/equipment/Equipment";

export default {
  components: {
    Navigation,
    Navigator,
    RightFixed,
    SearchInput,
    Logo,
    Footer,
    Equipment
  },
  data() {
    return {
      imgList: [
        {
          url: "#",
          img: "http://www.vedeng.com/uploads/ad/2019-04-12/15550546039242.jpg"
        },
        {
          url: "#",
          img: "http://www.vedeng.com/uploads/ad/2019-04-11/15549627923632.jpg"
        },
        {
          url: "#",
          img: "http://www.vedeng.com/uploads/ad/2019-02-19/15505539473395.jpg"
        }
      ],
      prodectList: [
        {
          name: '培养箱',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-16.jpg'
        },{
          name: '麻醉机',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-07.jpg'
        },{
          name: '液氮罐',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-15.jpg'
        },{
          name: '医用冰箱',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-14.jpg'
        },{
          name: '尿液分析仪',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-06.jpg'
        },{
          name: '酶标仪',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-13.jpg'
        },{
          name: '生化分析仪',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-05.jpg'
        },{
          name: 'pcr仪',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-12.jpg'
        },{
          name: '监护仪',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-04.jpg'
        },{
          name: '离心机',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-11.jpg'
        },{
          name: '除颤仪',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-03.jpg'
        },{
          name: '超声',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-02.jpg'
        },{
          name: '移液器',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-10.jpg'
        },{
          name: '显微镜',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-02.jpg'
        },{
          name: '血球分析仪',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-09.jpg'
        },{
          name: '心电图机',
          img: 'http://www.vedeng.com/images/front-page/jingxuan/hotproduct-01.jpg'
        }
      ],
      equipmentList: [
        {
          title: '1F 临床试验',
          tips: ['血液细胞仪','电解质分析仪'],
          srcImg: 'http://www.vedeng.com/images/front-page/1f/1F-001.jpg',
          equipName: [
            {
              h: '血液分析设备',
              names: [' 血液细胞分析仪 ',' 糖化血红蛋白分析仪 ',' 血凝分析仪 ',' 电解质分析仪 ',' 血气分析仪 ']
            },
            {
              h: '检验通用设备',
              names: [' 离心机 ',' 移液器 ',' 医用冰箱 ',' 生物安全柜 ',' 生化水机 ']
            },
            {
              h: '生化免疫分析设备',
              names: [' 生化分析仪 ',' 免疫定量分析仪 ',' 尿液分析仪 ']
            }
          ],
          brand: [
            {
              name: '迈瑞',
              img: 'http://www.vedeng.com/images/front-page/1f/images/band1F-01.jpg'
            },
            {
              name: '基蛋',
              img: 'http://www.vedeng.com/images/front-page/1f/images/band1F-02.jpg'
            },
            {
              name: '普利生',
              img: 'http://www.vedeng.com/images/front-page/1f/images/band1F-03.jpg'
            },
            {
              name: '奥迪康',
              img: 'http://www.vedeng.com/images/front-page/1f/images/band1F-04.jpg'
            }
          ],
          equip: [
            {
              name: '迈瑞Mindray全自动三分群血液细胞分析仪BC-3000Plus (不含质控液和校准液)',
              src: 'http://www.vedeng.com/images/front-page/1f/1F-01.jpg'
            },{
              name: '普利生全自动血凝分析仪C2000-A',
              src: 'http://www.vedeng.com/images/front-page/1f/1F-02.jpg'
            },{
              name: '迈瑞Mindray全自动生化分析仪BS-220',
              src: 'http://www.vedeng.com/images/front-page/1f/1F-03.jpg'
            },{
              name: '迈瑞Mindray 尿液分析仪 UA-66',
              src: 'http://www.vedeng.com/images/front-page/1f/1F-04.jpg'
            },{
              name: '迈瑞 酶标仪 MR-96T',
              src: 'http://www.vedeng.com/images/front-page/1f/1F-05.jpg'
            },{
              name: '基蛋 特定蛋白分析仪FIA8000',
              src: 'http://www.vedeng.com/images/front-page/1f/1F-06.jpg'
            },{
              name: '白洋 台式低速离心机 BY-320C型',
              src: 'http://www.vedeng.com/images/front-page/1f/1F-07.jpg'
            },{
              name: '迈瑞Mindray全自动三分类血液细胞分析仪BC-2600(不含校准和质控液)',
              src: 'http://www.vedeng.com/images/front-page/1f/1F-08.jpg'
            }
          ]
        },{
          title: '2F 电子超声',
          tips: ['心电图机','心电图工作站','心电工作站','脑电测量仪'],
          srcImg: 'http://www.vedeng.com/images/front-page/2f/2F-001.jpg',
          equipName: [
            {
              h: '血液分析设备',
              names: [' 血液细胞分析仪 ',' 糖化血红蛋白分析仪 ',' 血凝分析仪 ',' 电解质分析仪 ',' 血气分析仪 ']
            },
            {
              h: '检验通用设备',
              names: ['  离心机  ','  移液器 ',' 生物安全柜 ',' 生化水机 ',' 血气分析仪 ']
            },
            {
              h: '血液分析设备',
              names: [' 血液细胞分析仪 ',' 糖化血红蛋白分析仪 ',' 血凝分析仪 ',' 电解质分析仪 ',' 血气分析仪 ']
            }
          ],
          brand: [
            {
              name: '迈瑞',
              img: 'http://www.vedeng.com/images/front-page/2f/images/band2F-01.jpg'
            },
            {
              name: '基蛋',
              img: 'http://www.vedeng.com/images/front-page/2f/images/band2F-02.jpg'
            },
            {
              name: '普利生',
              img: 'http://www.vedeng.com/images/front-page/2f/images/band2F-03.jpg'
            },
            {
              name: '奥迪康',
              img: 'http://www.vedeng.com/images/front-page/2f/images/band2F-04.jpg'
            }
          ],
          equip: [
            {
              name: '迈瑞Mindray全自动三分群血液细胞分析仪BC-3000Plus (不含质控液和校准液)',
              src: 'http://www.vedeng.com/images/front-page/2f/2F-01.jpg'
            },{
              name: '普利生全自动血凝分析仪C2000-A',
              src: 'http://www.vedeng.com/images/front-page/2f/2F-02.jpg'
            },{
              name: '迈瑞Mindray全自动生化分析仪BS-220',
              src: 'http://www.vedeng.com/images/front-page/2f/2F-03.jpg'
            },{
              name: '迈瑞Mindray 尿液分析仪 UA-66',
              src: 'http://www.vedeng.com/images/front-page/2f/2F-04.jpg'
            },{
              name: '迈瑞 酶标仪 MR-96T',
              src: 'http://www.vedeng.com/images/front-page/2f/2F-05.jpg'
            },{
              name: '基蛋 特定蛋白分析仪FIA8000',
              src: 'http://www.vedeng.com/images/front-page/2f/2F-06.jpg'
            },{
              name: '白洋 台式低速离心机 BY-320C型',
              src: 'http://www.vedeng.com/images/front-page/2f/2F-07.jpg'
            },{
              name: '迈瑞Mindray全自动三分类血液细胞分析仪BC-2600(不含校准和质控液)',
              src: 'http://www.vedeng.com/images/front-page/2f/2F-08.jpg'
            },
          ]
        },
        {
          title: '3F 试验仪器',
          tips: ['流式细胞仪','电泳仪',' 细胞计数仪','凝胶成像仪'],
          srcImg: 'http://www.vedeng.com/images/front-page/3f/3F-001.jpg',
          equipName: [
            {
              h: '血液分析设备',
              names: [' 血液细胞分析仪 ',' 糖化血红蛋白分析仪 ',' 血凝分析仪 ',' 电解质分析仪 ',' 血气分析仪 ']
            },
            {
              h: '检验通用设备',
              names: ['  离心机  ','  移液器 ',' 生物安全柜 ',' 生化水机 ',' 血气分析仪 ']
            },
            {
              h: '血液分析设备',
              names: [' 血液细胞分析仪 ',' 糖化血红蛋白分析仪 ',' 血凝分析仪 ',' 电解质分析仪 ',' 血气分析仪 ']
            }
          ],
          brand: [
            {
              name: '迈瑞',
              img: 'http://www.vedeng.com/images/front-page/3f/images/band3F-01.jpg'
            },
            {
              name: '基蛋',
              img: 'http://www.vedeng.com/images/front-page/3f/images/band3F-02.jpg'
            },
            {
              name: '普利生',
              img: 'http://www.vedeng.com/images/front-page/3f/images/band3F-03.jpg'
            },
            {
              name: '奥迪康',
              img: 'http://www.vedeng.com/images/front-page/3f/images/band3F-04.jpg'
            }
          ],
          equip: [
            {
              name: '迈瑞Mindray全自动三分群血液细胞分析仪BC-3000Plus (不含质控液和校准液)',
              src: 'http://www.vedeng.com/images/front-page/3f/3F-01.jpg'
            },{
              name: '普利生全自动血凝分析仪C2000-A',
              src: 'http://www.vedeng.com/images/front-page/3f/3F-02.jpg'
            },{
              name: '迈瑞Mindray全自动生化分析仪BS-220',
              src: 'http://www.vedeng.com/images/front-page/3f/3F-03.jpg'
            },{
              name: '迈瑞Mindray 尿液分析仪 UA-66',
              src: 'http://www.vedeng.com/images/front-page/3f/3F-04.jpg'
            },{
              name: '迈瑞 酶标仪 MR-96T',
              src: 'http://www.vedeng.com/images/front-page/3f/3F-05.jpg'
            },{
              name: '基蛋 特定蛋白分析仪FIA8000',
              src: 'http://www.vedeng.com/images/front-page/3f/3F-06.jpg'
            },{
              name: '白洋 台式低速离心机 BY-320C型',
              src: 'http://www.vedeng.com/images/front-page/3f/3F-07.jpg'
            },{
              name: '迈瑞Mindray全自动三分类血液细胞分析仪BC-2600(不含校准和质控液)',
              src: 'http://www.vedeng.com/images/front-page/3f/3F-08.jpg'
            },
          ]
        },
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.slide {
  width: 100%;
  height: 350px;
  background: #aaa;
  margin: 0px auto;
  div.el-carousel {
    width: 100%;
    img {
      width: 100%;
      min-width: 1250px;
    }
  }
}
.scene {
  width: 100%;
  min-width: 720px;
  h3 {
    margin: 20px;
    margin-left: 40px;
  }
  div {
    // border: 1px solid black;
    img {
      margin-left: 40px;
    }
  }
}
.prodect {
  width: 100%;
  min-width: 1250px;
  height: 400px;
  padding-top: 30px;
  background: #f3f3f3;
  h3 {
    margin-left: 40px;
    margin-bottom: 20px;
  }
  ul {
    width: 100%;
    padding-left: 30px;
    li {
      float: left;
      border: 2px solid #aaa;
      cursor: pointer;
      width: 140px;
      height: 155px;
      margin-left: 10px;
      margin-top: 10px;
      div {
        text-align: center;
        background: #aaa;
      }
    }
    li:hover {
      border: 2px solid blue;
      div {
        background: blue;
        color: #fff;
      }
    }
  }
}
</style>
