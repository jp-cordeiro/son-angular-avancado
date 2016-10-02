module.exports = function ($http,configValue) {

    var _getClientes = function () {
        return $http.get(configValue.apiURL);
    };

    var _getCliente = function (id) {
        return $http.get(configValue.apiURL + "?id=" + id);
    };
    
    var _saveClientes = function (cliente) {
        return $http.post(configValue.apiURL,cliente);
    };

    return{
        getClientes:_getClientes,
        saveCliente:_saveClientes,
        getCliente: _getCliente
    };
};
