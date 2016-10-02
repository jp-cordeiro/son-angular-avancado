module.exports = function ($scope,$filter,clientAPIFactory,configValue,routeInfo,$routeParams) {
    $scope.titulo = $filter("uppercase")(configValue.appName);

    $scope.clients = [];

    $scope.dia = new Date();
    
    $scope.total = 1500.58;
    
    $scope.msg = "";
    
    $scope.page = routeInfo.routeName;

    $scope.navClass = routeInfo.navClass;

    var idCliente = $routeParams.id;

    
    var listClient = function(){
        clientAPIFactory.getCliente(idCliente).success(function(data,status){
            //console.log(data);
            //console.log(status);
            $scope.client = data;
        });
    };

    listClient();
};