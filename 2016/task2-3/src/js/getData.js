window.getData = function() {
    var ulChild = [];
    var ul = document.getElementById("source");
    for (var i = 0; i < ul.childNodes.length; i++) {
      if (ul.childNodes[i].nodeType == 1) {
          var oneAqi = [];
          var count = oneAqi.push(ul.childNodes[i].childNodes[0].nodeValue);
          var count = oneAqi.push(ul.childNodes[i].childNodes[1].firstChild.nodeValue);
          ulChild.push(oneAqi);
      }
    }
    return ulChild;
}

module.exports = getData;