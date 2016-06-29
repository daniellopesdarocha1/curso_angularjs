//outra forma de escrever um controller

function Aula10Controller($scope, $filter/*assim passa todos os filtros (senão teria que acrestar a palavra filter retornaoiFilter)*/){

	console.log("Iniciou o controller");

	//console.log(retornaoiFilter('Daniel'));

	console.log(
		$filter('retornaoi')('Daniel Rocha') // aqui sem ponto e virgula, porque esta dentro do console.log();
	);

	$scope.pessoa = {
		nome : "Daniel",
		idade : 24
	}

}

app.controller('Aula10Controller', Aula10Controller);