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