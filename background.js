/*(function () {
	//listens for a click on the extension and calls the content.js
	
	chrome.browserAction.onClicked.addListener(function(tab) {
		let msg = {
	      value : true, 
	    };
	    chrome.tabs.sendMessage(tab.id, msg);
	});

}());*/
console.log("Background.js loaded!");
chrome.runtime.onMessage.addListener(function(message, sender, sendResopnse) {
	console.log("Message received from popup.js");
	console.log("QTY: " + message.qty);
	return true;
});

