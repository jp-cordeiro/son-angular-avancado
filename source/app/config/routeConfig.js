module.exports = function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "view/home.html",
            controller: "MainCtrl",
            resolve: {
                routeInfo: function () {
                    return {
                        routeName: "Home",
                        navClass: "navbar-inverse"
                    }
                }
            }
        })

        .when("/clientes", {
            templateUrl: "view/clientes.html",
            controller: "MainCtrl",
            resolve: {
                routeInfo: function () {
                    return {
                        routeName: "Lista de Clientes",
                        navClass: "navbar-default"
                    }
                }
            }
        })

        .otherwise(
            {redirectTo: "/home"})
    ;
};
