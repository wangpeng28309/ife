// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
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

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "深圳": randomBuildData(100),
};
console.log(aqiSourceData);

------------
function citySelectChange(graTimeValue) {
    EventUtil.addHandler(citySelect, "change", function (event) {
    event = EventUtil.getEvent(event);
    var citySelectOne = citySelect.options[citySelect.selectedIndex];
    console.log(citySelectOne);
    var citySelectOneValue = citySelectOne.value;
        console.log(graTimeValue);
graTimeChange(citySelectOneValue);
    render(citySelectOneValue, graTimeValue);
});
}  

function graTimeChange(citySelectOneValue) {
    EventUtil.addHandler(formGraTime, "click", function (event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    console.log(target);
    var graTimeValue = target.value;

                citySelectChange(graTimeValue);


});
}
graTimeChange();
function render(citySelectOneValue, graTimeValue) {
      switch (graTimeValue) {
                case 'day':
                renderDay(citySelectOneValue);
                break;
                case 'week':
                level = 2;
                break;
                case 'month':
                level = 3;
                break;
               
            }
    
}
function renderDay(citySelectOneValue) {
  var aaaa = Object.getOwnPropertyDescriptor(aqiSourceData, citySelectOneValue);
    console.log(aaaa);
    var bbbb = aaaa.value;
    console.log(bbbb);
    var chart = '';
    for (var x in bbbb){
      var aqi = bbbb[x];
        chart += '<div title="'+x+', '+aqi+'" class="level'+getLevel(aqi)+' day" style="height: '+aqi+'px"></div>';
    }
    console.log(chart);
    aqiChart.innerHTML= chart;
}
