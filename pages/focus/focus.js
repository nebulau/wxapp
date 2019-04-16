// pages/attension/attension.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    token:'',
    notempty:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username:app.data.username,
      token:app.data.token
    });
    var _this = this;
    wx.request({
      url: 'http://114.115.134.119:5000/beta/getFocusedFlights',
      data: {
        username:this.data.username,
        token:this.data.token
      },
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data);
        _this.setData({
          focuslist: res.data,
        });
        if(_this.data.focuslist.length==0){
          console.log('empty focuslist');
          _this.setData({
            notempty:false
          });
        }
      }
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