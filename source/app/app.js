require('angular');
require('./locale/angular-locale_pt-br');

var MainCtrl = require('./controllers/MainCtrl');
var maskTel = require('./diretives/maskTel');
var alertMsg = require('./diretives/alertMsg');

angular.module('app',[]);

//Diretiva de mácara para telefone.
angular.module('app').directive('maskTel',[maskTel]);
//Componente de mensagem de alerta
angular.module('app').directive('alertMsg',[alertMsg]);
//Controller principal
angular.module('app').controller('MainCtrl',['$scope','$http','$filter',MainCtrl]);
