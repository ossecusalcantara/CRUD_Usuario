// Controller - Usuario:


usuarioApp.controller('usuarioCtrl', function ($scope, usuarioService) {
    carregarUsuarios();

    //Método reponsável por carregar todas a propriedades do usuario
    function carregarUsuarios() {

        var listarUsuarios = usuarioService.getTodosUsuarios();

        listarUsuarios.then(function (d) {

            $scope.usuarios = d.data;

        },
            function () {
                alert('Ocorreu Erro Controller.js')
            });
    }

    //Método reponsável por cada propriedades de um novo usuario
    $scope.adicionarUsuario = function () {
        var usuario = {
            usuario1: $scope.usuario1,
            nm_usuario: $scope.nm_usuario,
            cpf: $scope.cpf,
            telefone: $scope.telefone,
            email: $scope.email,
            logradouro: $scope.logradouro,
            bairro: $scope.bairro,
            cidade: $scope.cidade,
            estado: $scope.estado,
            numero: $scope.numero
        };

        if (usuario.nm_usuario == null || usuario.cpf == null) {
            alert("Preencha os campos vazios");
            return false;
        }

        var adicionarInfos = usuarioService.adicionarUsuario(usuario);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarUsuarios();
                alert("Usuario Cadastrado Com Sucesso, código: ")

                $scope.limparDados();
            }
            else {
                alert("Usuario Não Adicionado!");
            }
        },
            function () {
                alert("Erro ocorrido ao tentar adicionar um novo usuario!")
            });
    }

    //Limpar os campos após inserir os dados do db
    $scope.limparDados = function () {
        $scope.usuario = '';
        $scope.nm_usuario = '';
        $scope.cpf = '';
        $scope.telefone = '';
        $scope.email = '';
        $scope.logradouro = '';
        $scope.bairro = '';
        $scope.cidade = '';
        $scope.estado = '';
        $scope.numero = '';
    }
});