<template>
  <div id="app">
    <Headers />
    <router-view /> 
  </div>
</template>

<script> 
import Headers from './components/Headers.vue'


export default {
  name: 'App',
  components: { 
    Headers
  }
}
</script>

<style>
* {
        margin:0px;
        padding:0;
        list-style: none;
        text-decoration:none;
    
    }
#app {
  font-family: Romobo,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    
}
</style>
