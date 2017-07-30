console.log("Injected message.js");

chrome.runtime.onMessage.addListener(function(message){
	console.log('Got a message!',message);

	var top = message.top;
	var left = message.left;
	var value = message.value;

	var lastMessage = $('<div id="myLastMessage">' +value+ '</div>').css({
  		position: 'absolute',
  		top: top,
  		left: left,
  		'z-index': 1000,
  		'font-size': '42px'
  	});   	
    $('body').append(lastMessage);
});