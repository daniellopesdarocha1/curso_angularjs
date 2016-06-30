app.controller('Aula18Controller', function($scope, $location){

	$scope.$location = $location;

	$scope.setaId = function(p_id){
		$location.search({ id : p_id });
	}

	$scope.$watch('$location.search().id', function(id){
		console.log("Mudou o valor do ID para "+id);
	});

}).config(function($locationProvider){
	$locationProvider.html5Mode({
		enable : true, //abre configurações mais avançadas para utilizar o objeto location.
		requireBase : false // se nao adicionar esse requireBase então deve-se criar uma <meta base="/cursoangular/aula18.html">
	}).hashPrefix('#'); //hashPrefix indica qual elemento vamos usar como ancora
});



// uma aplicação angular tem dois momentos: um de config e outro de run.
