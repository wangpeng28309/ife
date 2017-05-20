window.init = function () {
    var button = document.getElementById("sort-btn");
    EventUtil.addHandler(button, "click", function () {
    main();
})
}

module.exports = init;