// https://angular-ui.github.io/

var app = angular.module('app', ['ui.highlight', 'ui.mask', 'ngSanitize']);

app.controller('Aula22Controller', function($scope){
	
	//highlight: serve para destacar alguns textos no campo busca.
	$scope.texto = "esta é uma breve descrição. esta é uma breve descrição. esta é uma breve descrição. esta é uma breve descrição. esta é uma breve descrição. esta é uma breve descrição. esta é uma breve descrição. esta é uma breve descrição. esta é uma breve descrição. esta é uma breve descrição. "
	
	$scope.maskCpf = '999.999.999-99';

	// 9 - somente numeros
	// A - somente letras
	// * - qualquer coisa

	$scope.maskFone = '(99) 9999-9999';
});
