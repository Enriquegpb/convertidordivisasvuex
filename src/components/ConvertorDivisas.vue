<template>
  <h1>Convertor Divisas {{monedasComputed}}</h1>
  <!-- <div>
    <p>Convierte tus euros para viajar a EEUU , EUROPA O INCLUSO OCEANIA</p>
    <form method="post" v-on:submit.prevent="convertirMoneda">
      <label>Intruduce la moneda local a convertir</label>
      <input type="text" v-model="monedaLocal" />
      <select v-model="divisa">
        <option v-for="(pais, index) in monedaPais" :key="index" value="{{pais}}">{{ pais }}</option>
      </select>
    </form>
    <button>Convertir Moneda</button>
  </div> -->
</template>

<script>
export default {
    name:"ConvertorDivisas",
    mounted(){
        console.log("La cantidad inicial en el convertor de divisas es de" +this.$store.state.moneda)//Le ddecimos a la consola de la aplicacion cual es valor total de las cantidad de dinero que ha depositado en el convertor
    },
    data(){
        return{
            monedaLocal:0,
            monedaDivisa:0,
            divisa:"",
            monedaPais:["EUR","USD","GBP","CAD","AUD","CHF","NOK","DKK"]
        }
    },
    computed:{
        monedasComputed(){
            return this.$store.state.moneda;
        }
        
    },
    methods:{
        convertirMoneda(){
            switch(this.divisa){
                case"EUR"://euros
                 this.monedaDivisa=this.monedaLocal
                 break;
                 case"USD"://dolares estado unidenses
                 this.monedaDivisa=this.monedaLocal * 1.0418693;
                 break;
                 case"GBP"://libras esterlinas
                 this.monedaDivisa=this.monedaDivisa * 0.8604931;
                 break;
                 case"CAD"://canadienses
                 this.monedaDivisa=this.monedaDivisa * 1,3912184;
                 break;
                 case"AUD"://dolares astrualianos
                 this.monedaDivisa=this.monedaDivisa * 1,5438403;
                 break;
                 case"CHF"://francos suizos
                 this.monedaDivisa=this.monedaDivisa * 0,98326453;
                 break;
                 case"SEK"://Suecia
                 this.monedaDivisa=this.monedaDivisa * 10,846246;
                 break;
                 case"NOK"://NORUEGA
                 this.monedaDivisa=this.monedaDivisa * 10,312889;
                 break;
                 case"DKK"://DANESA
                 this.monedaDivisa=this.monedaDivisa * 7,4366513;
                 break;
                 case"NZD"://NEOZELANDES
                 this.monedaDivisa=this.monedaDivisa * 1,669421;
                 break;
                 
            }
        }
    },
    
}
</script>

<style scoped>

</style>