(function () {
  //page elements
  let x2 = document.getElementsByClassName('instrument-data');
  let x = document.getElementsByClassName('buy-sell-popup');


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
        for(let i = 0; i < x2.length; i++)
          x2[i].addEventListener('click',buyOrSell);
      } 
      else {
        for(let i = 0; i < x2.length; i++) 
          x2[i].removeEventListener('click',buyOrSell);
        console.log("Stopped!!");
      }
    }
  }

  //functions used above
  function buyOrSell() {
    cl = x[0].className.split(' ').length;
    if(cl > 6) {
      //injecting inject.js file into the #buysellform FORM
      let form = document.getElementById('buysellform');  
      let js = document.createElement('script');
        js.type = 'text/javascript';
        js.src = chrome.extension.getURL('inject.js');
        form.appendChild(js);
    }
  }
}());
