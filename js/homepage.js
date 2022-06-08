//redirecionando botoes da pagina inicial 

$('#newsletter').blur(function() {
    let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if (testEmail.test(this.value)) {
      return true  
    } 
    else {
        alert ("Email invalido") 
    }
});

