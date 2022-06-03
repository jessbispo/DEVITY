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
    
    function senhaForte() {
        let senha = $('#senha').val()
        if (senha.length !== null && senha.length <= 7) {
           $('#senhaForte').removeClass('d-none') 
           setTimeout(setAlert, 2000)       
        } 
    } setTimeout(senhaForte, 4000) 
}

function setAlert(){
    $('#senhaForte').addClass('d-none')     
    $('#camposIguais').addClass('d-none')
}

//RG
//CPF