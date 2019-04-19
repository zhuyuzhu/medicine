<template>
  <div class="family-stock">
    <div v-for="(item, index) in classifyList" :key="index">
      <h3>{{item.header}}</h3>
      <div class="wrapper">
        <img :src="item.img1" alt>
        <img :src="item.img2" alt>
        <div class="first">
          <div v-for="(v, i) in item.mediList" :key="i">
            <p>{{v.title}}</p>
            <img :src="v.img" alt>
          </div>
        </div>
        <div class="last">
          <div v-for="(x,y) in item.medicinL" :key="y">
            <p>{{x.title}}</p>
            <img :src="x.img" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classifyList: [
        {
          header: "1L 家庭常备",
          img1: '../../images/homeimg/11.jpg',
          img2: '../../images/homeimg/12.jpg',
          // img1:
          //   "https://static.jianke.com/home/images/20180122/20180122110928_881.png",
          // img2:
          //   "https://static.jianke.com/home/images/20180321/20180321103924_555.png",
          mediList: [
            {
              title: "小麦纤维素颗粒(非比麸)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/201798174349389!300x300.jpg"
            },
            {
              title: "艾司奥美拉唑镁肠溶片(曾用名:埃索美拉唑镁肠溶片)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/2017915175237482!300x300.jpg"
            },
            {
              title: "丹参酮胶囊(希力)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/2017926115058375!300x300.jpg"
            },
            {
              title: "感冒灵颗粒(999)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201710/20171024165138276!300x300.jpg"
            }
          ],
          medicinL: [
            {
              title: "吸入用布地奈德混悬液(普米克令舒)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/201798175911584!300x300.jpg"
            },
            {
              title: "百令胶囊(百令)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/20179518235682!300x300.jpg"
            },
            {
              title: "布地奈德福莫特罗粉吸入剂(信必可都保)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/201794211020233!300x300.jpg"
            }
          ]
        },
        {
          header: "2F 专科用药",
          img1: '../../images/homeimg/21.jpg',
          img2: '../../images/homeimg/22.jpg',
          // img1:
          //   "https://static.jianke.com/home/images/20180122/20180122110928_881.png",
          // img2:
          //   "https://static.jianke.com/home/images/20180321/20180321103924_555.png",
          mediList: [
            {
              title: "卡泊三醇软膏(达力士)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/201791318251936!300x300.jpg"
            },
            {
              title: "非那雄胺片(保法止)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/2017920185214897!300x300.jpg"
            },
            {
              title: "恩替卡韦分散片(润众)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/2017926114742307!300x300.jpg"
            },
            {
              title: "拉莫三嗪片(利必通)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/201792611508206!300x300.jpg"
            }
          ],
          medicinL: [
            {
              title: "排毒养颜胶囊(盘龙云海)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201706/2017630143238523!300x300.jpg"
            },
            {
              title: "恩替卡韦分散片(雷易得)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/20179219411621!300x300.jpg"
            },
            {
              title: "盐酸普拉克索片(森福罗)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/201791117368636!300x300.jpg"
            }
          ]
        },
        {
          header: "3F 男性专区",
          img1: '../../images/homeimg/31.jpg',
          img2: '../../images/homeimg/32.jpg',
          // img1:
          //   "https://static.jianke.com/home/images/20180122/20180122110928_881.png",
          // img2:
          //   "https://static.jianke.com/home/images/20180321/20180321103924_555.png",
          mediList: [
            {
              title: "疏肝益阳胶囊(益佰)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201705/2017526111046828!300x300.jpg"
            },
            {
              title: "前列舒通胶囊(步长)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201702/20172610442973!300x300.jpg"
            },
            {
              title: "抢VIP礼包】回元堂 固本回元口服液 20ml*24瓶",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/2017918205052495!300x300.jpg"
            },
            {
              title: "赠维C】金水宝金水宝胶囊 72粒装",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201811/20181112114254691!300x300.jpg"
            }
          ],
          medicinL: [
            {
              title: "肾宝片(汇仁)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201710/2017101617544160!300x300.jpg"
            },
            {
              title: "引阳索胶囊(育林)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201710/20171011113310920!300x300.jpg"
            },
            {
              title: "龟龄集(远)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/201791217131253!300x300.jpg"
            }
          ]
        },
        {
          header: "4F 老年专区",
          img1: '../../images/homeimg/41.jpg',
          img2: '../../images/homeimg/42.jpg',
          // img1:
          //   "https://static.jianke.com/home/images/20180122/20180122110928_881.png",
          // img2:
          //   "https://static.jianke.com/home/images/20180321/20180321103924_555.png",
          mediList: [
            {
              title: "安宫牛黄丸(同仁堂)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201707/2017719155718669!300x300.jpg"
            },
            {
              title: "托伐普坦片(苏麦卡)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201711/201711385852859!300x300.jpg"
            },
            {
              title: "磷酸西格列汀片(捷诺维)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/2017912171126960!300x300.jpg"
            },
            {
              title: "达格列净片(安达唐)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/201791593739257!300x300.jpg"
            }
          ],
          medicinL: [
            {
              title: "双参龙胶囊(格拉丹东)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201711/2017119154229721!300x300.jpg"
            },
            {
              title: "维D钙咀嚼片(迪巧)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201709/20179518618396!300x300.jpg"
            },
            {
              title: "塞来昔布胶囊(西乐葆)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201710/2017102618227488!300x300.jpg"
            }
          ]
        },
        {
          header: "5F 营养滋补",
          img1: '../../images/homeimg/51.jpg',
          img2: '../../images/homeimg/52.jpg',
          // img1:
          //   "https://static.jianke.com/home/images/20180122/20180122110928_881.png",
          // img2:
          //   "https://static.jianke.com/home/images/20180321/20180321103924_555.png",
          mediList: [
            {
              title: "同仁堂牌破壁灵芝孢子粉胶囊 ",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201805/2018517173616430!300x300.jpg"
            },
            {
              title: "NC澳洲护肝片",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201807/201872615039564!300x300.jpg"
            },
            {
              title: "中智草晶华天麻破壁草本",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201604/201641312154554!300x300.jpg"
            },
            {
              title: "健安喜浓缩加强鱼油软胶囊(120粒)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201809/2018917163742113!300x300.jpg"
            }
          ],
          medicinL: [
            {
              title: "Swisse 葡萄籽精华片",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201808/201881171743821!300x300.jpg"
            },
            {
              title: "NC姜黄素胶囊(特强型)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201807/2018726143150632!300x300.jpg"
            },
            {
              title: "健力多R氨糖软骨素钙片",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201712/201712418319200!300x300.jpg"
            }
          ]
        },
        {
          header: "6F 医疗器械",
          img1: '../../images/homeimg/61.jpg',
          img2: '../../images/homeimg/62.jpg',
          // img1:
          //   "https://static.jianke.com/home/images/20180122/20180122110928_881.png",
          // img2:
          //   "https://static.jianke.com/home/images/20180321/20180321103924_555.png",
          mediList: [
            {
              title: "稳豪型血糖试纸50片",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201702/20172289502257!300x300.jpg"
            },
            {
              title: "鱼跃403C压缩空气式雾化器",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201703/2017321143346638!300x300.jpg"
            },
            {
              title: "欧姆龙电子血压计HEM-8102A(上臂式)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201702/20172817337121!300x300.jpg"
            },
            {
              title: "全日康J18B型电脑中频治疗仪（普通款）",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201803/20183216305995!300x300.jpg"
            }
          ],
          medicinL: [
            {
              title: "仙鹤-神灯(TDP特定电磁波治疗仪)(CQ-29P型) ",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201702/201722495923683!300x300.jpg"
            },
            {
              title: "诺斯清生理性海水鼻腔护理喷雾器",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201702/2017224104118134!300x300.jpg"
            },
            {
              title: "欧姆龙电子血压计HEM-7207语音播报(上臂式)",
              img:
                "http://img.jianke.com/suo/upload/prodimage/201702/20172716329449!300x300.jpg"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.family-stock {
  
  margin-left: 30px;
  height: 500px;
  h3 {
    margin: 20px 0px;
  }
  .wrapper {
    height: 450px;
    width: 1245px;
    border: 1px solid green;
    color: #333;
    img:nth-of-type(1) {
      width: 200px;
      height: 450px;
      cursor: pointer;
    }
    img:nth-of-type(2) {
      cursor: pointer;
      width: 340px;
      height: 430px;
      margin-left: 10px;
      margin-bottom: 10px;
    }
    div.first {
      display: inline-block;
      // vertical-align: 212px;
      width: 420px;
      height: 450px;
      background: #fff;
      margin-left: 10px;
      div {
        float: left;
        width: 200px;
        height: 210px;
        border: 1px dashed #999;
        text-align: center;
        margin: 4px;
        margin-top: 8px;
        cursor: pointer;
        p {
          font-size: 14px;
          height: 40px;

          margin-top: 10px;
        }
        p:hover {
          color: blue;
        }
        img {
          width: 160px;
          height: 160px;
        }
      }
    }
    div.last {
      display: inline-block;
      width: 250px;
      height: 450px;
      background: #fff;
      margin-left: 10px;
      div {
        cursor: pointer;
        float: left;
        width: 100%;
        margin-top: 6px;
        height: 140px;
        text-align: center;
        border: 1px dashed #999;

        p {
          // margin-top: 10px;
          font-size: 14px;
          line-height: 30px;

          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        p:hover {
          color: blue;
        }
        img {
          width: 110px;
          height: 110px;
          margin-left: 100px;
        }
      }
    }
  }
}
</style>
