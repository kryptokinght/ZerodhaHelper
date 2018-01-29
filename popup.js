console.log("ZerodhaHelper popup.js loaded!!");
document.getElementById('submit').addEventListener('click', clicked);
 
function clicked() {
	let qty = document.getElementById('qty').value;
	//qty1 = qty;
	//from popup to content.js
	var params = {
	  active : true,
	  currentWindow : true
	}
	chrome.tabs.query(params, gotTabs);
	function gotTabs(tabs) {
	  	let msg = {
	      value : true,
	      qty: qty
	    };    
		chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {
			console.log("Message sent!");
		});
	}	
}

/*
var params = {
  active : true,
  currentWindow : true
}
chrome.tabs.query(params, gotTabs);
function gotTabs(tabs) {
  	let msg = {
      value : true,
      qty: qty1
    };    
	chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {
		console.log("Message sent!");
	});
}*/
//from popup to background
/*
chrome.runtime.sendMessage({qty: qty}, function(response) {
		console.log("");
	});	*/