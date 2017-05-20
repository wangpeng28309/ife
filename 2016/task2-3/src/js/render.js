window.render = function(ulChild) {
    var ul = document.createElement("ul");
    for (var i = 0; i < ulChild.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = ulChild[i][0]+ulChild[i][1];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

module.exports = render;