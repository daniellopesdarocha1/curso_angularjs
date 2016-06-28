app.controller("aula08Controller", function($scope){

	$scope.estados = ['SP', 'RS', 'RJ', 'SC'];

	$scope.pessoa = novaPessoa();
	$scope.pessoas = [];

	$scope.salvarPessoa = function(pessoa){
		$scope.pessoas.push(pessoa);
		$scope.pessoa = novaPessoa(); //para limpar o texto dos inputs

		$scope.frm.$setUntouched(); // para remover o click que já ouve no campo
		$scope.frm.$setPristine(); // volta a situação original do formulário

	}

	console.log($scope.pessoa);

});

function novaPessoa(){

	return {
		nome : "",
		email : "",
		sexo : "m",
		estado : "SP"
	}

}
