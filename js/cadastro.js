let form = $('#form').submit((event) => {
    event.preventDefault()
    $('#alertSubmit').removeClass('d-none')
    return cadastro()
})

function cadastro() {
    function comparaEmailESenha() {
        let email = $('#email').val()
        let confirmaEmail = $('#confirmaEmail').val()
        let senha = $('#senha').val()
        let confirmaSenha = $('#confirmaSenha').val()

        if (email !== confirmaEmail) {
            $('#camposIguaisEmail').removeClass('d-none')
            setTimeout(setAlert, 2000)
        }
        if (senha !== confirmaSenha) {
            $('#camposIguaisSenha').removeClass('d-none')
            setTimeout(setAlert, 2000)
        }
    }
    comparaEmailESenha()
    function senhaForte() {
        let senha = $('#senha').val()
        if (senha.length === 0) {
            return
        }
        else if (senha.length <= 7) {
            $('#senhaForte').removeClass('d-none')
            setTimeout(setAlert, 2000)
        }
    } setTimeout(senhaForte, 2000)
}

$(document).ready(function () {
    let cpf = $('#cpf')
    cpf.mask('000.000.000-00')

    let rg = $('#rg')
    rg.mask('00.000.000-0')
})

$(document).ready(function () {
    $('#cep').blur(function () {
        let cepDigitado = $(this).val()
        try {
            if (cepDigitado.length === 8) {
                $.get('https://viacep.com.br/ws/' + cepDigitado + '/json/', function (dados, status) {
                    try {
                        if (dados.erro !== 'true') {
                            console.log(dados, status)
                            $('#pais').val('Brasil').attr('readonly', 'true').attr('disabled', 'true')
                            $('#uf').val(dados.uf).attr('readonly', 'true').attr('disabled', 'true')
                            $('#cidade').val(dados.localidade).attr('readonly', 'true').attr('disabled', 'true')
                            $('#bairro').val(dados.bairro).attr('readonly', 'true').attr('disabled', 'true')
                            $('#rua').val(dados.logradouro).attr('readonly', 'true').attr('disabled', 'true')
                        }
                        else {
                            throw new Error('CEP inválido')
                        }
                    } catch (e) {
                        console.log(e)
                        $('#cepInvalido').removeClass('d-none')
                    }
                })
            } else {
                throw new Error('Seu CEP precisa ter 8 caracteres')
            }
        } catch (e) {
            $('#cepPequeno').removeClass('d-none')
        }


    })
})

function setAlert() {
    $('#senhaForte').addClass('d-none')
    $('#camposIguaisEmail').addClass('d-none')
    $('#camposIguaisSenha').addClass('d-none')
}