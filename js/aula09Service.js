app.service('operacoes', function(){

	console.log("Criou o service operacoes");

	this.somar = function(valor1, valor2){
		return valor1 + valor2;
	}

	this.subtrair = function(valor1, valor2){
		return valor1 - valor2;
	}

});


//service é um concentrador de serviços que podemos compartilhar entre vários controllers.
