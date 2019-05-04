// pages/list/list.js
var app=getApp();
var utils = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    op: 0,
    flightCode: '',
    cityFrom: '',
    cityTo: '',
    date: '',
    focuslist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    this.setData({
      op: options.op,
      flightCode: options.flightCode,
      cityFrom: options.cityFrom,
      cityTo: options.cityTo,
      date: options.date,
      focuslist:app.data.focuslist
    });
    wx.showLoading({
      title: 'Loading...',
    });
    setTimeout(function () {
      wx.hideLoading()
    }, 1000);
    
    wx.request({
      url: 'http://114.115.134.119:5000/beta/byFlightNumber',
      data: {
        op: parseInt(this.data.op),
        flightCode: this.data.flightCode,
        cityFrom: this.data.cityFrom,
        cityTo: this.data.cityTo,
        date: this.data.date.replace(/-/g, '')
      },
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.length!=0) {
          _this.setData({
            list: res.data
          });
        }
        else if(res.data.length==0){
          wx.redirectTo({
            url: '../notfound/notfound',
          })
        }
      },
      fail:function() {
        console.log('fail!');
      }
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
  toDetail: utils.throttle(function(event) {
    var index = event.target.dataset.index;
    app.data.flight_detailed_info_url=this.data.list[index].flight_detailed_info_url;
    wx.navigateTo({
      url: '../detail/detail',
    })
  },1000),
  setFocus: function(e) {
    if (!app.data.isLoggedIn) {
      wx.showToast({
        title: '请您先登录',
        icon: 'loading',
        duration: 200
      })
    }
    else {
      wx.request({
        url: 'http://114.115.134.119:5000/beta/focus',
        data: {
          username:app.data.username,
          token:app.data.token,
          flightCode:e.target.dataset.flight,
          date: this.data.date.replace(/-/g, '')
        },
        method: "POST",
        header: {
          'content-type': 'application/json'
        },
        success(res){
          if(res.data.status=='success!'){
            wx.showModal({
              title: '关注成功',
              content: '已添加至您的关注列表',
              showCancel: false,
            })
          }else {
            wx.showModal({
              title: '关注失败',
              content: '您可能已关注此航班',
              showCancel: false,
            })
          }
        }
      })
    }
  }
})