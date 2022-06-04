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
}

$(document).ready(function() {
    let cpf = $('#cpf')
    cpf.mask('000.000.000-00')

    let rg = $('#rg')
    rg.mask('00.000.000-0')
})



$(document).ready(function () {
    $('#cep').blur(function () {
        let cepDigitado = $(this).val()
        $.get('https://viacep.com.br/ws/' + cepDigitado + '/json/', function (dados, status) {
            if (status === 'success') {
            $('#pais').val('Brasil').attr('readonly', 'true').attr('disabled', 'true')
            $('#uf').val(dados.uf).attr('readonly', 'true').attr('disabled', 'true')
            $('#cidade').val(dados.localidade).attr('readonly', 'true').attr('disabled', 'true')
            $('#bairro').val(dados.bairro).attr('readonly', 'true').attr('disabled', 'true')
            $('#rua').val(dados.logradouro).attr('readonly', 'true').attr('disabled', 'true')
        } // falta um else if, para checar se o cep existe
        else {
            alert('Ocorreu um problema na sua requisição. Por favor, tente novamente.')
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

//TODOS os alerts com problema
//tratativa de erro de requisição
//trativa de erro se algum campo for 0 
//finalização (função que coloca tudo junto e manda alert de cadastrado)