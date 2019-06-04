//app.js
App({
  data:{
    flight_detailed_info_url:'',
    isLoggedIn:false,
    username:'',
    token:'',
    cityFrom: 'SFO',
    cityTo: 'PVG',
    cityFromCn: '旧金山',
    cityToCn: '上海浦东',
    focuslist: [],
    base_url:'39.107.74.159'
  },
  onLaunch(options) {
    // Do something initial when launch.
    var _this=this;
    wx.getStorage({
      key: 'isLoggedIn',
      success: function(res) {
        console.log(res.data);
        _this.data.isLoggedIn=res.data;
      },
    });
    wx.getStorage({
      key: 'username',
      success: function(res) {
        console.log(res.data);
        _this.data.username=res.data;
      },
    });
    wx.getStorage({
      key: 'token',
      success: function(res) {
        console.log(res.data);
        _this.data.token=res.data;
      },
    });
  },
  onShow(options) {
    // Do something when show.
    
  },
  onHide() {
    // Do something when hide.
    
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})