// pages/airpicker/airpicker.js
var utils = require('../../utils/util.js');
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    corpName:'',//联想选中后替换到输入框的值
    flightCode:'',//联想之后得到的机场名称对应的机场缩写
    bindSrc:[],//联想的列表
    curSel: 'in',
    flag:true,
    noInput:true,
    op:'start',//start代表选择起点，end代表选择终点
    domesticflights:{
      AHJ: '阿坝红原',
      YIE: '阿尔山伊尔施',
      AKU: '阿克苏温宿',
      AAT: '阿勒泰',
      NGQ: '阿里昆莎',
      AKA: '安康',
      AQG: '安庆天柱山',
      AOG: '鞍山腾鳌',
      AVA: '安顺黄果树',
      AYN: '安阳北郊',
      MFM: '澳门',
      AEB: '百色田阳',
      BSD: '保山云瑞',
      BAV: '包头二里半',
      RLK: '巴彦淖尔天吉泰',
      MFK: '北竿',
      BHY: '北海福成',
      NAY: '北京南苑',
      PEK: '北京首都',
      BFJ: '毕节飞雄',
      BPL: '博乐阿拉山口',
      NBS: '长白山',
      CGQ: '长春龙嘉',
      CGD: '常德桃花源',
      BPX: '昌都邦达',
      CSX: '长沙黄花',
      CIH: '长治王村',
      CZX: '常州奔牛',
      CHG: '朝阳',
      CTU: '成都双流',
      CIF: '赤峰玉龙',
      JUH: '池州九华山',
      CKG: '重庆江北',
      DLC: '大连周水子',
      DLU: '大理荒草坝',
      DDG: '丹东浪头',
      DCY: '稻城亚丁',
      DQA: '大庆萨尔图',
      DAT: '大同云冈',
      DAX: '达州河市',
      HXD: '德令哈',
      DIG: '迪庆香格里拉',
      DOY: '东营胜利',
      DNH: '敦煌',
      DSN: '鄂尔多斯伊金霍洛',
      EJN: '额济纳旗桃来',
      ENH: '恩施许家坪',
      ERL: '二连浩特赛乌素',
      FUO: '佛山沙堤',
      LCX: '福建龙岩冠豸山',
      FUG: '阜阳西关',
      FYJ: '抚远东极',
      FYN: '富蕴',
      FOC: '福州长乐',
      GXH: '甘南夏河',
      KOW: '赣州黄金',
      KHH: '高雄',
      GOQ: '格尔木',
      GYS: '广元盘龙',
      CAN: '广州白云',
      KWL: '桂林两江',
      KWE: '贵阳龙洞堡',
      GYU: '固原六盘山',
      HRB: '哈尔滨太平',
      HAK: '海口美兰',
      HLD: '海拉尔东山',
      HMI: '哈密',
      HDG: '邯郸',
      HGH: '杭州萧山',
      HZG: '汉中城固',
      HCJ: '河池金城江',
      HFE: '合肥新桥',
      HEK: '黑河',
      HCN: '恒春五里亭',
      HNY: '衡阳南岳',
      HTN: '和田',
      HSZ: 'Hsinchu',
      HIA: '淮安涟水',
      HJJ: '怀化芷江',
      HUN: '花莲',
      TXN: '黄山屯溪',
      HTT: '花土沟',
      HET: '呼和浩特白塔',
      HUZ: '惠州平潭',
      JGD: '加格达奇嘎仙',
      JMU: '佳木斯',
      CYI: '嘉义',
      JGN: '嘉峪关',
      SWA: '揭阳潮汕',
      JIL: '吉林二台子',
      TNA: '济南遥墙',
      JIC: '金昌金川',
      JDZ: '景德镇罗家',
      JGS: '井冈山',
      JNG: '济宁曲阜',
      JNZ: '锦州湾',
      JIU: '九江庐山',
      JZH: '九寨沟黄龙',
      JXA: '鸡西兴凯湖',
      KJH: '凯里黄平',
      KJI: '喀纳斯布尔津',
      KGT: '康定',
      KHG: '喀什',
      KRY: '克拉玛依',
      KCA: '库车龟兹',
      KRL: '库尔勒',
      KMG: '昆明长水',
      LHW: '兰州中川',
      LXA: '拉萨贡嘎',
      LYG: '连云港白塔埠',
      LLB: '荔波',
      LJG: '丽江三义',
      LNJ: '临沧博尚',
      LFQ: '临汾乔李',
      LXI: '林西',
      LYI: '临沂沭埠岭',
      LZY: '林芝米林',
      HZH: '黎平',
      LPF: '六盘水月照',
      LZH: '柳州白莲',
      LYA: '洛阳北郊',
      LZO: '泸州蓝田',
      LLV: '吕梁大武',
      MZG: '马公',
      LUM: '芒市',
      NZH: '满洲里西郊',
      MXZ: '梅县长岗岌',
      MIG: '绵阳南郊',
      OHE: '漠河古莲',
      MDG: '牡丹江海浪',
      NLT: '那拉提',
      KHN: '南昌昌北',
      NAO: '南充高坪',
      LZN: '南竿',
      NKG: '南京禄口',
      NNG: '南宁吴圩',
      YXG: '南沙永暑礁',
      NTG: '南通兴东',
      NNY: '南阳姜营',
      NGB: '宁波栎社',
      NLH: '宁蒗泸沽湖',
      PZI: '攀枝花保安营',
      PIF: '屏东',
      SYM: '普洱思茅',
      JIQ: '黔江武陵山',
      IQM: '且末',
      CMJ: '七美',
      TAO: '青岛流亭',
      IQN: '庆阳西峰',
      BPE: '秦皇岛北戴河',
      NDG: '齐齐哈尔三家子',
      JJN: '泉州晋江',
      JUZ: '衢州',
      RKZ: '日喀则和平',
      RIZ: '日照山字河',
      SQJ: '三明沙县',
      SYX: '三亚凤凰',
      SHA: '上海虹桥',
      PVG: '上海浦东',
      SQD: '上饶三清山',
      KNH: '尚义',
      HSC: '韶关',
      HPG: '神农架红坪',
      SHE: '沈阳桃仙',
      SZX: '深圳宝安',
      SHF: '石河子花园',
      SJW: '石家庄正定',
      WDS: '十堰武当山',
      TCG: '塔城',
      TSA: '台北松山',
      TPE: '台北桃园',
      TTT: '台东丰年',
      TNN: '台南',
      TYN: '太原武宿',
      TXG: '台中',
      RMQ: '台中清泉岗',
      HYN: '台州路桥',
      TVS: '唐山三女河',
      TCZ: '腾冲驼峰',
      TSN: '天津滨海',
      THQ: '天水麦积山',
      TNH: '通化',
      TGO: '通辽',
      TEN: '铜仁凤凰',
      TLQ: '吐鲁番交河',
      WXN: '万州五桥',
      WEF: '潍坊',
      WEH: '威海大水泊',
      WNH: '文山普者黑',
      WNZ: '温州龙湾',
      WUA: '乌海',
      WUH: '武汉天河',
      UCB: '乌兰察布集宁',
      HLH: '乌兰浩特依勒力特',
      URC: '乌鲁木齐地窝堡',
      WUX: '无锡硕放',
      WUS: '武夷山',
      WUZ: '梧州长洲岛',
      XMN: '厦门高崎',
      HKG: '香港赤鱲角',
      XFN: '襄阳刘集',
      XIY: '西安咸阳',
      XIC: '西昌青山',
      XIL: '锡林浩特',
      XNT: '邢台褡裢',
      ACX: '兴义万峰林',
      XNN: '西宁曹家堡',
      WUT: '忻州五台山',
      JHG: '西双版纳嘎洒',
      XUZ: '徐州观音',
      ENY: '延安二十里铺',
      YNZ: '盐城南洋',
      YTY: '扬州泰州',
      YNJ: '延吉朝阳川',
      YNT: '烟台蓬莱',
      YBP: '宜宾菜坝',
      YIH: '宜昌三峡',
      LDS: '伊春林都',
      YIC: '宜春明月山',
      INC: '银川河东',
      YKH: '营口兰旗',
      YIN: '伊宁',
      YIW: '义乌',
      LLF: '永州零陵',
      RHT: '右旗巴丹吉林',
      UYN: '榆林榆阳',
      YCU: '运城关公',
      YUS: '玉树巴塘',
      DYG: '张家界荷花',
      ZQZ: '张家口宁远',
      YZY: '张掖甘州',
      ZHA: '湛江',
      ZAT: '昭通',
      CGO: '郑州新郑',
      ZHY: '中卫沙坡头',
      HSN: '舟山普陀山',
      ZUH: '珠海金湾',
      ZYI: '遵义新舟',
      AXF: '左旗巴彦浩特'
    },
    foreignflights: {
      ABV: '阿布贾',
      AUH: '阿布扎比',
      ADL: '阿德莱德',
      EDI: '爱丁堡',
      ACC: '阿克拉科托卡',
      ALA: '阿拉木图',
      ESB: '安卡拉埃森博阿',
      AMM: '安曼阿莉娅王后',
      AKL: '奥克兰',
      MFM: '澳门',
      OSL: '奥斯陆',
      TSE: '阿斯塔纳',
      SXF: '柏林舍讷费尔德',
      TXL: '柏林泰格尔',
      BAQ: '巴兰基亚',
      ORY: '巴黎－奥利',
      CDG: '巴黎戴高乐',
      BLR: '班加罗尔',
      BCN: '巴塞罗那',
      BSB: '巴西利亚',
      BFS: '贝尔法斯特',
      BEG: '贝尔格莱德',
      BGO: '卑尔根',
      BEY: '贝鲁特',
      PEN: '槟城',
      FRU: '比什凯克马纳斯',
      BOD: '波尔多',
      BRN: '伯尔尼',
      OPO: '波尔图',
      BOG: '波哥大',
      BHX: '伯明翰',
      BOS: '波士顿',
      BUD: '布达佩斯',
      PRG: '布拉格',
      BNE: '布里斯班',
      BFN: '布隆方丹',
      BRU: '布鲁塞尔',
      EZE: '布宜诺斯艾利斯埃塞萨皮斯塔里尼部长',
      OKA: '冲绳那霸',
      KIX: '大阪关西',
      ITM: '大阪伊丹',
      DAC: '达卡齐亚',
      DAR: '达累斯萨拉姆尼雷尔',
      DMM: '达曼法赫德国王',
      DAM: '大马士革',
      DUR: '德班',
      IKA: '德黑兰伊玛目霍梅尼',
      DPS: '登巴萨巴厘岛',
      DXB: '迪拜',
      DTW: '底特律大都会',
      CFN: 'Donegal多尼戈尔',
      NRT: '东京成田',
      HND: '东京羽田',
      DUB: '都柏林',
      DOH: '多哈',
      YYZ: '多伦多皮尔逊',
      EBB: '恩德培',
      FRA: '法兰克福',
      FLR: '佛罗伦萨',
      FUK: '福冈',
      VVO: '符拉迪沃斯托克',
      WRO: '弗罗莰瓦夫',
      PUS: '釜山金海',
      KHH: '高雄',
      CPH: '哥本哈根',
      GOT: '哥德堡',
      KUA: '关丹',
      GUM: '关岛',
      KHV: '哈巴罗夫斯克伯力',
      HRE: '哈拉雷',
      HLZ: 'Hamilton哈密尔顿',
      HAM: '汉堡',
      HAV: '哈瓦那何塞马蒂',
      HEL: '赫尔辛基',
      AMS: '荷兰阿姆斯特丹斯史基浦(西霍普)',
      HAN: '河内内拜',
      WAW: '华沙萧邦',
      IAD: '华盛顿杜勒斯',
      WLG: '惠灵顿',
      SGN: '胡志明市新山一',
      IOM: 'Isle Of Man罗纳尔兹威',
      CWL: '加的夫',
      KTM: '加德满都',
      CCU: '加尔各答',
      CGP: '吉大港',
      IEV: '基辅',
      KUL: '吉隆坡',
      PNH: '金边',
      SFO: '旧金山',
      CJU: '济州岛济州',
      YYC: '卡尔加里CALGARY',
      CAI: '开罗',
      CPT: '开普敦开普顿',
      KHI: '卡拉奇',
      CLO: '卡利',
      CBR: '堪培拉',
      ORK: '科克',
      KRK: '克拉科夫',
      KJA: '克拉斯诺亚尔斯克',
      CGN: '科隆',
      CMB: '科伦坡班达拉奈克',
      LHE: '拉合尔',
      LCA: '拉纳卡',
      LGK: '兰卡威浮罗交怡',
      LAS: '拉斯维加斯麦卡伦',
      LYS: '里昂',
      LIM: '利马',
      LIS: '里斯本',
      LPL: '利物浦约翰列侬',
      RUH: '利雅得哈立德国王',
      GIG: '里约热内卢 加利昂',
      LGW: '伦敦盖特威克',
      LHR: '伦敦希思罗',
      LAD: '罗安达二月四日',
      FCO: '罗马菲乌米奇诺',
      LAX: '洛杉矶',
      RTM: '鹿特丹',
      MAD: '马德里',
      MED: '麦地那穆罕默德·本·阿卜杜勒-阿齐兹亲王',
      MLE: '马累',
      MAN: '曼彻斯特',
      MDL: '曼德勒',
      BKK: '曼谷(素万那普)',
      MNL: '马尼拉',
      MRU: '毛里求斯',
      MRS: '马赛普罗旺斯',
      MCT: '马斯喀特',
      BOM: '孟买',
      YUL: '蒙特利尔特鲁多',
      LIN: '米兰利纳特',
      MXP: '米兰马尔本萨',
      NGO: '名古屋中部/新特丽亚',
      MSQ: '明斯克',
      MEL: '墨尔本',
      DME: '莫斯科多莫杰多沃',
      VKO: '莫斯科伏努科沃',
      SVO: '莫斯科谢诺梅杰沃',
      MEX: '墨西哥城',
      MTY: '墨西哥蒙特雷',
      MUC: '慕尼黑',
      NAP: '那不勒斯',
      NAN: '南迪',
      NBO: '内罗毕乔莫·肯雅塔',
      NTL: '纽卡斯尔威廉斯敦',
      EWR: '纽瓦克',
      JFK: '纽约肯尼迪',
      LGA: '纽约拉瓜迪亚',
      FNJ: '平壤顺安',
      PER: '珀斯',
      HKT: '普吉岛普吉',
      CTS: '千岁',
      CNX: '清迈',
      AOJ: '青森',
      GVA: '日内瓦',
      SPN: '塞班',
      SKG: '塞萨洛尼基',
      SVQ: '塞维利亚',
      BKI: '沙巴',
      SHJ: '沙迦莎迦',
      GRU: '圣保罗',
      LED: '圣彼得堡',
      SCL: '圣地亚哥阿图罗奴贝尼特斯',
      GMP: '首尔金浦',
      ICN: '首尔仁川',
      ARN: '斯德哥尔摩',
      BWN: '斯里巴加湾文莱',
      ZRH: '苏黎世',
      USM: '苏梅岛',
      CEB: '宿雾',
      TSA: '台北松山',
      TPE: '台北桃园',
      TSV: '汤斯维尔',
      HNL: '檀香山',
      TAS: '塔什干',
      TLV: '特拉维夫',
      TKU: '图尔库',
      BDO: '万隆',
      VTE: '万象瓦岱',
      VCE: '威尼斯',
      YVR: '温哥华',
      YOW: '渥太华',
      ULN: '乌兰巴托',
      DAD: '岘港',
      HKG: '香港赤鱲角',
      REP: '暹粒吴哥',
      DEL: '新德里德里',
      SYD: '悉尼金斯福德·史密斯',
      SIN: '新加坡樟宜',
      OVB: '新西伯利亚',
      HOU: '休斯顿',
      IAH: '休斯敦',
      SEA: '西雅图塔科马',
      ADD: '亚的斯亚贝巴博乐',
      ATH: '雅典',
      CGK: '雅加达苏加诺-哈达',
      RGN: '仰光',
      SVX: '叶卡捷琳堡/科利佐沃',
      IKT: '伊尔库茨克',
      ISB: '伊斯兰堡贝娜齐尔·布托',
      IST: '伊斯坦布尔阿塔图尔克',
      ADB: '伊兹密尔',
      JNB: '约翰内斯堡',
      ORD: '芝加哥奥黑尔',
      SUB: '朱安达泗水'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('aipicker page op: '+options.op);
    if(options.op){
      this.setData({
        op:options.op
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  switchdomestic: function() {
    this.setData({
      curSel: 'in',
      flag:true
    })
  },
  switchforeign: function() {
    this.setData({
      curSel: 'out',
      flag:false
    })
  },
  toSearch1: utils.throttle(function(event) {
    console.log(event.target.dataset);
    if(this.data.op==='start'){
      app.data.cityFrom=event.target.dataset.flightcode;
      app.data.cityFromCn=event.target.dataset.airpname;
      wx.navigateBack({
        delta:1
      })
    }
    else if(this.data.op==='end'){
      app.data.cityTo=event.target.dataset.flightcode;
      app.data.cityToCn=event.target.dataset.airpname;
      wx.navigateBack({
        delta:1
      })
    }
  },1000),
  bindAirpname(e) {
    if(e.detail.value!=''){
      this.setData({
        noInput:false
      })
    }else{
      this.setData({
        noInput: true
      })
    }
    var prefix=e.detail.value;
    var newSrc=[];
    if(prefix!=""){
      for(var item in this.data.domesticflights){
        //this.data.domesticflights[item]为机场名
        if (this.data.domesticflights[item].indexOf(prefix)!=-1){
          newSrc.push(this.data.domesticflights[item])
        }
      }
      for (var item in this.data.foreignflights) {
        //this.data.domesticflights[item]为机场名
        if (this.data.foreignflights[item].indexOf(prefix) != -1) {
          newSrc.push(this.data.foreignflights[item])
        }
      }
    }
    if(newSrc.length!=0){
      this.setData({
        bindSrc:newSrc
      })
    }else {
      this.setData({
        bindSrc:[]
      })
    }
  },
  itemtap: function (e) {
    console.log(e.target.id);
    this.setData({
      corpName: e.target.id
    })
    for(var item in this.data.domesticflights){
      if(this.data.domesticflights[item]==this.data.corpName){
        this.setData({
          flightCode:item
        })
        break;
      }
    }
    for(var item in this.data.foreignflights){
      if(this.data.foreignflights[item]==this.data.corpName){
        this.setData({
          flightCode:item
        })
        break;
      }
    }
    console.log(this.data.flightCode);
    if (this.data.op === 'start') {
      app.data.cityFrom = this.data.flightCode;
      app.data.cityFromCn = this.data.corpName;
      wx.navigateBack({
        delta:1
      })
    }
    else if (this.data.op === 'end') {
      app.data.cityTo = this.data.flightCode;
      app.data.cityToCn = this.data.corpName;
      wx.navigateBack({
        delta:1
      })
    }
  }
})