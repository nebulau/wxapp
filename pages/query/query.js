// pages/query/query.js
var utils = require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curSel:'bycode',
    date:'',
    firstdate:'',
    lastdate:'',
    cityFrom: '',
    cityTo: '',
    cityFromCn: '',
    cityToCn: '',
    flightCode:''
  },
  reverse: function() {
    var str1='';
    var str2='';
    str1=this.data.cityFrom;
    str2=this.data.cityFromCn;
    this.setData({
      cityFrom:this.data.cityTo,
      cityFromCn:this.data.cityToCn
    })
    app.data.cityFrom=this.data.cityTo;
    app.data.cityFromCn=this.data.cityToCn;
    this.setData({
      cityTo:str1,
      cityToCn:str2
    })
    app.data.cityTo=str1;
    app.data.cityToCn=str2;
  },
  switchToCode:function(){
    this.setData({
      curSel:'bycode'
    })
  },
  switchToCity:function(){
    this.setData({
      curSel:'bycity'
    })
  },
  bindKeyInput(e) {
    this.setData({
      flightCode: e.detail.value
    })
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      date: e.detail.value
    })
  },
  toFlightList: function () {
    if(this.data.curSel=='bycode'){
      var reg = new RegExp(/^[a-zA-Z0-9_-]{3,10}$/);
      if(!reg.test(this.data.flightCode)){
        wx.showModal({
          title: '航班号不正确',
          content: '请您重新输入',
          showCancel: false,
        })
        return;
      }
      wx.navigateTo({
        url: '../flightlist/flightlist?op=1&flightCode=' + this.data.flightCode + 
        '&cityFrom=' + '' + '&cityTo=' + '' + '&date=' + this.data.date,
      })
    }
    else if(this.data.curSel=='bycity'){
      wx.navigateTo({
        url: '../flightlist/flightlist?op=2&flightCode=' + '' + '&cityFrom=' + this.data.cityFrom + '&cityTo=' +
          this.data.cityTo + '&date=' + this.data.date,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var DATE=utils.formatDate(new Date());
    if(this.data.date.length==0){
      this.setData({
        date:DATE
      })
    }
    this.setData({
      flightCode:'CA1234',
      cityFrom: app.data.cityFrom,
      cityFromCn: app.data.cityFromCn,
      cityTo: app.data.cityTo,
      cityToCn: app.data.cityToCn,
      firstdate:utils.firstDate(new Date()),
      lastdate:utils.lastDate(new Date())
    });
    if (e.cityFrom) {
      app.data.cityFrom = e.cityFrom;
      app.data.cityFromCn = e.cityFromCn;
      this.setData({
        cityFrom: app.data.cityFrom,
        cityFromCn: app.data.cityFromCn
      })
    } else if (e.cityTo) {
      app.data.cityTo = e.cityTo;
      app.data.cityToCn = e.cityToCn;
      this.setData({
        cityTo: app.data.cityTo,
        cityToCn: app.data.cityToCn
      })
    }
    console.log(this.data.firstdate);
    console.log(this.data.lastdate);
  },
  toAirpicker: utils.throttle(function (event) {
    console.log('choose ' + event.target.dataset.op);
    wx.navigateTo({
      url: '../airpicker/airpicker?op=' + event.target.dataset.op,
    })
  }, 1000),
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
    if (this.data.date.length == 0) {
      this.setData({
        date: DATE
      })
    }
    this.setData({
      cityFrom: app.data.cityFrom,
      cityFromCn: app.data.cityFromCn,
      cityTo: app.data.cityTo,
      cityToCn: app.data.cityToCn
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

  }
})