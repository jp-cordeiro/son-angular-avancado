module.exports = function ($http) {

    var _getClientes = function () {
        return $http.get('http://localhost:8080');
    };

    var _saveClinetes = function () {
        return $http.post('http://localhost:8080');
    }

    return{
        getClientes:_getClientes,
        saveCliente: _saveClinetes
    }
}
