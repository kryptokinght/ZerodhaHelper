(function () {
  //page elements
  let x2 = document.getElementsByClassName('instrument-data');
  let x = document.getElementsByClassName('buy-sell-popup');
  var qty = 0;


  let toggle = false, i = 0;

  //listens for message from popup.js
  chrome.runtime.onMessage.addListener(bgMessage);

  function bgMessage(message, sender, sendResopnse) {
    if(message.value) {
      toggle = !(toggle); //to control the starting and stopping of the zerodha helper
      qty = message.qty;
      console.log("Quantity: " + message.qty);
      if(toggle && qty != 0) {  //when the user wants to us the zerodha helper
        console.log("Zerodha  helper functionality started!");
        var cl = x[0].className.split(' ').length;
        //adding click listener events to the different listed companies on left side 
        for(let i = 0; i < x2.length; i++) {
          x2[i].addEventListener('click',buyOrSell);
        }
      } 
      else {
        for(let i = 0; i < x2.length; i++) {
          x2[i].removeEventListener('click',buyOrSell);
        }
        console.log("Stopped!!");
      }
    }
    return true;
  }

  //functions used above
  function buyOrSell() {
    cl = x[0].className.split(' ').length;
    if(cl > 6) {
      //injecting inject.js file into the #buysellform FORM
      let form = document.getElementById('buysellform');  
      let js = document.createElement('script');
      let span = document.createElement('span');
      span.innerText = qty;
      span.id = "quant";  
      js.type = 'text/javascript';
      js.src = chrome.extension.getURL('inject.js');
      form.appendChild(js);
      form.appendChild(span);
    }
  }
}());


