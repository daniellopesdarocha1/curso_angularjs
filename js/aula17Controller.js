var app = angular.module('app', ['ngAnimate']); // o ng-animate nos permite trabalhar com classes e angular

app.controller('Aula17Controller', function($scope){

	$scope.itens = ['1', '2', '3'];

	$scope.adicionaItem = function(){
		if ($scope.itens.indexOf($scope.itemadd)==-1)//para não adicionar um item que já existe.
			$scope.itens.push($scope.itemadd);
	}

});
