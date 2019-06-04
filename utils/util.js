//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .'  \\|     |//  `.
//                     /  \\|||  :  |||//  \
//                    /  _||||| -:- |||||-  \
//                    |   | \\\  -  /// |   |
//                    | \_|  ''\---/''  |   |
//                    \  .-\__  `-`  ___/-. /
//                  ___`. .'  /--.--\  `. . ___
//               ."" '<  `.___\_<|>_/___.'  >'"".
//              | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//              \ \  `-.   \_ __\ /__ _/   .-`  / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖镇楼           BUG辟易
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}
const firstDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  var y=year;
  var m=month;
  var d=day;
  if(month-1<1){
    y=year-1;
    m=month+11;
  }else{
    m=month-1;
  }
  return [year, month, day].map(formatNumber).join('-')
}
const lastDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  var y = year;
  var m = month;
  var d = day;
  if (month + 6 > 12) {
    y = year + 1;
    m = month - 6;
  } else {
    m = month + 6;
  }
  return [y, m, d].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function throttle(fn, gaptime) {
  if(gaptime==null||gaptime==undefined){
    gaptime=1500
  }
  let _lastTime=null
  return function() {
    let _nowTime=+new Date()
    if(_nowTime-_lastTime>gaptime||!_lastTime){
      fn.apply(this,arguments)
      _lastTime=_nowTime
    }
  }
}
var validateEmail = function (email) {
  var reg = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$');
  return reg.test(email)
}
var validateNamePwd = function (str) {
  var reg = new RegExp(/^[a-zA-Z0-9_-]{6,13}$/);
  return reg.test(str)
}
module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  firstDate:firstDate,
  lastDate:lastDate,
  throttle:throttle,
  validateEmail:validateEmail,
  validateNamePwd:validateNamePwd
}
