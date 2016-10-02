module.exports = function ($scope,$filter,configValue,routeInfo) {
    $scope.titulo = $filter("uppercase")(configValue.appName);

    $scope.clients = [];

    // $scope.dia = new Date();
    //
    // $scope.total = 1500.58;
    
    $scope.msg = "";
    
    $scope.page = routeInfo.routeName;

    $scope.navClass = routeInfo.navClass;

    // var bonus = '';
    // for (var i = 5; i > 0; --i) {
    //     bonus += Math.floor(Math.random() * 10);
    // }

};