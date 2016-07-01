var app = angular.module('app', ['ngCookies']);

app.controller('Aula19Controller', function($scope, $cookieStore){

	//console.log("Funcionou!");
	//$cookieStore.put("nome", "devmedia.com"); //cookie chamado nome com o valor devmedia.com
	//$cookieStore.remove("nome"); //para remover o cookie

	$scope.criarCookie = function(){
		$cookieStore.put("meusDados", 
			{ "nome" : "Daniel Rocha", "idade" : 25 }
		);
	}

	$scope.getValorCookie = function(){
		console.log($cookieStore.get("meusDados"));
	}

	$scope.removeCookie = function(){
		$cookieStore.remove("meusDados");
	}

});

app.controller('Aula19_2Controller', function($scope, $cookieStore){

	$scope.getValorCookieCtrl2 = function(){
		console.log($cookieStore.get("meusDados"));
	}

});
