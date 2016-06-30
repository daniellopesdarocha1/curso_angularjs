app.controller('Aula13Controller', function($scope){



});

app.directive('ngOla', function(){
	return {
		restrict : 'AEC', 
		/*restrict : A (significa que só vou utilizar as minhas diretivas em tags html <div ng-ola>)*/
		/*restrict : E (significa que criei uma tag <ng-ola></ng-ola> para utilizar)*/
		/*restrict : C (significa que terei que colocar a diretiva em uma class="ng-ola")*/

		scope : {
			ngNome : '@'
		},

		template : '<h1>Olá! {{ngNome}}!</h1>',

		controller : ['$scope', function($scope){

			$scope.digaOla = function(nome){

				alert('Ola '+nome+'!');

			}
			/*através do controller não da para manipular o DOM da página, mas através do link sim.*/
		}], 

		link : function(scope, iElement, iAttrs){

			console.log(iElement);
			console.log(iAttrs);
			scope.digaOla(iAttrs.ngNome);
		}
	}
});
