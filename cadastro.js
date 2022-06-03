let form = $('#form').submit((event) => {
    event.preventDefault()
    return cadastro()
})

function cadastro() {
    function comparaEmail() {
        let email = $('#email').val()
        let confirmaEmail = $('#confirmaEmail').val()
    
        if (email !== confirmaEmail) {
            alert('Os endereços de email precisam ser estritamente iguais.')
        }
    }
    comparaEmail()
    
    function comparaSenha() {
        let senha = $('#senha').val()
        let confirmaSenha = $('#confirmaSenha').val()
        
        if (senha !== confirmaSenha) {
            alert('As senhas digitadas não estão idênticas')
        }
    }
    comparaSenha()

    //RG
    //CPF
}
