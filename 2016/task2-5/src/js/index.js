var EventUtil = require("./EventUtil");
var aqiSourceData = require("./aqiSourceData");
var getDateStr = require("./aqiSourceData");
var randomBuildData = require("./aqiSourceData");
var getLevel = require("./renderJs");
var render = require("./renderJs");
var renderDay = require("./renderJs");
var renderWeek = require("./renderJs");
var renderMonth = require("./renderJs");

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
