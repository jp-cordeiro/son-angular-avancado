module.exports = function ($scope,$http,$filter) {
    $scope.titulo = $filter("uppercase")("Evoluindo com Angularjs");
    
    $scope.clients = [];

    $scope.dia = new Date();
    
    $scope.total = 1500.58;
    
    $scope.msg = "";
    
    var listClients = function(){
        $http.get('http://localhost:8080').success(function(data,status){
            //console.log(data);
            //console.log(status);
            $scope.clients = data;
        });
    };
    var addClients = function(client){
        $http.post('http://localhost:8080',client).success(function(data,status){
            // console.log(data);
            // console.log(status);
            listClients();
        });
    };
    var destroyClients = function(client){
        client.delete = true;
        $http.post('http://localhost:8080',client).success(function(data,status){
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