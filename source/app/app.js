require('angular');
require('./locale/angular-locale_pt-br');

var MainCtrl = require('./controllers/MainCtrl');
var maskTel = require('./diretives/maskTel');
var alertMsg = require('./diretives/alertMsg');
var clientAPIService = require('./services/clientAPIService');
var clientAPIFactory = require('./services/clientAPIFactory');
var configValue = require('./config/configValue');

angular.module('app',[]);

//Diretiva de mácara para telefone.
angular.module('app').directive('maskTel',[maskTel]);
//Componente de mensagem de alerta
angular.module('app').directive('alertMsg',[alertMsg]);
//Controller principal
angular.module('app').controller('MainCtrl',['$scope','$http','$filter','clientAPIService','clientAPIFactory','configValue',MainCtrl]);
//Fabrica as funções para manipulação de clientes
angular.module('app').factory('clientAPIFactory',['$http','configValue',clientAPIFactory]);
//Serviço para as funções para manipulação de clientes
angular.module('app').service('clientAPIService',['$http','configValue',clientAPIService]);
//Serviço para as funções para manipulação de clientes
angular.module('app').value('configValue',configValue);
