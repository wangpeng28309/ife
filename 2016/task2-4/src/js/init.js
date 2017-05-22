window.init = function() {
    var addBtn = document.getElementById("add-btn");
    EventUtil.addHandler(addBtn, "click", function() {
    	addAqiData();
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
    		event = EventUtil.getEvent(event);
    		var target = EventUtil.getTarget(event);
    		console.log(target);
    		console.log(target.getAttribute("id"));
    		if (target.getAttribute("id") === 'delete') {
    			var rowNumber = target.parentNode.parentNode.rowIndex;
    			console.log(rowNumber);
    			document.getElementsByTagName("table")[0].deleteRow(rowNumber); 
    		}
    	});
    
}
module.exports = init;
