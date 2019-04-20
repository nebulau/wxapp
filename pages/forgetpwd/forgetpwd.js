// pages/forgetpwd/forgetpwd.js
var utils = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:''
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
  bindUser: function(e) {
    this.setData({
      username: e.detail.value
    });
  },
  findPwd: utils.throttle(function() {
    console.log(this.data.username);
    wx.request({
      url: 'http://114.115.134.119:5000/beta/modifyPasswordEmail',
      data: {
        username: this.data.username,
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res){
        console.log(res.data);
        wx.showModal({
          title: '已发送邮件',
          content: '请您前往邮箱点击链接找回密码',
        })
        wx.switchTab({
          url: '../user/user',
        })
      }
    })
  },1000)
})