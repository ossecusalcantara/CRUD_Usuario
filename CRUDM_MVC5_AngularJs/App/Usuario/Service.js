usuarioApp.service('usuarioService', function ($http) {
    //Método reponsálvel por listar todos usuarios: READ
    this.getTodosUsuarios = function () {
        return $http.get("/usuario/GetUsuarios");
    }

    //Serviço para adicionar usuario: CREAT
    this.adicionarUsuario = function (usuario) {
        var request = $http({
            method: 'post',
            url: '/usuario/AdicionarUsuario',
            data: usuario
        });

        return request;
    }

});
