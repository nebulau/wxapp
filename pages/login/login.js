// pages/user/user.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    token:''
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
  bindPwd: function(e) {
    this.setData({
      password:e.detail.value
    });
  },
  logIn: function() {
    var _this=this;
    console.log(this.data);
    wx.request({
      url: 'http://114.115.134.119:5000/beta/login',
      data: {
        username: this.data.username,
        password: this.data.password
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data);
        if(res.data.statusCode===1){
          app.data.isLoggedIn = true;
          app.data.username = _this.data.username;
          app.data.token = res.data.token;
          wx.setStorage({
            key: 'isLoggedIn',
            data: app.data.isLoggedIn,
          });
          wx.setStorage({
            key: 'username',
            data: app.data.username,
          });
          wx.setStorage({
            key: 'token',
            data: app.data.token,
          });
          wx.switchTab({
            url: '../user/user',
          });
        }
        else if(res.data.statusCode==0){
          wx.showToast({
            title: '账户密码不正确',
            icon: 'loading',
            duration: 500,
          })
        }
        else if(res.data.statusCode==-1){
          wx.showToast({
            title: '账户未激活',
            icon: 'loading',
            duration: 500,
          })
        }
      }
    });
  }
})