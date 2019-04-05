// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    op: 0,
    flightCode: '',
    cityFrom: '',
    cityTo: '',
    date: ''
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
      date: options.date
    });
    console.log(this.data.op,this.data.flightCode,this.data.cityFrom,this.data.cityTo,this.data.date);
    wx.showLoading({
      title: 'Loading...',
    });
    setTimeout(function () {
      wx.hideLoading()
    }, 8000);
    
    wx.request({
      url: 'http://114.115.134.119:5000/beta/byFlightNumber',
      data: {
        op: parseInt(this.data.op),
        flightCode: this.data.flightCode,
        cityFrom: this.data.cityFrom,
        cityTo: this.data.cityTo,
        date: this.data.date
      },

      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      // header: { 
      // 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      // },
      success(res) {
        console.log(res.data);
        if (res.data) {
          console.log('a');
          _this.setData({
            list: res.data
          });
        }
        else {
          wx.navigateTo({
            url: '../notfound/notfound',
          })
        }
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

  }
})