var EventUtil = require('./EventUtil.js');
var aqiData = [
  ["北京", 80],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];
var Data = [];
EventUtil.addHandler(window, "load", function () {
    for (var i = 0; i < aqiData.length; i++) {
      if (aqiData[i][1]>60) {
        var count = Data.push(aqiData[i]);
      }
    }
    function compare(value1, value2) {
        if (value1 < value2) {
          return 1;
        } else if (value1 > value2) {
          return -1;
        } else {
          return 0;
        }
    }
    Data.sort(compare);
    console.log(Data);
    var ul = document.createElement("ul");
    for (var i = 0; i < Data.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = Data[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
})