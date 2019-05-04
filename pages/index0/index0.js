// pages/index0/index0.js
var utils = require('../../utils/util.js');
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  toQuery: utils.throttle(function(){
    wx.navigateTo({
      url: '../query/query',
    })
  },1000),

  toAttension: utils.throttle(function() {
    if (!app.data.isLoggedIn) {
      wx.showToast({
        title: '请您先登录',
        icon: 'loading',
        duration: 200
      })
    }
    else {
      wx.navigateTo({
        url: '../focus/focus',
      })
    }
  },1000)
})
