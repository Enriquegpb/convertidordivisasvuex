import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'
const store = createStore({
    state: {
        moneda:0
    },
    mutations:{
        convertidor(state,payload){
            console.log(payload);
            state.moneda= payload;
            console.log("estado final: "+state.moneda);
        },
    }
})
createApp(App).use(store).mount('#app')
