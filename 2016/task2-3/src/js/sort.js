window.sort = function(ulChild) {
    function compare(a, b) {
        return a[1]-b[1];
    }
    ulChild.sort(compare);
    return ulChild
}

module.exports = sort;