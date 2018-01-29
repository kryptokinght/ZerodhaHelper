console.log("ZerodhaHelper popup.js loaded!!");
document.getElementById('submit').addEventListener('click', clicked);
 
function clicked() {
	let qty = document.getElementById('qty').value;
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
