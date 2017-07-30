$(function() {
  $('#myPopupButton').click(function() {
  	console.log('myPopupButton is Clicked');
  	chrome.tabs.executeScript(null, {file: 'jquery.js'}, function(){
  		console.log('Injected jQuery?');
  		chrome.tabs.executeScript(null, {file: 'script.js'});
  	});
  });
});