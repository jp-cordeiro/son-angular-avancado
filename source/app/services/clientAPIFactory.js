module.exports = function ($http,configValue) {

    var _getClientes = function () {
        return $http.get(configValue.apiURL);
    };

    var _saveClientes = function (cliente) {
        return $http.post(configValue.apiURL,cliente);
    };

    return{
        getClientes:_getClientes,
        saveCliente:_saveClientes
    };
};
