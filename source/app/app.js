require('angular');
require('./locale/angular-locale_pt-br');

var MainCtrl = require('./controllers/MainCtrl');

var maskTel = require('./diretives/maskTel');

angular.module('app',[]);

angular.module('app').directive('maskTel',[maskTel]);

angular.module('app').controller('MainCtrl',['$scope','$http','$filter',MainCtrl]);
