// this script gets injected into the active tab when the user clicks the button on popup.html

function createTextArea() {
	var textArea = $('<div id="myTextArea"><input id="myInput" value="Type Here" style="font-family: Times New Roman; padding: 3px; font-size: 16px; width: 200px; margin-right: 5px"><button id="myButton" style="border: none; font-family: Times New Roman; font-size: 16px; background-color: #DADEDF; padding: 5px 20px">Holler</button></div>');

	$('body').append(textArea);
	$('#myButton').click(function() {
		var myTextArea = $('#myTextArea');
		var offset = myTextArea.offset();
		var top = offset.top;
		var left = offset.left;
		console.log(offset);

		chrome.runtime.sendMessage({
			text: $('#myInput').val(),
			top: top,
			left: left
		})
	})

	return textArea;
}


function findOfCreateTextArea() {
	if ($('#myTextArea').length === 0) {
		return createTextArea();
	} else {
		return $('#myTextArea');
	}
}

function cursorInsideTextArea(element) {
	if ($(element).parent('#myTextArea').length !== 0) {
		return true;
	} else {
		if ($(element).attr('id') === 'myTextArea') {
			return true;
		}
	}

	return false;
}

$('body').click(function(event) {
	console.log('Cursor Clicked On Page:', event);
	var target = event.target;

	if (cursorInsideTextArea(target)) {
		return;
	}

	var textArea = findOfCreateTextArea();
	var mouseX = event.pageX;
	var mouseY = event.pageY;

	textArea.css({
		position: 'absolute',
		top: mouseY + 'px',
		left: mouseX + 'px',
		'font-size': '18px'
	})
})
