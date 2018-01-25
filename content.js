console.log("Zerodha Helper content.js loaded");

//page elements
var x2 = document.getElementsByClassName('instrument-data');
var x = document.getElementsByClassName('buy-sell-popup');


let toggle = false, i = 0;
//listens from message from background.js
chrome.runtime.onMessage.addListener(gotMessage);

//gotMessage function
function gotMessage(message, sender, sendResopnse) {
  if(message.value) {
  	toggle = !(toggle); //to control the starting and stopping of the zerodha helper
  	if(toggle) {  //when the user wants to us the zerodha helper
		console.log("Zerodha  helper functionality started!");
  		var cl = x[0].className.split(' ').length;
  		//adding click listener events to the different listed companies on left side 
  		for(var i = 0; i < x2.length; i++)
  			x2[i].addEventListener('click',buyOrSell);
  	}	
  	else {
  		for(var i = 0; i < x2.length; i++) 
  			x2[i].removeEventListener('click',buyOrSell);
  		console.log("Stopped!!");
  	}
  }
}

//functions used above
function buyOrSell() {
	cl = x[0].className.split(' ').length;
	if(cl > 6) {
		console.log("popped!");
		//injecting js file into #quantity element
		var qty = document.getElementById('quantity');	
		var js = document.createElement('script');
	    js.type = 'text/javascript';
	    js.src = chrome.extension.getURL('inject.js');
	    qty.appendChild(js);
	}
}