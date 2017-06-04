
var getLevel = function(aqi) {
            var level;
            switch (true) {
                case aqi <= 50:
                level = 1;
                break;
                case aqi > 50 && aqi <= 100:
                level = 2;
                break;
                case aqi > 100 && aqi <= 150:
                level = 3;
                break;
                case aqi > 150 && aqi <= 200:
                level = 4;
                break;
                case aqi > 200 && aqi <= 300:
                level = 5;
                break;
                case aqi > 300:
                level = 6;
                break;
            }
            return level;
}

var render = function(graTimeValue, citySelectOneValue) {
      switch (graTimeValue) {
                case 'day':
                renderDay(citySelectOneValue);
                break;
                case 'week':
                renderWeek(citySelectOneValue);
                break;
                case 'month':
                renderMonth(citySelectOneValue);
                break;
               
            }
    
}
var renderDay = function(citySelectOneValue) {
  var aqiSourceDataDay = aqiSourceData[citySelectOneValue];
    console.log(aqiSourceDataDay);
    var chart = '';
    for (var x in aqiSourceDataDay){
      var aqi = aqiSourceDataDay[x];
        chart += '<div title="'+x+', '+aqi+'" class="level'+getLevel(aqi)+' day" style="height: '+aqi+'px"></div>';
    }
    console.log(chart);
    aqiChart.innerHTML = chart;
}
var renderWeek = function(citySelectOneValue) {
    var begin = "2016-01-01",
        end = "2016-03-31",
        beginDate = new Date(begin), endDate = new Date(end),
        totalDays = Math.round((endDate.getTime() - beginDate.getTime()) / 86400000) + 1,
        date = new Date(begin),
        week,
        avg = new Array(Math.ceil((totalDays - 2) / 7  + 1)).fill(0),
        num = new Array(Math.ceil((totalDays - 2) / 7  + 1)).fill(0);
    var aqiSourceDataDay = aqiSourceData[citySelectOneValue];
    console.log(avg);
    var chart = '';
    for (var i = 1; i < totalDays + 1; i++) {
                    week = Math.ceil(((i + 5) / 7) - 1);
                    avg[week] += aqiSourceData[citySelectOneValue][getDateStr(date)];
                    num[week]++;
                    date.setDate(date.getDate() + 1);
                }
                console.log(week);
                console.log(num);
                    console.log(avg);
                avg = avg.map((element, index) => num[index] ? Math.round(element / num[index]) : 0);
                date = new Date(begin);
        for (var i = 0; i <= avg.length; i++) {
                chart += '<div title="'+i+', '+avg[i]+'" class="level'+getLevel(avg[i])+' week" style="height: '+avg[i]+'px"></div>';
                }
        aqiChart.innerHTML = chart;
}
var renderMonth = function(citySelectOneValue) {
    var begin = "2016-01-01",
        end = "2016-03-31",
        beginDate = new Date(begin), endDate = new Date(end),
        beginMonth = beginDate.getMonth(), endMonth = endDate.getMonth(),
        totalDays = Math.round((endDate.getTime() - beginDate.getTime()) / 86400000) + 1,
        date = new Date(begin),
        month,
        avg = new Array(endMonth - beginMonth + 1).fill(0),
        num = new Array(endMonth - beginMonth + 1).fill(0);
    var aqiSourceDataDay = aqiSourceData[citySelectOneValue];
    console.log(totalDays);
    var chart = '';
        for (var i = 0; i < totalDays; i++) {
                    month = date.getMonth();
                    avg[month] += aqiSourceData[citySelectOneValue][getDateStr(date)];
                    num[month]++;
                    date.setDate(date.getDate() + 1);
                }
                    console.log(num);
                    console.log(month);
                    console.log(avg);
                avg = avg.map((element, index) => num[index] ? Math.round(element / num[index]) : 0);
                date = new Date(begin);
        for (var i = beginMonth; i <= endMonth; i++) {
                chart += '<div title="'+i+', '+avg[i]+'" class="level'+getLevel(avg[i])+' month" style="height: '+avg[i]+'px"></div>';
                }
        aqiChart.innerHTML = chart;
}

module.exports = getLevel;
module.exports = render;
module.exports = renderDay;
module.exports = renderWeek;
module.exports = renderMonth;