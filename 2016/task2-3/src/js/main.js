window.main = function() {
    var ulChild = getData();
    ulChild = sort(ulChild);
    render(ulChild);
}

module.exports = main;