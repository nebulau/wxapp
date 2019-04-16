// pages/register/register.js
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
        console.log(res.data);
      }
    })
  }
})