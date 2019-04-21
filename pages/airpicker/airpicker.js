// pages/airpicker/airpicker.js
var utils = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    op:'',//start代表选择起点，end代表选择终点
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
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('aipicker page op: '+options.op);
    this.setData({
      op:options.op
    })
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
  toSearch1: utils.throttle(function(event) {
    console.log(event.target.dataset);
    if(this.data.op==='start'){
      wx.redirectTo({
        url: '../search1/search1?cityFrom='+event.target.dataset.flightcode+'&cityFromCn='+event.target.dataset.airpname,
      })
    }
    else if(this.data.op==='end'){
      wx.redirectTo({
        url: '../search1/search1?cityTo='+event.target.dataset.flightcode+'&cityToCn='+event.target.dataset.airpname,
      })
    }
  },1000)
})