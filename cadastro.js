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
            alert('Os endereços de email precisam ser estritamente iguais.')
        }
        if (senha !== confirmaSenha) {
            alert('As senhas digitadas não estão idênticas')
        }
    } comparaEmailESenha()
    
    function senhaForte() {
        let senha = $('#senha').val()
        let span = $('span')
        if (senha.length <= 7) {
            span.append('Sua senha deve conter mais de 7 caracteres').style.addClass('px-3')
        }
    } senhaForte()
}

//RG
//CPF*/
