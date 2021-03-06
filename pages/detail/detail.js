// pages/detail/detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flight_detailed_info_url:'AAA',
    emptyres:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    this.data.flight_detailed_info_url = app.data.flight_detailed_info_url;
    wx.request({
      url: 'http://39.107.74.159:5000/beta/detailedInfo',
      data: {
        url: this.data.flight_detailed_info_url
      },
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(typeof res.data.airp_datas)
        if (res.data.airp_datas){
          _this.setData({
            detailInfo:res.data,
            emptyres:false
          });
        }else{
          _this.setData({
            emptyres:true
          })
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