/* 
https://angular-ui.github.io/
angular-google-maps.js
lodash: plugin extra para rodar o googlemaps.
*/

//para inicializar a aplicação de forma manual, pois é necessário que o google esteja totalmente carredo antes de iniciar a aplicação.
function onGoogleReady(){
    angular.bootstrap(document.getElementsByTagName('body')[0], ['app']);
}

angular.module('app', ['uiGmapgoogle-maps'])
    .controller('Aula24Controller', function($scope){
		//console.log("Funcionou!");

        $scope.map = { center : { latitude : 45, longitude : -73 }, zoom : 10 };
    
        $scope.marker = {
            id : 0,
            coords : {
                latitude : 45,
                longitude : -73
            }
        }
    
    });


