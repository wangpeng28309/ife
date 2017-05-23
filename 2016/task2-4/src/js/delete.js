window.deleteRow = function(event) {
	event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        console.log(target);
        console.log(target.getAttribute("id"));
        if (target.getAttribute("name") === 'delete') {
          target.parentNode.parentNode.parentNode.deleteRow(0); 
      }
}
module.exports = deleteRow;