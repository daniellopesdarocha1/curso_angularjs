app.directive('tooltip', function(){
	return {
		restrict : 'A',
		link : function(scope, element, attr){

			//console.log(element.html());

			//console.log(element.hide('slow'));

			element.tooltipsy({
				offset : [0, 10],
				content : scope.textoTooltip
			});
		}
	}
});

app.controller('Aula16Controller', function($scope){
	$scope.textoTooltip = "esse é o texto da minha tooltip";
});

/*
Não é aconselhavel utilizar código jquery e angular juntos!!! Um atrapalha no funcionamento do outro.
$(function(){
	$(".tooltip").tooltipsy({
		offset : [0, 10] // o offset é só para posicionar um pouco abaixo na tela
	});
});
*/
