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