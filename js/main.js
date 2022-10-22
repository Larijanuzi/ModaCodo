/*Consumir una API*/

const { createApp } = Vue  

  createApp({
    data() {
      return {
       
        url:'https://randomuser.me/api/?gender=female&results=16&nat=es,br',
        results:[],
        error:false,
        nroerror:0,
        cargando:false
      } 
    },   
    methods: {
      fetchData(url) {

          fetch(url)
              .then(response => response.json())
              .then(data => { 
                  this.results=data.results
                  console.log(this.results)
              })
              .catch(error=>{
                console.log("error"+error)
                this.error=true
                this.nroerror=error
              }
              )

      }
  },
    created(){

      this.fetchData(this.url) 
    }

    
  }).mount('#app')


  /*Validar Formulario*/

  const nombre = document.getElementById("firstname")
  const apellido = document.getElementById("lastname")
  const street = document.getElementById("street")
  const number = document.getElementById("number")
  const city = document.getElementById("city")
  const zipcode = document.getElementById("zipcode")
  const phone = document.getElementById("phone")
  const birthdate = document.getElementById("birthdate")
  const email = document.getElementById("email")
  const pass = document.getElementById("pass")
  const form = document.getElementById("form")
  //const parrafo = document.getElementById("warnings")
  const error = document.getElementById("warnings")

  form.addEventListener("submit", (e) => {
    let warnings = []

    if(nombre.value === "" || nombre.value > 2 || nombre.value == null) {
      warnings.push("El nombre es requerido")
    }

    if (pass.value.length < 8){
      warnings.push("La contraseña debe tener 8 o más caracteres")
    }

    if (warnings.length > 0){
      e.preventDefault()
      error.innerText = warnings.join(", ")
    }
    else{
      error.innerText = "El formulario fue enviado con éxito!"
    }

  })

 /*
  form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.lenght <6){
        warnings += `El nombre es demasiado corto <br>`
        entrar = true
    }
   if(!regexEmail.test(email.value)){
        warnings += `El e-mail es inválido <br>`
        entrar = true
    }
   
    if(pass.value.lenght <4){
      warnings += `La contraseña no es válida <br>`
      entrar = true
    }

    if(entrar) {
      parrafo.innerHTML = warnings
    }
    else{
      parrafo.innerHTML = "El formulario fue enviado"
    }

  }) */
