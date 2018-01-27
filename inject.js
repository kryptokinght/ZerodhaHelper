(function () {
	//Stack Overflow answer code
    /*var model =  angular.element(document.getElementById('quantity')).data('$ngModelController');
	model.$setViewValue("200");*/

	//my code but still some help taken from stack Overflow
	var scope = angular.element($('#quantity')).scope();
	scope.options.quantity = 200;
	scope.$apply();
	document.querySelector('button.btn.place').click();
    console.log("Transaction completed!");
}());