module.exports = function ($routeProvider) {
    $routeProvider
        .when("/clientes", {
            templateUrl: "view/clientes.html",
            controller: "MainCtrl",
            resolve:{
                routeName: function () {
                    return "Lista de Clientes"
                }
            }
        })

    ;
};
