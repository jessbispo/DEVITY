
function MudaCard(event){
    event.preventDefault();
                                                      
    let msg = document.getElementById("msg-verifica");
    msg.style.visibility = "visible";
    
    setTimeout(()=>{
        let antigo = document.getElementById("card-back");
    antigo.style.visibility = "hidden";
    
    let novo = document.getElementById("card-alterar-senha");
    novo.style.visibility = "visible";
    }, 2000)
}

function alteraSenha(event) {
    event.preventDefault();
    
    let primeiraSenha = document.getElementById ("primeiraSenha").value;
    let segundaSenha = document.getElementById ("segundaSenha").value;
    
        if (primeiraSenha!=segundaSenha){
             alert ("senhas não coincidem");
             }
    
        else {
            let msg = document.getElementById("msg-senha");
            msg.style.visibility = "visible";
            
            setTimeout(()=>{
                window.location.href = "../pages/login.html";
            }, 2000);
            
        }
    
    
    
}