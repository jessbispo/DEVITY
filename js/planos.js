$('#newsletter').blur(function() {
    let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if (testEmail.test(this.value)) {
      return true  
    } 
    else {
        alert ("Email invalido") 
    }
});

let btn = $('#btnProduto').on('click',() => {
  location.assign("form.html")
})
 


let botao = $('#assine').on('click',() => {
    location.assign("form.html")
  })

  let logo = $('#logo').on('click',() => {
    location.assign("../index.html")
  })
  