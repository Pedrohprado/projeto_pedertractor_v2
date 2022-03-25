const fields = document.querySelectorAll('[required]')

console.log(fields)

function customValidation(Event) {
    const fiel = Event.target

   function verifyErrors() {
       let foundError = false;

       for(let error in field.validity) {
            // se não for customError
            //então verifica se tem erro

            if(error != 'customError' && field.validity[error]) {
                foundError = true
            }

        }

       return foundError;
   }

   const error = verifyErrors()
   console.log('Error Exists: ', error)

   if (error) {
        //Troca mensagem do required
        fiel.setCustomValidity('Campo obrigatório!')
    } else {
        field.setCustomValidity('')
    }

}



for (field of fields) {
    field.addEventListener('invalid', customValidation)
}

document.querySelector("form")
.addEventListener("submit", Event => {
    console.log("enviar formulário")

    Event.preventDefault()
})