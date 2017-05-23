window.init = function() {
    var addBtn = document.getElementById("add-btn");
    EventUtil.addHandler(addBtn, "click", function() {
    	render();
    });

    var aqiValueInput = document.getElementById("aqi-value-input");
    EventUtil.addHandler(aqiValueInput, "keypress", function(event) {
        event = EventUtil.getEvent(event);
        var charCode = EventUtil.getCharCode(event);
        if (!/\d/.test(String.fromCharCode(charCode))) {
        	EventUtil.preventDefault(event);
        	console.log('请输入整数');
        }
    });
    var aqiCityInput = document.getElementById("aqi-city-input");
    EventUtil.addHandler(aqiCityInput, "keypress", function(event) {
    	event = EventUtil.getEvent(event);
        var charCode = EventUtil.getCharCode(event);
        if (/\d/.test(String.fromCharCode(charCode))) {
        	EventUtil.preventDefault(event);
        	console.log('请输入中文或英文');
        }
    });
    	EventUtil.addHandler(window, "click", function(event) {
    	deleteRow();
    	});
    
}
module.exports = init;
