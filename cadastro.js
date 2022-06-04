let form = $('#form').submit((event) => {
    event.preventDefault()
    return cadastro()
})

function cadastro() {
    function comparaEmailESenha() {
        let email = $('#email').val()
        let confirmaEmail = $('#confirmaEmail').val()
        let senha = $('#senha').val()
        let confirmaSenha = $('#confirmaSenha').val()

        if (email !== confirmaEmail) {
            $('#camposIguais').removeClass('d-none')
            setTimeout(setAlert, 2000)
        }
        if (senha !== confirmaSenha) {
            $('#camposIguais').removeClass('d-none')
            setTimeout(setAlert, 2000)
        }
    }
    comparaEmailESenha()
}//apagar 

$(document).ready(function () {
    $('#cep').blur(function () {
        let cepDigitado = $(this).val()
        $.get('https://viacep.com.br/ws/' + cepDigitado + '/json/', function (dados, status) {
            if (status === success) {
                $('#pais').val('Brasil')
                $('#uf').val(dados.uf)
                $('#cidade').val(dados.localidade)
                $('#bairro').val(dados.bairro)
                $('#rua').val(dados.logradouro)
            } else {
                alert('Digite um CEP válido')
            }
        })
    })
})

/*function senhaForte() {
    let senha = $('#senha').val()
    if (senha.length !== null || senha.length <= 7) {
       $('#senhaForte').removeClass('d-none')
       setTimeout(setAlert, 2000)
    }
} senhaForte()
}

function setAlert(){
$('#senhaForte').addClass('d-none')
$('#camposIguais').addClass('d-none')
}*/

//RG
//CPF