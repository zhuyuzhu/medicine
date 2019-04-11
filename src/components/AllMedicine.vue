<template>
  <div>
    <div class="classify" @mouseenter="mouseEnterClassity" @mouseleave="mouseLeaveClassity">全部产品分类</div>
    <div class="all-medicine" @mouseleave="mouseLeaveMed"  @mouseenter="mouseEnterLabName" v-show="myshow">
      <dl>
        <dd v-for="item in medLabList" :key="item.id" @mouseenter="mouseEnt(item)">
          <span>{{item.labName}}</span>
          <span>{{item.medicine}}</span>
          <span class="iconfont icon">&#xe600;</span>
        </dd>
      </dl>
      <div v-if="curDetail" class="detail">
        <template v-for="(item, index) in curDetail.children1">
          <h3 :key="index">{{item.title}}</h3>
          <span v-for="(v,i) in item.children" :key="v + '_' + i">{{v}}</span>
        </template>
        <template v-for="(item, index) in curDetail.children2">
          <h3 :key="index+1">{{item.title}}</h3>
          <span v-for="(v,i) in item.children" :key="v + '_' + i">{{v}}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {
      myshow: false,
      curDetail: null,
      medLabList: [
        {
          id: "001",
          labName: "心血管科",
          medicine: "高血压",
          children1: [
            {
              title: "心血管科",
              children: [
                "高血压",
                "高血脂",
                "冠心病",
                "心绞痛",
                "心律失常",
                "脉管炎",
                "动脉硬化",
                "中风调节",
                "三高血压计",
                "其他用药",
                "心肌病"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "替格瑞洛片(倍林达)",
                "缬沙坦氨氯地平片(Ⅰ)(倍博特)",
                "阿托伐他汀钙片(立普妥)",
                "益安宁丸(同溢堂)",
                "迈之灵片",
                "瑞舒伐他汀钙片(可定)",
                "贝前列素钠片(凯那)",
                "珊瑚七十味丸(神水藏药)"
              ]
            }
          ]
        },
        {
          id: "002",
          labName: "糖尿病科",
          medicine: "II型糖尿病",
          children1: [
            {
              title: "糖尿病科",
              children: [
                "Ⅱ型糖尿病",
                "西药Ⅱ型糖尿病",
                "中成药",
                "视网膜病变",
                "神经病变",
                "血糖仪/血糖试纸",
                "无痛测糖",
                "糖尿病营养"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "安达唐",
                "捷诺维",
                "捷诺达",
                "唯依能",
                "拜唐苹",
                "安立泽",
                "宜合瑞",
                "芪明颗粒",
                "止渴养阴胶囊",
                "雅培益力佳SR营养配方粉(香草口味)",
                "瑞代"
              ]
            }
          ]
        },
        {
          id: "003",
          labName: "风湿骨科",
          medicine: "痛风 风湿",
          children1: [
            {
              title: "风湿骨科",
              children: [
                "风湿",
                "关节病",
                "跌打损伤",
                "颈椎腰椎病",
                "痛风",
                "骨质疏松",
                "骨质增生",
                "股骨头坏死"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "舒筋健腰丸",
                "优立通",
                "曹清华",
                "葛洪桂龙药膏",
                "艾拉莫德片",
                "恒古骨伤愈合剂",
                "昆仙胶囊",
                "西乐葆",
                "奥泰灵",
                "安康信",
                "迪巧"
              ]
            }
          ]
        },
        {
          id: "004",
          labName: "肝胆科药",
          medicine: "肝癌用药",
          children1: [
            {
              title: "肝胆科药",
              children: ["肝炎用药", "肝硬化", "胆囊炎", "胆结石"]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "恩甘定",
                "贝双定",
                "代丁",
                "熊去氧胆酸胶囊(优思弗)",
                "双环醇片（百赛诺）",
                "还原型谷胱甘肽片（阿拓莫兰）",
                "片仔癀",
                "美能",
                "博路定",
                "维力青",
                "润众",
                "雷易得",
                "素比伏",
                "贺普丁"
              ]
            }
          ]
        },
        {
          id: "005",
          labName: "肿瘤科药",
          medicine: "肿瘤用药",
          children1: [
            {
              title: "肿瘤科药",
              children: [
                "肿瘤用药",
                "癌症止痛",
                "移植用药",
                "增强免疫",
                "免疫调节",
                "肿瘤营养"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "槐耳颗粒",
                "易瑞沙",
                "替吉奥胶囊(苏立)",
                "紫龙金片",
                "来曲唑片(芙瑞)",
                "甲氨蝶呤片",
                "食道平散",
                "比卡鲁胺片",
                "泰勒宁",
                "安素",
                "参红祛瘀散结胶囊",
                "复方红豆杉胶囊",
                "复方斑蝥胶囊",
                "西黄丸",
                "复方万年青胶囊",
                "环孢素软胶囊",
                "瑞能"
              ]
            }
          ]
        },
        {
          id: "006",
          labName: "皮肤科药",
          medicine: "湿疹过敏",
          children1: [
            {
              title: "皮肤科药",
              children: [
                "皮炎湿疹",
                "真菌感染",
                "疣类疱疹",
                "皮肤过敏",
                "痤疮白癜风",
                "痈疽疔疮冻疮烫伤",
                "淋病梅毒",
                "除疤蚊虫叮咬",
                "银屑病",
                "狐臭腋臭",
                "脱发白发",
                "灰指甲",
                "鱼鳞病",
                "皮肤光疗仪"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "适今可",
                "卡泊三醇软膏",
                "斯皮仁诺",
                "鬼臼毒素酊",
                "唐草片",
                "盐酸伐昔洛韦片",
                "非那雄胺片",
                "米诺地尔酊",
                "千白氢醌乳膏",
                "阿达帕林凝胶",
                "泰尔丝",
                "康瑞保",
                "氨甲环酸片",
                "他克莫司软膏",
                "地奈德乳膏",
                "枸地氯雷他定片",
                "皮肤病血毒丸",
                "硫酸羟氯喹片",
                "复方驱虫斑鸠菊丸",
                "维阿露"
              ]
            }
          ]
        },
        {
          id: "007",
          labName: "消化系统",
          medicine: "胃肠炎 便秘",
          children1: [
            {
              title: "消化系统",
              children: [
                "胃肠炎",
                "痔疮",
                "消化道溃疡",
                "便秘",
                "腹痛",
                "腹泻",
                "消化不良",
                "肠胃养护"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "惠迪",
                "丽珠",
                "耐信",
                "猴头菌",
                "得美通",
                "艾迪莎",
                "消脱止",
                "痔根断",
                "杜密克",
                "非比麸",
                "莎尔福",
                "能全力",
                "百普素"
              ]
            }
          ]
        },
        {
          id: "008",
          labName: "神经系统",
          medicine: "抑郁症 癫痫",
          children1: [
            {
              title: "神经系统",
              children: [
                "帕金森抑郁症",
                "癫痫精神分裂症",
                "戒烟失眠焦虑症",
                "甲亢甲减",
                "神经衰弱",
                "神经性疼痛",
                "多动症",
                "强迫症",
                "神经病",
                "神经损伤",
                "偏头痛类",
                "晕船晕车"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "奥氮平片",
                "森福罗",
                "开浦兰",
                "易倍申",
                "畅沛",
                "赛乐特",
                "德巴金",
                "曲莱",
                "美多芭",
                "黛力新",
                "息宁",
                "神泰",
                "奥拉西坦胶囊",
                "舒肝解郁胶囊",
                "欣百达",
                "乐瑞卡",
                "咪多吡",
                "安理申",
                "盐酸舍曲林",
                "百优解"
              ]
            }
          ]
        },
        {
          id: "009",
          labName: "呼吸系统",
          medicine: "气管炎 哮喘",
          children1: [
            {
              title: "呼吸系统",
              children: [
                "气管炎",
                "哮喘用药",
                "化痰止咳",
                "肺结核",
                "鼻腔护理",
                "雾化器",
                "肺炎",
                "呼吸道感染",
                "肺部疾病"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "沙美特罗替卡松粉吸入剂",
                "布地奈德福莫特罗粉吸入剂",
                "吸入用布地奈德混悬液",
                "噻托溴铵粉吸入剂",
                "顺尔宁",
                "百令胶囊",
                "畅迪",
                "噻托溴铵粉雾剂",
                "糠酸莫米松鼻喷雾剂",
                "布地奈德鼻喷雾剂",
                "阿斯美",
                "普米克都保",
                "黄花杜鹃油胶丸",
                "利福布汀胶囊",
                "切诺",
                "吸入用复方异丙托溴铵溶液",
                "补肺活血胶囊",
                "百蕊颗粒",
                "博利康尼",
                "虫草清肺胶囊"
              ]
            }
          ]
        },
        {
          id: "010",
          labName: "泌尿系统",
          medicine: "尿路感染",
          children1: [
            {
              title: "泌尿科药",
              children: [
                "尿路感染",
                "尿道结石",
                "肾炎",
                "肾病综合征",
                "尿毒症",
                "肾结石",
                "利尿通",
                "尿频尿急"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: ["开同", "弥凝", "友来特", "黄葵胶囊", "海昆肾喜胶囊"]
            }
          ]
        },
        {
          id: "011",
          labName: "女性用药",
          medicine: "补血益气",
          children1: [
            {
              title: "女性用药",
              children: [
                "益气补血",
                "保胎育胎",
                "更年期用药",
                "调经养颜",
                "妇科炎症",
                "避孕药",
                "卵巢疾病",
                "美体瘦身",
                "排卵验孕",
                "成人用品",
                "子宫肌瘤",
                "乳腺增生",
                "延缓衰老"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "屈螺酮炔雌醇片(优思明)",
                "坤泰胶囊 (新天)",
                "地屈孕酮片(达芙通)",
                "复合维生素片(爱乐维)",
                "戊酸雌二醇片(补佳乐)",
                "莉芙敏片",
                "维铁缓释片(褔乃得)",
                "雌二醇屈螺酮片(安今益)",
                "甲磺酸溴隐亭片(佰莫亭)",
                "东阿阿胶(简装)",
                "康妇消炎栓",
                "玛特纳",
                "复方多维元素片(23)",
                "叶酸片(斯利安)",
                "多糖铁复合物胶囊(红源达)",
                "保灵孕宝口服液",
                "调经促孕丸"
              ]
            }
          ]
        },
        {
          id: "012",
          labName: "儿科用药",
          medicine: "儿童咳嗽",
          children1: [
            {
              title: "儿科用药",
              children: [
                "感冒发热",
                "儿童肠胃",
                "儿童维矿",
                "儿童多动症",
                "儿童咳嗽",
                "儿童惊风",
                "蚊虫叮咬",
                "增强免疫",
                "退热贴",
                "维矿物质",
                "健脑益智"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "可乐定透皮贴片",
                "多动宁胶囊",
                "地牡宁神口服液",
                "择思达",
                "生命一号",
                "迪巧",
                "小儿氨酚黄那敏颗粒",
                "妈咪爱",
                "小儿智力糖浆",
                "五维赖氨酸颗粒",
                "遗尿停胶囊",
                "甘草锌颗粒",
                "小儿清肺化痰口服液",
                "赖氨酸磷酸氢钙颗粒",
                "菖麻熄风片",
                "杞枣口服液",
                "珠贝定喘丸",
                "小儿豉翘清热颗粒",
                "龙牡壮骨颗粒",
                "五维赖氨酸口服溶液"
              ]
            }
          ]
        },
        {
          id: "013",
          labName: "日常用药",
          medicine: "感冒发烧",
          children1: [
            {
              title: "日常用药",
              children: [
                "感冒",
                "发烧",
                "清热解毒",
                "抗菌消炎",
                "眼科用药",
                "口腔疾病",
                "维矿物质",
                "耳鼻喉用药",
                "晕船晕车"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "溴吡斯的明片",
                "可乐必妥",
                "伏立康唑片",
                "七叶洋地黄双苷滴眼液",
                "海露",
                "玫满",
                "卵磷脂络合碘片",
                "盐酸莫西沙星片",
                "盐酸米诺环素胶囊",
                "吡喹酮片",
                "蒲地蓝消炎口服液",
                "丹参酮胶囊",
                "磷霉素氨丁三醇散",
                "左氧氟沙星片",
                "和血明目片",
                "希舒美",
                "细菌溶解产物胶囊",
                "曲伏前列素滴眼液",
                "异山梨醇口服液",
                "999感冒灵颗粒"
              ]
            }
          ]
        },
        {
          id: "014",
          labName: "滋补保健",
          medicine: "健脑益智",
          children1: [
            {
              title: "滋补保健",
              children: [
                "缓解疲劳",
                "调节三高",
                "肝肾养护",
                "滋补调养",
                "肠胃养护",
                "维矿物质",
                "骨骼健康",
                "视力保护",
                "增强免疫",
                "减肥瘦身",
                "改善睡眠",
                "补血益气",
                "滋补药材",
                "健脑益智",
                "孕期营养",
                "美白祛斑",
                "清咽润喉",
                "排毒养颜",
                "参茸饮片",
                "破壁饮片",
                "延缓衰老"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "汤臣倍健蛋白粉",
                "葡萄糖酸钙锌口服溶液(锌钙特)",
                "脑白金(礼合装)",
                "健脑补肾丸",
                "养生堂牌天然维生素E软胶囊",
                "来益天然维生素E软胶囊",
                "维生素D滴剂",
                "金钙尔奇碳酸钙维D3元素片(4)",
                "汤臣倍健鱼油软胶囊",
                "破壁灵芝孢子粉胶囊(惠普生)",
                "荷氏可轻牌减肥胶囊",
                "清脑复神液（中方）",
                "芪冬养血胶囊",
                "枸杞子",
                "选粒(280粒)"
              ]
            }
          ]
        },
        {
          id: "015",
          labName: "医疗器械",
          medicine: "血压计 血糖仪",
          children1: [
            {
              title: "医疗器械",
              children: [
                "血压计",
                "血糖仪/试纸",
                "皮肤光疗仪",
                "鼻腔护理",
                "退热贴",
                "体温计",
                "棉签棉球",
                "护具",
                "冷热敷器具",
                "康复理疗",
                "伤口敷料",
                "制氧机雾化器",
                "检测试剂"
              ]
            }
          ],
          children2: [
            {
              title: "推荐产品",
              children: [
                "欧姆龙电子血压计",
                "雅培—辅理善瞬感扫描式葡萄糖监测系统",
                "鱼跃403C压缩空气式雾化器",
                "强生稳豪型血糖试纸",
                "三诺安准血糖试纸",
                "强生-稳豪倍优型血糖仪",
                "紫外线光疗仪SS-01型(希格玛)",
                "全日康J18B型电脑中频治疗仪(新款)"
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    mouseEnterClassity () {
      if(!this.show) {
        this.myshow = true;
      }
    },
    mouseLeaveClassity () {
      if(this.show){
        this.myshow = true;
        this.curDetail = null;
        return
      }
      this.myshow = false;
    },
    mouseEnterLabName () {
      this.myshow = true;
    },
    mouseEnt(item) {
      this.curDetail = item;
    },
    mouseLeaveMed() {
      if(this.show) {
        this.myshow = true;
        this.curDetail = null;
        return 
      }
      
      this.myshow = false;
    }
  },
  created () {
    if(this.show == true) {
      this.myshow = true;
    }
  }
};
</script>
<style lang='scss' scoped>
.classify {
  width: 200px;
  height: 40px;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.all-medicine {
  position: relative;
  height: 560px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  color: #fff;
  z-index: 100;
  dl {
    cursor: pointer;
    dd {
      height: 34px;
      line-height: 34px;
      span:nth-of-type(1) {
        margin-left: 20px;
        font-size: 14px;
      }
      span:nth-of-type(2) {
        margin-left: 14px;
        font-size: 12px;
        color: #aaa;
      }
      .icon {
        position: absolute;
        right: 8px;
      }
    }
    dd:hover {
      color: red;
      background-color: #fff;
    }
  }
  .detail {
    position: absolute;
    top: 0px;
    left: 200px;
    width: 400px;
    height: 560px;
    color: #000;
    background-color: #fff;
    padding: 0px 20px;
    h3 {
      cursor: pointer;
    }
    span {
      cursor: pointer;
      margin-right: 14px;
      color: #333;
    }
    span:hover {
      color: blue;
    }
  }
}
</style>
