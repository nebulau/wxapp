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
    if(!utils.validateNamePwd(this.data.username)){
      wx.showModal({
        title: '账号格式不正确',
        content: '请您检查账号并重新输入',
        showCancel: false,
      })
      return;
    }
    wx.request({
      url: 'http://39.107.74.159:5000/beta/modifyPasswordEmail',
      data: {
        username: this.data.username,
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res){
        console.log(res.data);
        if(res.data.status=='success!'){
          wx.showModal({
            title: '已发送邮件',
            content: '请您前往邮箱点击链接找回密码',
            showCancel: false,
          })
          wx.switchTab({
            url: '../user/user',
          })
        }else {
          wx.showModal({
            title: '账号不存在',
            content: '请您检查账号并重新输入',
            showCancel: false,
          })
        }
      }
    })
  },1000)
})