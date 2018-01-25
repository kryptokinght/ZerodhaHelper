(function () {
    var qty = document.getElementById('quantity');
    var close = document.querySelector('a.button.close');
    qty.value = 0;
    close.click();
    console.log("Closed!!");
    console.log("qty = " + qty.value);
}());