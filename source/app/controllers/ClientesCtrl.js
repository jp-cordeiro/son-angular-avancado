module.exports = function ($scope,$http,$filter,clientAPIService,clientAPIFactory,configValue,bonusGenerator,routeInfo) {
    $scope.titulo = $filter("uppercase")(configValue.appName);

    $scope.clients = [];

    $scope.dia = new Date();
    
    $scope.total = 1500.58;
    
    $scope.msg = "";
    
    $scope.page = routeInfo.routeName;

    $scope.navClass = routeInfo.navClass;

    // var bonus = '';
    // for (var i = 5; i > 0; --i) {
    //     bonus += Math.floor(Math.random() * 10);
    // }
    $scope.bonus = "Cod. Bonus: " + bonusGenerator.generator();
    
    var listClients = function(){
        clientAPIFactory.getClientes().success(function(data,status){
            //console.log(data);
            //console.log(status);
            $scope.clients = data;
        });
    };
    var addClients = function(client){
        clientAPIFactory.saveCliente(client).success(function(data,status){
            // console.log(data);
            // console.log(status);
            listClients();
        });
    };
    var destroyClients = function(client){
        client.delete = true;
        clientAPIFactory.saveCliente(client).success(function(data,status){
            // console.log(data);
            // console.log(status);
        });
    };

    listClients();

    $scope.add = function(client){
        addClients(angular.copy(client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.msg = "Registro adicionado com sucesso!";
    };
    $scope.edit = function(client){
        $scope.client = client;
        $scope.editing = true;
        $scope.msg = "";
    };
    $scope.save = function() {
        addClients(angular.copy($scope.client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.editing = false;
        $scope.msg = "Registro alterado com sucesso!";
    };
    $scope.destroy = function(client) {
        $scope.clients.splice($scope.clients.indexOf(client),1);
        destroyClients(client);
        $scope.msg = "Registro excluído com sucesso!";

    };
    $scope.orderBy = function(col){
        $scope.order = col;
        $scope.reverse = !$scope.reverse;
    };
};