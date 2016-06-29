app.filter('retornaoi', function(){
	return function(nome){

		return "Olá "+nome+"!";

	}
});

/*
	Podemos criar filtros e reutiliza-los quando for necessário.
	Os filtros servem para tratar informações e retornar um resultado.
*/
