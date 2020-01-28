<template>
  <div class="navbar">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <b-nav-item style="list-style:none">
        <img src="../assets/logoblanco.png" height="50px" width="auto"></b-nav-item>
        <router-link class="router-link-exact-active" to="/">Inicio</router-link> |
        <router-link class="router-link-exact-active" to="/lugares">Lugares</router-link>
      </div>
    </nav>
    
  </div>
</template>
<script>

export default {
   components: {
   
  }
};
</script>


<style>
.router-link-exact-active {
  
  color:#ff8d1e;

}

</style>