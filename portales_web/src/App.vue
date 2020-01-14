<template>
  <div>
<<<<<<< HEAD
    
    <router-view/>
=======
    <router-link to="/figs">Figs</router-link>

    <router-view/>      
>>>>>>> 2ddf248914c699f67d87c9a8455cf7fd74001f9e
      <Navbar/>
      <Slide/>
      <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Slide from './components/Slide.vue'
import Footer from './components/Footer.vue'
export default {
components:{
  Navbar, Slide, Footer
}
}
</script>

<style>

</style>