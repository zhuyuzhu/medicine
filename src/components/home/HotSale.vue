<template>
  <div class="hot-sale">
    <h3>热卖专场</h3>
    <div class="wrapper">
      <div class="content" v-for="(item, index) in mediList" :key="index">
        <img :src="item.img" alt="">
        <div class="cont">
          <div class="medi" v-for="(v, i) in item.children" :key="i">
            <img :src="v.img" alt="">
            <div>
              <h4>{{v.title}}</h4>
              <span>{{v.content}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mediList: [
        {
          img: '../../images/homeimg/hotsale1.jpg',
          // img: 'https://static.jianke.com/home/images/20190327/20190327143428_822.jpg',
          children: [
            {
              title: '立普妥',
              content: '有效降低血液中固醇含量啊啊啊啊啊',
              img: 'https://static.jianke.com/home/images/20180307/20180307154420_769.jpg'
            },
            {
              title: '杰诺维',
              content: '突破性降血糖-DPP-4抑制',
              img: 'https://static.jianke.com/home/images/20161229/20161229100805_470.jpg'
            },
            {
              title: '韦瑞德',
              content: '抗病毒一线好药',
              img: 'https://static.jianke.com/home/images/20190108/20190108191949_607.jpg'
            }
          ]
        },
         {
          img: '../../images/homeimg/hotsale2.jpg',
          // img: 'https://static.jianke.com/home/images/20190327/20190327143428_822.jpg',
          children: [
            {
              title: '泰毕全',
              content: '预防成人非瓣性房颤患者的卒中',
              img: 'https://static.jianke.com/home/images/20171008/20171008100859_755.jpg'
            },
            {
              title: '短肽型肠内营养剂',
              content: '适用于胃肠道功能有损失',
              img: 'https://static.jianke.com/home/images/20170429/20170429101055_329.jpg'
            },
            {
              title: '卡泊三醇搽剂(达力士)',
              content: '用于头部',
              img: 'https://static.jianke.com/home/images/20161229/20161229101055_622.jpg'
            }
          ]
        },
         {
          img: '../../images/homeimg/hotsale3.jpg',
          // img: 'https://static.jianke.com/home/images/20190327/20190327143428_822.jpg',
          children: [
            {
              title: '肠内营养粉剂(TP)',
              content: '提供全营养支持',
              img: 'https://static.jianke.com/home/images/20180307/20180307154456_727.jpg'
            },
            {
              title: '汇仁肾宝',
              content: '为养家男人撑腰',
              img: 'https://static.jianke.com/home/images/20190328/20190328091348_915.jpg'
            },
            {
              title: '森福罗',
              content: '帕金森病一线治疗用药',
              img: 'https://static.jianke.com/home/images/20161229/20161229101345_671.jpg'
            }
          ]
        },
         {
          img: '../../images/homeimg/hotsale4.jpg',
          // img: 'https://static.jianke.com/home/images/20190327/20190327143428_822.jpg',
          children: [
            {
              title: '思力华',
              content: '强效控制慢阻肺',
              img: 'https://static.jianke.com/home/images/20161229/20161229095048_747.jpg'
            },
            {
              title: '气血和胶囊',
              content: '活血止痛',
              img: 'https://static.jianke.com/home/images/20170814/20170814154527_821.jpg'
            },
            {
              title: '欧姆龙电子血压计',
              content: '欧姆龙电子血压计',
              img: 'https://static.jianke.com/home/images/20161120/20161120155955_444.jpg'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
  .hot-sale {
    padding:  30px 30px 0px 30px;
    h3 {
      margin-bottom: 20px;
      color: #333;
      margin-left: 20px;
    }
    .wrapper {
     
      width: 1250px;
      height: 700px;
      
      .content {
        display: inline-block;
        margin-left: 12px;
        width: 300px;
        height: 650px;
        
        img {
          width: 294px;
          cursor: pointer;
        }
        .cont {
          background-color: #f3f3f3;
          width: 294px;
          height: 320px;
          .medi {
            display: flex;
            justify-content: flex-start;
            padding-top: 18px;
            margin-left: 10px;
            cursor: pointer;
            color: #666;
            img{
              width: 80px;
              height: 80px;
              margin-right: 20px;
            }
            div {
              span {
                font-size: 12px;
              }
              
            }
            div:hover {
              color: blue;
            }
          }
        }
      }
    }
  }
</style>
