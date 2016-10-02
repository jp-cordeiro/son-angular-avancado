module.exports = function ($http) {

    var _getClientes = function () {
        return $http.get('http://localhost:8080');
    };

    var _saveClientes = function (cliente) {
        return $http.post('http://localhost:8080',cliente);
    };

    return{
        getClientes:_getClientes,
        saveCliente:_saveClientes
    };
};
