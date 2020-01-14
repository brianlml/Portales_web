<template>
  <div>


      <Navbar/>
      <Slide/>
    <router-view/>
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