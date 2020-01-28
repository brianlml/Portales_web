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
  
  color:#fff;

}
.router-link-exact-active:hover {
  text-decoration: none;
  color:#fff;
}
.router-link-active{
  color:#fff;
}
.router-link-active:hover {
  text-decoration: none;
  color:#fff;
}

</style>