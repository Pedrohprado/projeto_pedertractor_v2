const validaNome = `treinamentoeq`
const validaSenha = `treinamentoeq`


const enviar = document.querySelector(`#btn`)

enviar.addEventListener(`click`, function(e){
    e.preventDefault()

    let name1 = document.querySelector(`#name`).value
    let pass1 = document.querySelector(`#password`).value


    if(name1 != validaNome || pass1 != validaSenha){
        alert(`dados incorretos`)
    }
    else {
        top.location.href = `menu.html`
    }
})