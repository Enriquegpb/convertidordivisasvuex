import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'//Esta libreria de vuex permite crear la store
const store = createStore({
    state: {
        moneda:0
    },
    mutations:{//basicamente es lo que nos va permitir cambiar el valor del dato que está en el state
        convertidor(state,payload){
            console.log(payload);
            state.moneda= payload;
            console.log("estado final: "+state.moneda);
        },
    }
})
createApp(App).use(store).mount('#app')
