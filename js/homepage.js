//redirecionando botoes da pagina inicial 

$('#newsletter').blur(function() {
    let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if (testEmail.test(this.value)) {
      return true  
    } 
    else {
        return false; 
    }
});


// let logo = $('#logo').on('click', ()=>{
//     location.assign("seila.html")
// })

// let planos = $('#planos').on('click', ()=>{
//     location.assign("seila.html")
// })

// let sobre = $('#sobre').on('click', ()=>{
//     location.assign("seila.html")
// })

// let login = $('#login').on('click', ()=>{
//     location.assign("seila.html")
// })

// let assine = $('#assine').on('click', ()=>{
//     location.assign("seila.html")
// })

// let assineBtn = $('#assineBtn').on('click', ()=>{
//     location.assign("seila.html")
// })

