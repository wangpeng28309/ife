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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

window.EventUtil = {

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
/* 1 */
/***/ (function(module, exports) {

window.addAqiData = function() {
    var AqiDataChild = [];
    var aqiCityInput = document.getElementById('aqi-city-input');
    var aqiValueInput = document.getElementById('aqi-value-input');
    var count = AqiDataChild.push(aqiCityInput.value);
    var count = AqiDataChild.push(aqiValueInput.value);
    AqiData.push(AqiDataChild);
    console.log(AqiData);
    return AqiData;
}
module.exports = addAqiData;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

window.render = function(AqiData) {
	var table = document.createElement("table");
	var tbody = document.createElement("tbody");
    var AqiData = addAqiData();
            console.log(AqiData);

        var tr = document.createElement("tr");
        var tdCity = document.createElement("td");
        var tdValue = document.createElement("td");
        var tdButton =document.createElement("td");
        var button = document.createElement("button");
        button.setAttribute("id", "delete");
        tdCity.innerHTML = AqiData[AqiData.length-1][0];
        tdValue.innerHTML = AqiData[AqiData.length-1][1];
        button.innerHTML = '删除';
        tr.appendChild(tdCity);
        tr.appendChild(tdValue);
        tr.appendChild(tdButton);
        tdButton.appendChild(button);
        tbody.appendChild(tr);
    
    table.appendChild(tbody);
    document.body.appendChild(table);
}
module.exports = render;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var EventUtil = __webpack_require__(0);
var init = __webpack_require__(2);
var addAqiData = __webpack_require__(1);
var render = __webpack_require__(3);
window.AqiData = [];
init();


/***/ })
/******/ ]);