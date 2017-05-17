var EventUtil = require('./EventUtil.js');
function getData() {
    var ul = document.getElementById("source");
    var ulChild = [];
    for (var i = 0; i < ul.childNodes.length; i++) {
      var oneAqi = [];
      var count = oneAqi.push(ul.childNodes[i].childNodes[0].nodeValue);
      var count = oneAqi.push(ul.childNodes[i].childNodes[1].firstChild.nodeValue);
      ulChild.push(oneAqi);
    }
}
getData();
    function compare(value1, value2) {
        if (value1 < value2) {
          return 1;
        } else if (value1 > value2) {
          return -1;
        } else {
          return 0;
        }
    }
    ulChild.sort(compare);
    console.log(ulChild);