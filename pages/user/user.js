var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoggedIn:false,
    username:'',
    token:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isLoggedIn:app.data.isLoggedIn,
      username:app.data.username
    });
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
    this.setData({
      isLoggedIn:app.data.isLoggedIn,
      username:app.data.username
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
  toLogin: function() {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  toUserInfo: function() {
    if(!this.data.isLoggedIn) {
      wx.showToast({
        title: '请您先登录',
        icon: 'loading',
        duration: 200
      })
    }
    else {
      wx.navigateTo({
        url: '../userinfo/userinfo',
      })
    }
  },
  toAttension: function() {
    if (!this.data.isLoggedIn) {
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
  },
  logOut: function() {
    this.setData({
      isLoggedIn: false,
      username:'',
      token:''
    });
    app.data.isLoggedIn=false;
    app.data.username='';
    app.data.token='';
    wx.clearStorage();
  }
})