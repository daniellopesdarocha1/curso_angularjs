app.controller("aula07Controller", function($scope){

	$scope.nomes = ['Daniel', 'Jaison', 'Thiago'];
	//console.log($scope.nomes);


	$scope.pessoas = [];

	$scope.pessoas.push({
		nome : 'Daniel Rocha',
		idade : 24,
		status : true
	});

	$scope.pessoas.push({
		nome : 'Paulo',
		idade : 23,
		status : true
	});

	$scope.pessoas.push({
		nome : 'Jaison',
		idade : 31,
		status : true
	});

	$scope.pessoas.push({
		nome : 'Thiago',
		idade : 35,
		status : true
	});

	console.log($scope.pessoas);

	$scope.adicionaPessoa = function(){
		var nome = document.getElementById("nomepessoa");
		var idade = document.getElementById("idadepessoa");

		$scope.pessoas.push({
			nome : nome.value,
			idade : idade.value
		});

		nome.value = "";
		idade.value = "";
	}

	$scope.removePessoa = function(){
		$scope.pessoas.pop({});
	}

});

/*ng repeat - Serve para criar loops e 
exibir dados em array (não pode ter dados duplicados no array)*/
