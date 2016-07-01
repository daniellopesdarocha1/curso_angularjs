//http://angular-translate.github.io/
var app = angular.module('app', ['pascalprecht.translate']);

app.config(function($translateProvider){

	$translateProvider.translations('pt-br', {
		TITULO : "Seja bem vindo!",
		PARAGRAFO1 : "Esta é uma página de inicio!",
		BTN_OK : "Confirmar",
		BTN_CANCEL : "Cancelar",
		EN_BTN : "English",
		PTBR_BTN : "Portuguese"
	});

	$translateProvider.translations('en', {
		TITULO : "Welcome!",
		PARAGRAFO1 : "This is a Home Page!",
		BTN_OK : "Confirm",
		BTN_CANCEL : "Cancel",
		EN_BTN : "Inglês",
		PTBR_BTN : "Português"
	})

	//$translateProvider.preferredLanguage('pt-br');
	$translateProvider.preferredLanguage('en');

});

app.controller('Aula20Controller', function($scope, $translate){
	
	$scope.setaIdioma = function(sigla){
		$translate.use(sigla);
	}

});
