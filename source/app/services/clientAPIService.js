module.exports = function ($http,configValue) {

    this.getClientes = function () {
        return $http.get(configValue.apiURL);
    };

    this.saveCliente = function (cliente) {
        return $http.post(configValue.apiURL,cliente);
    };
};
