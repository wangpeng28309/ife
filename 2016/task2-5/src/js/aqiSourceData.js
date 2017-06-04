// 以下两个函数用于随机模拟生成测试数据

window.getDateStr = function(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
var randomBuildData = function(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

window.aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "深圳": randomBuildData(100),
};
console.log(aqiSourceData);

module.exports = getDateStr;
module.exports = randomBuildData;
module.exports = aqiSourceData;