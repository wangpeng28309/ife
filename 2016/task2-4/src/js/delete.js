window.deleteRow = function(event) {
	event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        if (target.getAttribute("name") === 'delete') {
          target.parentNode.parentNode.parentNode.deleteRow(0); 
      }
}
module.exports = deleteRow;