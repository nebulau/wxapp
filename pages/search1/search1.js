// pages/search1/search1.js
var utils = require('../../utils/util.js');
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityFrom: 'NAY',
    cityTo: 'SHA',
    cityFromCn:'北京南苑',
    cityToCn:'上海虹桥',
    date: '2019-04-01'
  },
  bindFromInput(e) {
    this.setData({
      cityFrom: e.detail.value
    })
  },
  bindToInput(e) {
    this.setData({
      cityTo: e.detail.value
    })
  },
  bindReplaceInput(e) {
    const value = e.detail.value
    let pos = e.detail.cursor
    if (pos != -1) {
      // 光标在中间
      const left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },

  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      date: e.detail.value
    });
  },
  toSearch: function() {
    wx.redirectTo({
      url: '../search/search',
    })
  },
  toFlightList: function() {
    if((this.data.cityFrom=='')||(this.data.cityTo=='')){
      console.log('np input');
      return;
    }
    wx.navigateTo({
      url: '../flightlist/flightlist?op=2&flightCode=' +'' + '&cityFrom=' + this.data.cityFrom + '&cityTo=' +
      this.data.cityTo + '&date=' + this.data.date,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log('---search-by-city---');
    var DATE = utils.formatDate(new Date());
    this.setData({
      cityFrom: app.data.cityFrom,
      cityFromCn: app.data.cityFromCn,
      cityTo: app.data.cityTo,
      cityToCn: app.data.cityToCn,
      date: DATE,
    });
    if(e.cityFrom){
      app.data.cityFrom=e.cityFrom;
      app.data.cityFromCn=e.cityFromCn;
      this.setData({
        cityFrom:app.data.cityFrom,
        cityFromCn:app.data.cityFromCn
      })
    }else if(e.cityTo){
      app.data.cityTo=e.cityTo;
      app.data.cityToCn=e.cityToCn;
      this.setData({
        cityTo:app.data.cityTo,
        cityToCn:app.data.cityToCn
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
  onShow: function (e) {
    var DATE = utils.formatDate(new Date());
    this.setData({
      cityFrom: app.data.cityFrom,
      cityFromCn: app.data.cityFromCn,
      cityTo: app.data.cityTo,
      cityToCn: app.data.cityToCn,
      date: DATE,
    });
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
  toAirpicker: utils.throttle(function(event) {
    console.log('choose '+event.target.dataset.op);
    wx.navigateTo({
      url: '../airpicker/airpicker?op='+event.target.dataset.op,
    })
  },1000)
})