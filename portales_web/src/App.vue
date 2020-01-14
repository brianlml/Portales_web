<template>
  <div>
    <router-link to="/figs">Figs</router-link>

    <router-view/>      
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