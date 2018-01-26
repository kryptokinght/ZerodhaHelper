(function () {
	//listens for a click on the extension and calls the content.js
	chrome.browserAction.onClicked.addListener(function(tab) {
		let msg = {
	      value : true
	    };
	    chrome.tabs.sendMessage(tab.id, msg);
	});
}());

