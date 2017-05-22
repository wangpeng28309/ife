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
