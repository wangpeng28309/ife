/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var EventUtil = {

    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    
    getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents", "2.0")){
            return event.button;
        } else {
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4: return 1;
            }
        }
    },
    
    getCharCode: function(event){
        if (typeof event.charCode == "number"){
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    
    getClipboardText: function(event){
        var clipboardData =  (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },
    
    getEvent: function(event){
        return event ? event : window.event;
    },
    
    getRelatedTarget: function(event){
        if (event.relatedTarget){
            return event.relatedTarget;
        } else if (event.toElement){
            return event.toElement;
        } else if (event.fromElement){
            return event.fromElement;
        } else {
            return null;
        }
    
    },
    
    getTarget: function(event){
        return event.target || event.srcElement;
    },
    
    getWheelDelta: function(event){
        if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },
    
    preventDefault: function(event){
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    
    setClipboardText: function(event, value){
        if (event.clipboardData){
            event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData){
            window.clipboardData.setData("text", value);
        }
    },
    
    stopPropagation: function(event){
        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }

};
module.exports = EventUtil;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var EventUtil = __webpack_require__(2);
var aqiSourceData = __webpack_require__(1);
var getDateStr = __webpack_require__(1);
var randomBuildData = __webpack_require__(1);
var getLevel = __webpack_require__(0);
var render = __webpack_require__(0);
var renderDay = __webpack_require__(0);
var renderWeek = __webpack_require__(0);
var renderMonth = __webpack_require__(0);

function addEvent(argument) {
  EventUtil.addHandler(window, "load", function() {
    var formGraTime = document.getElementById("form-gra-time");
    var citySelect = document.getElementById("city-select");
    var day = document.getElementById("day");
    var week = document.getElementById("week");
    var month = document.getElementById("month");
    var graArray = [day, week , month];
    var cityOptions = citySelect.options;

EventUtil.addHandler(citySelect, "change", function (event) {
      event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
graArray.forEach(function(element){  
        if (element.checked) {
          var graTimeValue = element.value;
          var citySelectOneValue = cityOptions[citySelect.selectedIndex].value;
          console.log(citySelectOneValue);
          console.log(graTimeValue);
                render(graTimeValue, citySelectOneValue);
                return;
            }
    });  
});

EventUtil.addHandler(formGraTime, "click", function (event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    console.log(target);
    graArray.forEach(function(element){  
        if (target === element) {
          var graTimeValue = element.value;
          var citySelectOneValue = cityOptions[citySelect.selectedIndex].value;
                render(graTimeValue, citySelectOneValue);
                return;
            }
    });  

});

  });
}
var aqiChart = document.getElementById("aqi-chart-wrap");
addEvent();


/***/ })
/******/ ]);