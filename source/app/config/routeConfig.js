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
            controller: "ClientesCtrl",
            resolve: {
                routeInfo: function () {
                    return {
                        routeName: "Lista de Clientes",
                        navClass: "navbar-default"
                    }
                }
            }
        })

        .when("/cliente/:id", {
            templateUrl: "view/cliente.html",
            controller: "ClienteCtrl",
            resolve: {
                routeInfo: function () {
                    return {
                        routeName: "Cliente",
                        navClass: "navbar-inverse"
                    }
                }
            }
        })

        .otherwise(
            {redirectTo: "/home"})
    ;
};
