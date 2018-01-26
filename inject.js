(function () {

    var model =  angular.element(document.getElementById('quantity')).data('$ngModelController');
	model.$setViewValue("200");
	document.querySelector('button.btn.place').click();
    console.log("Transaction completed!");
}());