require('angular');
require('./locale/angular-locale_pt-br');

var MainCtrl = require('./controllers/MainCtrl');
var maskTel = require('./diretives/maskTel');
var alertMsg = require('./diretives/alertMsg');
var clientAPIService = require('./services/clientAPIService');
var clientAPIFactory = require('./services/clientAPIFactory');
var bonusGenerator = require('./services/bonusGenerator');
var configValue = require('./config/configValue');
var configBonusProvider = require('./config/configBonusProvider');

angular.module('app',[]);

//Controller principal
angular.module('app').controller('MainCtrl',['$scope','$http','$filter','clientAPIService','clientAPIFactory','configValue','bonusGenerator',MainCtrl]);
//Diretiva de mácara para telefone.
angular.module('app').directive('maskTel',[maskTel]);
//Componente de mensagem de alerta
angular.module('app').directive('alertMsg',[alertMsg]);
//Fabrica as funções para manipulação de clientes
angular.module('app').factory('clientAPIFactory',['$http','configValue',clientAPIFactory]);
//Serviço para as funções para manipulação de clientes
angular.module('app').service('clientAPIService',['$http','configValue',clientAPIService]);
//Serviço para as funções para manipulação de clientes
angular.module('app').value('configValue',configValue);
//Provider para gerar número de bonus
angular.module('app').provider('bonusGenerator',[bonusGenerator]);
 //Configuração para registrar o provider
angular.module('app').config(['bonusGeneratorProvider',configBonusProvider]);
