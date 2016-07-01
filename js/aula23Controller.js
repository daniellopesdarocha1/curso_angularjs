// https://angular-ui.github.io/

var app = angular.module('app', ['ui.unique', 'ui.validate']);

app.controller('Aula23Controller', function($scope){

	//ui.unique

	$scope.usuarios = [
		{ nome : "Daniel", email: "daniellopesdarocha1@gmail.com"},
		{ nome : "Jaison", email: "jaison@gmail.com"},
		{ nome : "Cicrano", email: "cicrano@gmail.com"},
		{ nome : "Cicrano", email: "email@gmail.com"},
		{ nome : "Cicrano", email: "email@gmail.com"}
	]

	//ui.validate - para verificar se dois campos de senha possuem o mesmo valor
	$scope.validar = function(valor){
		return valor === $scope.senha1;
	}
	
});

/*
AngularUI:

ui.unique: filtrar elementos duplicados em arrays para exibir elementos únicos;
ui.validate: para trabalhar com validações;
*/
