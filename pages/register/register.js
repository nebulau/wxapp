// pages/register/register.js
var utils = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    pwdtwice:'',
    email:''
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
      username:e.detail.value
    });
  },
  bindPwd: function(e) {
    this.setData({
      password:e.detail.value
    });
  },
  bindPwdTwice: function(e) {
    this.setData({
      pwdtwice:e.detail.value
    });
  },
  bindEmail: function(e) {
    this.setData({
      email:e.detail.value
    });
  },
  register: function() {
    var _this=this;
    if (!(this.data.pwdtwice == this.data.password)) {
      wx.showModal({
        title: '两次输入密码不一致',
        content: '请您重新输入',
      })
      return;
    }
    if(!utils.validateEmail(this.data.email)){
      wx.showModal({
        title: '邮箱格式不正确',
        content: '请您重新输入',
      })
      return;
    }
    if(this.data.username.length>13||this.data.username.length<6){
      wx.showModal({
        title: '账号不合法',
        content: '请您重新输入',
      })
      return;
    }
    if (this.data.password.length > 13 || this.data.password.length < 6) {
      wx.showModal({
        title: '密码不合法',
        content: '请您重新输入',
      })
      return;
    }
    wx.request({
      url: 'http://114.115.134.119:5000/beta/register',
      data: {
        username: this.data.username,
        password: this.data.password,
        email: this.data.email
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if(res.data.status=='success!'){
          wx.showModal({
            title: '请您前往邮箱激活',
            content: '已为您跳转至登录页面',
          })
          wx.switchTab({
            url: '../user/user',
          })
        }else {
          wx.showModal({
            title: '注册失败',
            content: '用户名已被占用',
          })
        }
      }
    })
  }
})