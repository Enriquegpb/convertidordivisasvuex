<template>
  <convertor-divisas></convertor-divisas>
</template>

<script>
import ConvertorDivisas from './components/ConvertorDivisas.vue'


export default {
  name: 'App',
  components: {
    ConvertorDivisas,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}
*{
  background-color:blanchedalmond;
}
</style>
