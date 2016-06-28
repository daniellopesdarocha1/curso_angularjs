
app.controller('aula06Controller', function($scope){

	$scope.nome = "Curso AngularJS";

	$scope.olaMundo = function(nome){

		alert("Olá " + nome + "!");

	}

	console.log("Executou o controller aula06Controller ")
});

/*
o scope é uma variavel onde vão ficar armazenadas 
todas as variaveis e funções
*/

/*
Controllers - controller é um trecho de código que controla a app. 
Os controllers são separados em arquivos diferentes,
e eles podem conter funcionalidades como funções e regras de negócios.
*/
