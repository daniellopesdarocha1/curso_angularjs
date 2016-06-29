app.factory('Pessoa', function(){

	console.log("Criou o objeto Pessoa");

	var Pessoa = function(){

		console.log("Instanciou o objeto pessoa");

		this.nome = "Daniel";
		this.idade = 24;

		this.cumprimentar = function(){
			return "Olá " +this.nome+"!";
		}
	}

	return Pessoa;

});

//As factorys nos permitem criar novos objetos
