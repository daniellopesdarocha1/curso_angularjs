app.controller('aula09Ctrl1Controller', ['$scope', 'operacoes', 'Pessoa', function($scope, operacoes, Pessoa){

	$scope.pessoa = new Pessoa();

	console.log("Entrou no controller aula 09 1");

	console.log(operacoes.somar(10, 10));
	//o angular só instancia o service se utilizarmos a operacao

}]);

app.controller('aula09Ctrl1Controller2', ['$scope', 'operacoes', 'Pessoa', function($scope, operacoes, Pessoa){

	$scope.outrapessoa = new Pessoa();

	$scope.outrapessoa.nome = "DevMedia";

	console.log("Entrou no controller aula 09 2");

	console.log(operacoes.subtrair(10, 5));


}]);
