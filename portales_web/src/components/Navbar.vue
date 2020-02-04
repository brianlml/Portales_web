<template>
  <div>
   <div>
      <b-navbar id="navbar" toggleable="md" type="dark" variant="dark" class="fixed-top texto">
      <b-navbar-brand class="d-md-none">
      <router-link to="/"><h5>Pasaje Portales</h5></router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="collapse-area"></b-navbar-toggle>
      <b-collapse id="collapse-area" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/"><img src="../assets/icons/inicio.png" width="30" height="30"></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="d-none d-md-block mx-auto">
          <b-nav-text>
           <router-link to="/"><h3 style="color:#fff;">Pasaje Portales</h3></router-link>
          </b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="/lugares"><img src="../assets/icons/lugares.png" width="30" height="30"></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
   </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style>
.router-link-exact-active {
  color: #fff;
}
.router-link-exact-active:hover {
  text-decoration: none;
  color: #fff;
}
.router-link-active {
  color: #fff;
}
.router-link-active:hover {
  text-decoration: none;
  color: #fff;
}
.texto {
  background: linear-gradient(#1c375c, #2c778d)
}
</style>