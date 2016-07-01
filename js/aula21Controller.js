// https://github.com/nervgh/angular-file-upload

var app = angular.module('app', ['angularFileUpload']);

app.controller('Aula21Controller', function($scope, FileUploader){
	
	var uploader = $scope.uploader = new FileUploader(
		{
			url : 'service/upload.php'
		}
	);

	uploader.filters.push(
		{
			name : "tamanhoFila",
			fn : function(item, options){
				return this.queue.length < 4; 
				// se o tamanho da fila for menor do que 4 arquivos ele retorna true. (restrige a qtd de uploads)
			}
		}
	);

	uploader.onSuccessItem = function(fileItem){
		console.log("Item enviado com sucesso!");
		fileItem.remove(); //limpa a fila
	};

	uploader.onWhenAddingFileFailed = function (fileItem){
		console.log("Erro ao adicionar elemento ");
	};

});
