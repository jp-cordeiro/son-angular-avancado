module.exports = function ($http) {

    this.getClientes = function () {
        return $http.get('http://localhost:8080');
    };

    this.saveCliente = function (cliente) {
        return $http.post('http://localhost:8080',cliente);
    };
};
