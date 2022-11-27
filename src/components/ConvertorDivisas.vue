<template>
    <div id="contenedor">
        <h1>Convertor Divisas {{ monedasComputed }}  <!--{{this.divisa}}--></h1>
        <div>
            <h4>Convierte tus euros para viajar a EEUU , EUROPA O INCLUSO OCEANIA</h4>
            <form method="post" v-on:submit.prevent="convertirMoneda">
                <label class="col-sm-2 col-form-label">Intruduce la moneda local a convertir: </label>
                <input type="number" v-model="monedaLocal" class="form-control" />
                <label class="col-sm-2 col-form-label">Divisa: </label>
                <select v-model="divisa" class="form-control">
                    <option v-for="(pais, index) in monedaPais" :key="index" :value="pais">{{ pais }}</option>
                </select>
                <button @click="this.$store.commit('convertidor',this.convertirMoneda())" class="btn btn-dark">Convertir Moneda</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
    name:"ConvertorDivisas",
    mounted(){
        console.log("La cantidad inicial en el convertor de divisas es de: " +this.$store.state.moneda)//Le decimos a la consola de la aplicacion cual es valor total de las cantidad de dinero que ha depositado en el convertor
    },
    data(){
        return{
            monedaLocal:0,
            monedaDivisa:0,
            divisa:"",
            monedaPais:["EUR","USD","GBP","CAD","AUD","CHF","NOK","DKK","NZD"],
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
                case"EUR"://Euros
                 this.monedaDivisa=this.monedaLocal
                 break;
                 case"USD"://Dolares estado unidenses
                 console.log("local: "+this.monedaLocal);
                 this.monedaDivisa=this.monedaLocal * 1.0418693;
                 break;
                 case"GBP"://libras esterlinas
                 this.monedaDivisa=this.monedaLocal * 0.8604931;
                 break;
                 case"CAD"://canadienses
                 this.monedaDivisa=this.monedaLocal * 1.3912184;
                 console.log(this.monedaDivisa);
                 break;
                 case"AUD"://dolares astrualianos
                 this.monedaDivisa=this.monedaLocal * 1.5438403;
                 break;
                 case"CHF"://francos suizos
                 this.monedaDivisa=this.monedaLocal * 0.98326453;
                 break;
                 case"SEK"://Suecia
                 this.monedaDivisa=this.monedaLocal * 10,846246;
                 break;
                 case"NOK"://NORUEGA
                 this.monedaDivisa=this.monedaLocal * 10.312889;
                 break;
                 case"DKK"://DANESA
                 this.monedaDivisa=this.monedaLocal * 7.4366513;
                 break;
                 case"NZD"://NEOZELANDES
                 this.monedaDivisa=this.monedaLocal * 1.669421;
                 break;
            }
           return this.monedaDivisa;
        }
        
    },
    
}
</script>

<style scoped>
h1{
    background-color: sandybrown;
}
</style>