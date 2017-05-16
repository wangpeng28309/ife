var EventUtil = require('./EventUtil.js');
var display = document.getElementById('button');
EventUtil.addHandler(display, "click", function (event) {
	var text = document.getElementById('aqi-input');
	var conments = document.getElementById('aqi-display');
	conments.innerHTML = text.value;
});